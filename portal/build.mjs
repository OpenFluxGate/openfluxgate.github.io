import {mkdir,writeFile,rm,copyFile} from 'node:fs/promises';
import {pages as koreanPages} from './content.mjs';
import {pages as englishPages} from './content.en.mjs';
if(JSON.stringify(koreanPages.map(p=>p.slug))!==JSON.stringify(englishPages.map(p=>p.slug)))throw new Error('English documentation must cover every Korean route in the same order');
const out=new URL('../build/',import.meta.url);
await rm(out,{recursive:true,force:true});await mkdir(new URL('assets/',out),{recursive:true});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Static UI/home text is translated explicitly; document content comes from content.en.mjs.
const englishUI = new Map(Object.entries({
  "FluxGate 설치, 통합, 운영 및 버전별 업그레이드 가이드": "Guides to installing, integrating, operating and upgrading FluxGate",
  "FluxGate 문서": "FluxGate documentation",
  "프롬프트 퀵 가이드": "Prompt quick guide",
  "설치 및 시작하기": "Installation and setup",
  "Core / Spring 통합": "Core / Spring integration",
  "Envoy 통합": "Envoy integration",
  "운영 가이드": "Operations",
  "업그레이드와 롤백": "Upgrades and rollback",
  "개념과 용어": "Concepts and terminology",
  "버전 및 배포 상태": "Versions and release status",
  "시작하기": "Get started",
  "운영 및 참조": "Operations and reference",
  "본문으로 건너뛰기": "Skip to content",
  "FluxGate 홈": "FluxGate home",
  "문서 검색": "Search docs",
  "주요 메뉴": "Main navigation",
  "버전 상태": "Version status",
  "모바일 문서": "Mobile documentation",
  "메뉴": "Menu",
  "문서 목록": "Documentation navigation",
  "문서 개요": "Documentation overview",
  "현재 발행": "Published versions",
  "0.5.0은 검증 중": "0.5.0 is under validation",
  "문서 개선 제안": "Suggest a documentation improvement",
  "문서 개선": "Improve these docs",
  "라이선스": "License",
  "닫기": "Close",
  "검색어는 외부 서비스로 전송하지 않습니다.": "Search terms are not sent to an external service.",
  "검색어": "Search terms",
  "코드 복사": "Copy code",
  "복사": "Copy",
  "코드": "Code",
  "문서 / 개요": "Docs / Overview",
  "Java 애플리케이션과 프록시를 위한 분산 요청 제한 라이브러리.": "Distributed rate limiting for Java applications and proxies.",
  "설치부터 정책 구성, 운영과 업그레이드까지 안내합니다.": "Guides for installation, policy configuration, operations and upgrades.",
  "Redis 0.3.8 유지보수 릴리스": "Redis 0.3.8 maintenance release",
  "내장 Redis provider의 KEYS를 SCAN으로 교체했습니다. Core와 스타터는 0.3.7을 유지합니다.": "The built-in Redis provider replaces KEYS with SCAN. Core and starters remain on 0.3.7.",
  "적용 방법 읽기": "Read the upgrade instructions",
  "Redis Lua로 판정과 갱신을 한 번에": "Check and update atomically with Redis Lua",
  "12초 · 설명 애니메이션": "12 seconds · explanatory animation",
  "애플리케이션이 규칙을 찾고, Redis Lua 스크립트가 토큰을 확인하고 갱신하는 흐름입니다.": "The application looks up a rule, then a Redis Lua script checks and updates its tokens.",
  "FluxGate Redis Lua 요청 판정 흐름을 설명하는 기술 노트. 아래 텍스트 설명에서 주요 내용을 확인할 수 있습니다.": "Technical note illustrating request evaluation with FluxGate and Redis Lua. A text description is provided below.",
  "애니메이션 재생": "Play animation",
  "모션 설정을 확인하는 중입니다.": "Checking motion preference.",
  "수치 해석에 주의하세요.": "Interpret these figures with care.",
  "영상의 50K TPS·p99 233μs는 제공된 소개 자료에 포함된 값입니다. 측정 환경·부하·버전을 이 문서 작업에서 재검증하지 않았으며 현재 릴리스의 성능 보증이나 운영 SLA가 아닙니다.": "The 50K TPS and p99 233μs figures appear in the supplied introduction material. The measurement environment, workload and version were not revalidated for this documentation. These figures are not a performance guarantee for the current release or an operational SLA.",
  "애니메이션의 텍스트 설명": "Text description of the animation",
  "요청 식별자에 맞는 규칙을 애플리케이션에서 찾습니다.": "The application looks up a rule for the request identifier.",
  "Redis Lua 스크립트가 토큰 확인과 갱신을 원자적으로 수행하는 개념을 보여줍니다.": "The animation illustrates a Redis Lua script checking and updating tokens atomically.",
  "토큰이 충분하면 허용하고 부족하면 한도 초과로 판단합니다. 실제 HTTP 응답은 선택한 통합 설정에 따릅니다.": "The request is allowed when enough tokens are available; otherwise it exceeds the limit. The actual HTTP response depends on the selected integration.",
  "영상 속 코드는 설명을 위한 축약 예시입니다. TTL·refill·오류 처리 등을 포함한 운영 구현을 대신하지 않습니다.": "The code in the animation is a simplified illustration, not a production implementation covering TTL, refill and error handling.",
  "Lua의 KEYS[1]은 전달받은 키 인자이며 Redis KEYS 명령 실행과 다릅니다.": "In Lua, KEYS[1] is a supplied key argument. It is not an invocation of the Redis KEYS command.",
  "코딩 도우미와 실제 앱 설정을 확인하고 검증하는 복사 가능한 프롬프트": "A copyable prompt for inspecting and validating real application settings with a coding assistant",
  "Maven / Gradle 의존성, 선택된 버전 확인, 배포 전 체크리스트": "Maven / Gradle dependencies, selected-version checks and a pre-deployment checklist",
  "정책·키·카운터 모델과 Spring Boot 지원 및 보안 경계": "Policy, key and counter models, Spring Boot support and security boundaries",
  "관리 UI/API와 엔진의 역할, 설정 및 데이터 보존": "Roles of the management UI/API and engine, configuration and data retention",
  "프록시 요청 판정 계약과 장애 동작을 확인하는 순서": "Check the proxy request-decision contract and failure behavior",
  "기존 0.3.7 애플리케이션 업데이트": "Update an existing 0.3.7 application",
  "Redis 모듈을 명시적으로 0.3.8로 지정하세요. 전체 FluxGate 버전을 0.3.8로 올리는 릴리스가 아닙니다.": "Explicitly pin the Redis module to 0.3.8. This release does not upgrade all FluxGate modules to 0.3.8.",
  "Gradle Groovy DSL · dependencies 블록 안에 추가. 실제 선택 버전과 런타임 동작을 확인해야 합니다.": "Gradle Groovy DSL: add this inside the dependencies block. Verify the resolved version and runtime behavior.",
  "Maven 예제와 검증 절차": "Maven examples and validation steps",
  "공용 Redis와 장애 대응": "Shared Redis and incident handling",
  "업그레이드 · 데이터 호환성 · 롤백": "Upgrades, data compatibility and rollback",
  "정책과 버킷 용어": "Policy and bucket terminology",
  "릴리스 및 검증 상태": "Release and validation status",
  "0.5.0 개발 문서": "0.5.0 development documentation",
  "0.5.0은 미출시·검증 중입니다. 개발 트랙의 기능 설명은 Maven 발행이나 운영 배포 완료를 의미하지 않습니다.": "0.5.0 is unreleased and under validation. Development-track feature descriptions do not mean Maven publication or production deployment is complete.",
  "이 페이지에서": "On this page",
  "기술 노트": "Technical note",
  "0.3.7 앱 업데이트": "Update a 0.3.7 app",
  "발행 버전과 개발 트랙의 차이는 ": "For the differences between published versions and the development track, see ",
  "에서 확인하세요.": ".",
  "다음: ": "Next: ",
  "페이지를 찾을 수 없습니다": "Page not found",
  "FluxGate 문서로 돌아가기": "Return to FluxGate documentation",
  "문서가 이동했거나 주소가 변경됐을 수 있습니다.": "This page may have moved or its address may have changed.",
  "문서 개요로 돌아가기": "Return to the documentation overview",
  "문서": "Docs",
  "테마": "Theme",
  "시스템": "System",
  "라이트": "Light",
  "다크": "Dark"
}));
const translate = text => [...englishUI].sort((a,b)=>b[0].length-a[0].length).reduce((value,[ko,en])=>value.replaceAll(ko,en),text);
const bootTheme = `(()=>{let preference='system';try{const saved=localStorage.getItem('fluxgate-theme');if(['system','light','dark'].includes(saved))preference=saved;}catch{}document.documentElement.dataset.theme=preference==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):preference;})();`;
async function renderLocale(lang,pages){
const prefix=lang==='en'?'/en':'';
const route=path=>prefix+path;
// Only documentation routes are localized. Assets, LICENSE and external URLs stay shared.
const localize=html=>(lang==='en'?translate(html).replaceAll(' href="/docs/',' href="/en/docs/').replaceAll(' href="/"',' href="/en/"'):html).replaceAll('data-language-href=', 'href=');
const write=async(path,html)=>{const url=new URL(prefix.slice(1)+(prefix?'/':'')+path,out);await mkdir(new URL('.',url),{recursive:true});await writeFile(url,localize(html));};
const link=(label,url,cls='')=>`<a class="${cls}" href="${esc(url)}">${esc(label)}</a>`;
const titles={quickstart:'프롬프트 퀵 가이드',start:'설치 및 시작하기',core:'Core / Spring 통합',envoy:'Envoy 통합',studio:'Studio',operations:'운영 가이드',upgrade:'업그레이드와 롤백',reference:'개념과 용어',releases:'버전 및 배포 상태'};
const groups=[['시작하기',['start','quickstart','core','envoy','studio']],['운영 및 참조',['operations','upgrade','reference','releases']]];
const navigation=(active='')=>groups.map(([label,slugs])=>`<div class="nav-group"><p>${label}</p>${slugs.map(slug=>`<a href="/docs/${slug}/"${slug===active?' aria-current="page"':''}>${esc(titles[slug])}</a>`).join('')}</div>`).join('');
const head=(title,description,path)=>`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | FluxGate</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="https://openfluxgate.github.io${route(path)}"><meta property="og:title" content="${esc(title)} | FluxGate"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:image" content="https://openfluxgate.github.io/assets/social.svg"><link rel="alternate" hreflang="ko" href="https://openfluxgate.github.io${path}"><link rel="alternate" hreflang="en" href="https://openfluxgate.github.io/en${path}"><link rel="alternate" hreflang="x-default" href="https://openfluxgate.github.io${path}"><script>${bootTheme}</script><link rel="icon" href="/assets/icon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css"><script type="module" src="/assets/app.js"></script></head><body><a class="skip" href="#main">본문으로 건너뛰기</a><header><a class="brand" href="/" aria-label="FluxGate 홈"><span class="mark" aria-hidden="true">F</span>FluxGate<span class="docs-label">Docs</span></a><button id="search-open" aria-controls="search-dialog">문서 검색 <kbd>/</kbd></button><nav class="topnav" aria-label="주요 메뉴">${link('버전 상태','/docs/releases/')}${link('GitHub ↗','https://github.com/OpenFluxGate/fluxgate')}</nav><div class="display-controls"><a class="language-switch" lang="${lang==='en'?'ko':'en'}" hreflang="${lang==='en'?'ko':'en'}" data-language-href="${lang==='en'?path:'/en'+path}" aria-label="${lang==='en'?'Read this page in Korean':'Read this page in English'}">${lang==='en'?'한국어':'English'}</a><label class="theme-label" for="theme-select">테마</label><select id="theme-select" aria-label="테마"><option value="system">시스템</option><option value="light">라이트</option><option value="dark">다크</option></select></div><details class="mobile-menu"><summary>메뉴</summary><nav aria-label="모바일 문서">${navigation()}</nav></details></header>`;
const sidebar=(active='')=>`<aside class="sidebar"><nav aria-label="문서 목록">${link('문서 개요','/','overview')}${navigation(active)}</nav><div class="sidebar-note"><span>현재 발행</span><strong>Redis 0.3.8</strong><span>Core / Starter 0.3.7</span>${link('0.5.0은 검증 중','/docs/releases/')}</div></aside>`;
const footer=`<footer><span>OpenFluxGate</span><div>${link('문서 개선','https://github.com/OpenFluxGate/openfluxgate.github.io/issues')}${link('라이선스','/LICENSE')}</div></footer><dialog id="search-dialog" aria-labelledby="search-title"><div class="search-heading"><h2 id="search-title">문서 검색</h2><button id="search-close">닫기</button></div><label for="search-input">검색어</label><input id="search-input" type="search" placeholder="SCAN, Spring, rollback…" autocomplete="off"><p id="search-status" role="status"></p><ul id="search-results"></ul><p class="small">검색어는 외부 서비스로 전송하지 않습니다.</p></dialog></body></html>`;
const code=s=>`<div class="code-wrap"><div class="code-heading"><span>코드</span><button class="copy-code" aria-label="코드 복사">복사</button></div><pre tabindex="0"><code>${esc(s)}</code></pre><span class="copy-status" role="status"></span></div>`;
const home=head('FluxGate 문서','FluxGate 설치, 통합, 운영 및 버전별 업그레이드 가이드','/')+`<div class="doc-layout home-layout">${sidebar()}<main id="main" class="article home"><p class="breadcrumb">문서 / 개요</p><h1>FluxGate 문서</h1><p class="lead">Java 애플리케이션과 프록시를 위한 분산 요청 제한 라이브러리.<br>설치부터 정책 구성, 운영과 업그레이드까지 안내합니다.</p><div class="release-note"><strong>Redis 0.3.8 유지보수 릴리스</strong><p>내장 Redis provider의 KEYS를 SCAN으로 교체했습니다. Core와 스타터는 0.3.7을 유지합니다.</p>${link('적용 방법 읽기','/docs/start/')}</div><section id="technical-note" class="technical-note"><div class="note-heading"><div><p class="small">TECHNICAL NOTE</p><h2>Redis Lua로 판정과 갱신을 한 번에</h2></div><span class="note-duration">12초 · 설명 애니메이션</span></div><p>애플리케이션이 규칙을 찾고, Redis Lua 스크립트가 토큰을 확인하고 갱신하는 흐름입니다.</p><figure class="paper-figure"><img id="paper-animation" src="/assets/fluxgate-paper.webp" width="720" height="900" loading="lazy" decoding="async" alt="FluxGate Redis Lua 요청 판정 흐름을 설명하는 기술 노트. 아래 텍스트 설명에서 주요 내용을 확인할 수 있습니다."><figcaption><button id="paper-toggle" type="button" aria-controls="paper-animation" aria-pressed="false">애니메이션 재생</button><span id="paper-status" role="status">모션 설정을 확인하는 중입니다.</span></figcaption></figure><div class="metric-caveat"><strong>수치 해석에 주의하세요.</strong> 영상의 50K TPS·p99 233μs는 제공된 소개 자료에 포함된 값입니다. 측정 환경·부하·버전을 이 문서 작업에서 재검증하지 않았으며 현재 릴리스의 성능 보증이나 운영 SLA가 아닙니다.</div><details class="note-transcript"><summary>애니메이션의 텍스트 설명</summary><ol><li>요청 식별자에 맞는 규칙을 애플리케이션에서 찾습니다.</li><li>Redis Lua 스크립트가 토큰 확인과 갱신을 원자적으로 수행하는 개념을 보여줍니다.</li><li>토큰이 충분하면 허용하고 부족하면 한도 초과로 판단합니다. 실제 HTTP 응답은 선택한 통합 설정에 따릅니다.</li><li>영상 속 코드는 설명을 위한 축약 예시입니다. TTL·refill·오류 처리 등을 포함한 운영 구현을 대신하지 않습니다.</li></ol><p>Lua의 KEYS[1]은 전달받은 키 인자이며 Redis KEYS 명령 실행과 다릅니다.</p></details></section><section id="get-started"><h2>시작하기</h2><div class="entry-list"><a href="/docs/quickstart/"><strong>프롬프트 퀵 가이드 <span>→</span></strong><p>코딩 도우미와 실제 앱 설정을 확인하고 검증하는 복사 가능한 프롬프트</p></a><a href="/docs/start/"><strong>설치 및 시작하기 <span>→</span></strong><p>Maven / Gradle 의존성, 선택된 버전 확인, 배포 전 체크리스트</p></a><a href="/docs/core/"><strong>Core / Spring 통합 <span>→</span></strong><p>정책·키·카운터 모델과 Spring Boot 지원 및 보안 경계</p></a><a href="/docs/studio/"><strong>Studio <span>→</span></strong><p>관리 UI/API와 엔진의 역할, 설정 및 데이터 보존</p></a><a href="/docs/envoy/"><strong>Envoy 통합 <span>→</span></strong><p>프록시 요청 판정 계약과 장애 동작을 확인하는 순서</p></a></div></section><section id="upgrade"><h2>기존 0.3.7 애플리케이션 업데이트</h2><p>Redis 모듈을 명시적으로 0.3.8로 지정하세요. 전체 FluxGate 버전을 0.3.8로 올리는 릴리스가 아닙니다.</p>${code("implementation 'io.github.openfluxgate:fluxgate-redis-ratelimiter:0.3.8'")}<p class="small">Gradle Groovy DSL · dependencies 블록 안에 추가. 실제 선택 버전과 런타임 동작을 확인해야 합니다.</p>${link('Maven 예제와 검증 절차','/docs/start/','text-link')}</section><section id="operations"><h2>운영 및 참조</h2><div class="resource-list">${link('공용 Redis와 장애 대응','/docs/operations/')}${link('업그레이드 · 데이터 호환성 · 롤백','/docs/upgrade/')}${link('정책과 버킷 용어','/docs/reference/')}${link('릴리스 및 검증 상태','/docs/releases/')}</div></section><div class="development-note"><strong>0.5.0 개발 문서</strong><p>0.5.0은 미출시·검증 중입니다. 개발 트랙의 기능 설명은 Maven 발행이나 운영 배포 완료를 의미하지 않습니다.</p></div></main><aside class="toc"><p>이 페이지에서</p>${link('기술 노트','#technical-note')}${link('시작하기','#get-started')}${link('0.3.7 앱 업데이트','#upgrade')}${link('운영 및 참조','#operations')}</aside></div>`+footer;
await write('index.html',home);
for(const p of pages){const sections=p.sections.map((s,i)=>`<section id="section-${i}"><h2>${esc(s.title)}</h2>${s.text?`<p>${esc(s.text)}</p>`:''}${s.list?`<ul class="checklist">${s.list.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${s.code?code(s.code):''}${s.links?`<div class="related">${s.links.map(([label,url])=>link(label,url)).join('')}</div>`:''}</section>`).join('');const html=head(titles[p.slug],p.intro,'/docs/'+p.slug+'/')+`<div class="doc-layout">${sidebar(p.slug)}<main id="main" class="article"><p class="breadcrumb">${link('문서','/')} / ${esc(p.label)}</p><h1>${esc(titles[p.slug])}</h1><p class="lead">${esc(p.intro)}</p><div class="article-meta">발행 버전과 개발 트랙의 차이는 ${link('버전 상태','/docs/releases/')}에서 확인하세요.</div>${sections}<div class="doc-end">${link('문서 개선 제안','https://github.com/OpenFluxGate/openfluxgate.github.io/issues')}${link('다음: '+pages[(pages.indexOf(p)+1)%pages.length].label+' →','/docs/'+pages[(pages.indexOf(p)+1)%pages.length].slug+'/')}</div></main><aside class="toc"><p>이 페이지에서</p>${p.sections.map((s,i)=>link(s.title,'#section-'+i)).join('')}</aside></div>`+footer;await write('docs/'+p.slug+'/index.html',html);}
await write('404.html',head('페이지를 찾을 수 없습니다','FluxGate 문서로 돌아가기','/404.html')+'<main id="main" class="not-found"><p>404</p><h1>페이지를 찾을 수 없습니다</h1><p>문서가 이동했거나 주소가 변경됐을 수 있습니다.</p>'+link('문서 개요로 돌아가기','/')+'</main>'+footer);
await writeFile(new URL(prefix.slice(1)+(prefix?'/':'')+'search.json',out),JSON.stringify(pages.map(p=>({title:lang==='en'?translate(titles[p.slug]):titles[p.slug],url:route('/docs/'+p.slug+'/'),text:[p.title,p.intro,...p.sections.flatMap(s=>[s.title,s.text||'',...(s.list||[])])].join(' ')}))));
}
await renderLocale('ko',koreanPages);
await renderLocale('en',englishPages);
for(const name of ['style.css','app.js','icon.svg','social.svg','fluxgate-paper.gif','fluxgate-paper.webp'])await copyFile(new URL('assets/'+name,import.meta.url),new URL('assets/'+name,out));await copyFile(new URL('../LICENSE',import.meta.url),new URL('LICENSE',out));
await writeFile(new URL('robots.txt',out),'User-agent: *\nAllow: /\nSitemap: https://openfluxgate.github.io/sitemap.xml\n');await writeFile(new URL('sitemap.xml',out),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+['','/en'].flatMap(prefix=>[prefix+'/',...koreanPages.map(p=>prefix+'/docs/'+p.slug+'/')]).map(p=>'<url><loc>https://openfluxgate.github.io'+p+'</loc></url>').join('')+'</urlset>');console.log('Built '+((koreanPages.length+2)*2)+' pages.');
