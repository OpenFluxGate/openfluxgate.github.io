// Public 0.5.0 installation links shared by the Korean and English guides.
export const coreRelease = 'https://github.com/OpenFluxGate/fluxgate/releases/tag/v0.5.0';
export const coreDocs = 'https://github.com/OpenFluxGate/fluxgate/blob/v0.5.0/docs';
export const apiDemo = 'http://13.124.192.116:8080/swagger-ui/index.html';
export const studioDemo = 'http://13.124.192.116:3000/';
export const studioRelease = 'https://github.com/OpenFluxGate/fluxgate-studio/releases/tag/v0.5.0';
export const studioSource = 'https://github.com/OpenFluxGate/fluxgate-studio/blob/v0.5.0';
const studioAssets = 'https://github.com/OpenFluxGate/fluxgate-studio/releases/download/v0.5.0';
export const studioFiles = {
  api: studioAssets + '/fluxgate-studio-admin-api-0.5.0.zip',
  ui: studioAssets + '/fluxgate-studio-ui-0.5.0.zip',
  source: studioAssets + '/fluxgate-studio-0.5.0-source.tar.gz',
  checksums: studioAssets + '/SHA256SUMS',
};
export const composeSetup = `mkdir -p fluxgate-studio-0.5.0
tar -xzf fluxgate-studio-0.5.0-source.tar.gz -C fluxgate-studio-0.5.0 --strip-components=1
cd fluxgate-studio-0.5.0
docker compose up --build`;

const central = 'https://repo.maven.apache.org/maven2/io/github/openfluxgate';
const libraries = [
  'fluxgate-core',
  'fluxgate-redis-ratelimiter',
  'fluxgate-mongo-adapter',
  'fluxgate-control-support',
  'fluxgate-spring-boot2-starter',
  'fluxgate-spring-boot3-starter',
  'fluxgate-envoy-extauth',
];
export const mavenFiles = [
  ['fluxgate (parent POM)', central + '/fluxgate/0.5.0/fluxgate-0.5.0.pom'],
  ...libraries.map(name => [name + ' (JAR)', central + '/' + name + '/0.5.0/' + name + '-0.5.0.jar']),
];

export const boot3Maven = `<dependency>
    <groupId>io.github.openfluxgate</groupId>
    <artifactId>fluxgate-spring-boot3-starter</artifactId>
    <version>0.5.0</version>
</dependency>`;
export const boot3Gradle = "implementation 'io.github.openfluxgate:fluxgate-spring-boot3-starter:0.5.0'";
