import test from 'node:test';import assert from 'node:assert/strict';import {readFile,readdir,stat} from 'node:fs/promises';import {join,resolve,dirname} from 'node:path';import {pages} from './content.mjs';
const root=resolve('build');
async function files(dir){let all=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);all.push(...e.isDirectory()?await files(p):[p]);}return all;}
test('all expected pages generated with accessible structure',async()=>{for(const p of ['index.html','404.html',...pages.map(p=>'docs/'+p.slug+'/index.html')]){const html=await readFile(join(root,p),'utf8');assert.match(html,/<html lang="ko">/);assert.match(html,/name="viewport"/);assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.match(html,/id="main"/);assert.match(html,/aria-labelledby="search-title"/);assert.match(html,/rel="canonical"/);assert.doesNotMatch(html,/dyte|hipaa|soc compliant|statuspage|googletagmanager|algolia/i);}});
test('internal links and asset paths resolve, including anchors',async()=>{for(const file of (await files(root)).filter(p=>p.endsWith('.html'))){const html=await readFile(file,'utf8');for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const raw=m[1];if(/^https?:\/\//.test(raw))continue;const [path,hash]=raw.split('#');let target=path?(path.startsWith('/')?join(root,path):resolve(dirname(file),path)):file;if((await stat(target)).isDirectory())target=join(target,'index.html');await stat(target);if(hash){assert.match(await readFile(target,'utf8'),new RegExp('id="'+hash+'"'));}}}});
test('search includes all pages and important terms',async()=>{const search=JSON.parse(await readFile(join(root,'search.json'),'utf8'));assert.equal(search.length,pages.length);for(const word of ['ruleSetId','rollback','rate limit'])assert.ok(search.some(p=>(p.title+' '+p.text).toLowerCase().includes(word.toLowerCase())),word);});
test('only explicit portal files are shipped',async()=>{const output=await files(root);assert.equal(output.filter(p=>p.endsWith('.html')).length,2*(pages.length+2));assert.ok(output.every(p=>!p.includes('/modules/')&&!p.includes('/static/')));assert.equal(await readFile(join(root,'LICENSE'),'utf8'),await readFile('LICENSE','utf8'));assert.ok((await stat(join(root,'assets/style.css'))).size<40000);});
test('current Maven coordinates, upgrade notes and Spring advisories are visible in both languages',async()=>{
 const {pages:english}=await import('./content.en.mjs');
 for(const locale of [pages,english]){
  const start=locale.find(p=>p.slug==='start');
  const recipe=start.sections.map(s=>s.code||'').join('\n');
  assert.match(recipe,/<artifactId>fluxgate-spring-boot3-starter<\/artifactId>\n +<version>0\.5\.0<\/version>/);
  assert.match(recipe,/io\.github\.openfluxgate:fluxgate-spring-boot3-starter:0\.5\.0/);
  assert.match(recipe,/dependency:tree/);
  assert.match(recipe,/dependencyInsight/);
  assert.match(JSON.stringify(start),/fluxgate-spring-boot2-starter/);
  assert.ok(start.sections.flatMap(s=>s.links||[]).some(([,url])=>url.endsWith('/releases/tag/v0.3.8')));
  const upgrade=JSON.stringify(locale.find(p=>p.slug==='upgrade'));
  for(const term of ['0.3.7','ACL','TTL','shared-redis-legacy-migration']) assert.ok(upgrade.includes(term),term);
  const core=JSON.stringify(locale.find(p=>p.slug==='core'));
  for(const term of ['CVE-2016-1000027','no-remoting','knowledge.broadcom.com','release-0.5.0-readiness']) assert.ok(core.includes(term),term);
 }
});

test('both release pages link to the published parent and all seven Maven binaries',async()=>{
 const names=['core','redis-ratelimiter','mongo-adapter','control-support','spring-boot2-starter','spring-boot3-starter','envoy-extauth'];
 const base='https://repo.maven.apache.org/maven2/io/github/openfluxgate';
 for(const prefix of ['','en/']){
  const html=await readFile(join(root,prefix+'docs/releases/index.html'),'utf8');
  assert.ok(html.includes('href="https://github.com/OpenFluxGate/fluxgate/releases/tag/v0.5.0"'));
  assert.ok(html.includes('href="'+base+'/fluxgate/0.5.0/fluxgate-0.5.0.pom"'));
  for(const module of names){
   const file='fluxgate-'+module;
   assert.ok(html.includes('href="'+base+'/'+file+'/0.5.0/'+file+'-0.5.0.jar"'),file);
  }
  const prompt=await readFile(join(root,prefix+'docs/quickstart/index.html'),'utf8');
  assert.ok(prompt.includes('https://github.com/OpenFluxGate/fluxgate/releases/tag/v0.5.0'));
  assert.doesNotMatch(prompt,/0\.5\.0을 이미 발행된 것으로 가정|Do not assume 0\.5\.0 has been published/);
 }
});

test('Studio downloads, versioned installation guides and existing public demos appear in both languages',async()=>{
 const release='https://github.com/OpenFluxGate/fluxgate-studio/releases';
 const assets=['fluxgate-studio-admin-api-0.5.0.zip','fluxgate-studio-ui-0.5.0.zip','fluxgate-studio-0.5.0-source.tar.gz','SHA256SUMS'];
 for(const prefix of ['','en/']){
  for(const slug of ['studio','releases']){
   const html=await readFile(join(root,prefix+'docs/'+slug+'/index.html'),'utf8');
   assert.ok(html.includes('href="'+release+'/tag/v0.5.0"'));
   for(const file of assets) assert.ok(html.includes('href="'+release+'/download/v0.5.0/'+file+'"'),file);
  }
  const studio=await readFile(join(root,prefix+'docs/studio/index.html'),'utf8');
  assert.ok(studio.includes(prefix ? 'README.md#quick-start' : 'README.ko.md#빠른-시작'));
  assert.ok(studio.includes(prefix ? 'earlier demo with masked data' : '마스킹한 기존 Studio 데모'));
  assert.ok(studio.includes('href="http://13.124.192.116:3000/"'));
  assert.ok(studio.includes('href="http://13.124.192.116:8080/swagger-ui/index.html"'));
 }
});

test('the home and shared navigation point to the current release in both languages',async()=>{
 for(const prefix of ['','en/']){
  const home=await readFile(join(root,prefix+'index.html'),'utf8');
  assert.ok(home.includes(prefix ? 'Core and Studio 0.5.0' : 'Core와 Studio 0.5.0'));
  assert.match(home,/fluxgate-spring-boot3-starter:0\.5\.0/);
  assert.doesNotMatch(home,/<video|<iframe|REQUEST LIFECYCLE|트래픽은 흐르게/);
  for(const path of ['index.html',...pages.map(p=>'docs/'+p.slug+'/index.html')]){
   const html=await readFile(join(root,prefix+path),'utf8');
   assert.match(html,/<strong>Core 0\.5\.0<\/strong>/);
   assert.doesNotMatch(html,/0\.5\.0은 (검증 중|미출시)|0\.5\.0 is (under validation|unreleased|a development and validation track)/);
  }
 }
});

test('paper explainer retains poster fallback and prompt setup safety boundaries',async()=>{const home=await readFile(join(root,'index.html'),'utf8');assert.match(home,/id="paper-animation" src="\/assets\/fluxgate-paper.webp"/);assert.match(home,/id="paper-toggle"/);assert.match(home,/성능 보증이나 운영 SLA가 아닙니다/);assert.match(home,/Lua의 KEYS\[1\]/);assert.ok((await stat(join(root,'assets/fluxgate-paper.gif'))).size<1048576);assert.match((await readFile(join(root,'assets/fluxgate-paper.gif'))).subarray(0,6).toString(),/GIF8[79]a/);const guide=pages.find(p=>p.slug==='quickstart');assert.ok(guide);const text=JSON.stringify(guide);for(const term of ['자연어 설정 기능은 아닙니다','실제 빌드 설정','보안 게이트','0.3.8','0.3.7'])assert.ok(text.includes(term),term);});


test('English documents have complete matching sections and localized navigation',async()=>{
 const {pages:english}=await import('./content.en.mjs'); assert.deepEqual(english.map(p=>p.slug),pages.map(p=>p.slug));
 for(const [i,p] of english.entries()){assert.equal(p.sections.length,pages[i].sections.length,p.slug);const html=await readFile(join(root,'en/docs/'+p.slug+'/index.html'),'utf8');assert.match(html,/<html lang="en">/);assert.doesNotMatch(html.replaceAll('한국어',''),/[가-힣]/);assert.match(html,/href="\/docs\//);assert.match(html,/id="theme-select"/);assert.match(html,/hreflang="ko"/);}
 const index=JSON.parse(await readFile(join(root,'en/search.json'),'utf8'));assert.equal(index.length,english.length);assert.ok(index.every(p=>p.url.startsWith('/en/docs/')));
 const home=await readFile(join(root,'en/index.html'),'utf8');assert.doesNotMatch(home.replaceAll('한국어',''),/[가-힣]/);assert.match(home,/50K TPS/);assert.match(home,/fluxgate-spring-boot3-starter:0\.5\.0/);
});
test('theme preference follows system, persists explicit choice and handles storage changes',async()=>{
 const {runInNewContext}=await import('node:vm');const js=await readFile('portal/assets/app.js','utf8');const theme=js.slice(js.indexOf('const themeSelect='));
 let stored='system';const events={};const select={value:'',addEventListener:(k,fn)=>events[k]=fn};const media={matches:true,addEventListener:(k,fn)=>events.media=fn};const document={documentElement:{dataset:{}},querySelector:()=>select};
 runInNewContext(theme,{document,matchMedia:()=>media,localStorage:{getItem:()=>stored,setItem:(k,v)=>stored=v},window:{addEventListener:(k,fn)=>events[k]=fn}});
 assert.equal(document.documentElement.dataset.theme,'dark');media.matches=false;events.media();assert.equal(document.documentElement.dataset.theme,'light');select.value='dark';events.change();assert.equal(stored,'dark');events.media();assert.equal(document.documentElement.dataset.theme,'dark');events.storage({key:'fluxgate-theme',newValue:'system'});assert.equal(document.documentElement.dataset.theme,'light');
});


test('animation autoplay respects reduced motion and manual stop',async()=>{
 const {runInNewContext}=await import('node:vm');const js=await readFile('portal/assets/app.js','utf8');const snippet=js.slice(js.indexOf('const paper='),js.indexOf('// Explicit selection'));
 for(const reduced of [true,false]){const events={};const img={src:'/assets/fluxgate-paper.webp',addEventListener:(k,fn)=>events[k]=fn};const btn={textContent:'Play',setAttribute:(k,v)=>btn[k]=v,addEventListener:(k,fn)=>events.click=fn};const status={};const media={matches:reduced,addEventListener:(k,fn)=>events.motion=fn};const document={querySelector:s=>s==='#paper-animation'?img:s==='#paper-toggle'?btn:status};runInNewContext(snippet,{document,matchMedia:()=>media,t:(ko,en)=>en});assert.ok(img.src.endsWith(reduced?'.webp':'.gif'));events.click();assert.ok(img.src.endsWith(reduced?'.gif':'.webp'));media.matches=true;events.motion();assert.ok(img.src.endsWith('.webp'));assert.equal(btn['aria-pressed'],'false');}
});
