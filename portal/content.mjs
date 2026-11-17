// New FluxGate content, independent of the inherited template.
export const pages = [
{slug:'start', label:'시작하기', eyebrow:'GET STARTED', title:'첫 번째 정책부터, 차근차근.', intro:'설치 명령보다 먼저 사용할 버전과 실행 경로를 선택하세요. 로컬 실험과 운영 적용은 다른 단계입니다.', sections:[
{title:'01. 버전 확인', text:'0.5.0은 개발·검증 중인 트랙입니다. 소스의 버전 문자열만 보고 Maven 아티팩트가 발행됐거나 운영에 배포됐다고 판단하지 마세요. 0.3.x를 사용 중이면 업그레이드 가이드를 먼저 읽으세요.', links:[['버전 상태 보기','/docs/releases/'],['Core 릴리스 확인','https://github.com/OpenFluxGate/fluxgate/releases']]},
{title:'02. 실행 경로 선택', text:'애플리케이션 내부에서는 Core/Spring 통합을, 프록시 경계에서는 Envoy 통합을 검토하세요. Studio는 정책 관리 UI/API이며 요청 제한 엔진 자체를 대체하지 않습니다.',links:[['Core / Spring','/docs/core/'],['Envoy','/docs/envoy/'],['Studio','/docs/studio/']]},
{title:'03. 소스 확인부터 시작',text:'아래 명령은 저장소를 가져오기만 합니다. 서버·DB·컨테이너를 실행하지 않습니다. 해당 릴리스의 README에서 JDK, Spring Boot, Redis 요구사항과 샘플 구성을 확인한 뒤 버전을 고정하세요.',code:'git clone https://github.com/OpenFluxGate/fluxgate.git\ncd fluxgate\ngit tag --list\n# Choose and inspect a published release before building.'},
{title:'04. 첫 429를 검증하는 순서',text:'격리된 로컬 Redis와 합성 정책으로 허용 요청, 한도 초과, refill 이후 회복을 확인하세요. 요청마다 같은 scope/key를 사용해야 동일 카운터를 검사할 수 있습니다. 한도·시간창·테스트 요청 수를 명시하고, 429가 아닌 5xx는 성공으로 처리하지 마세요. 실행 가능한 통합 레시피의 버전별 재검증은 진행 중이며 이 페이지는 그 검증 완료를 주장하지 않습니다.',links:[['실패 동작과 체크리스트','/docs/operations/']]}
]},
{slug:'core',label:'Core / Spring',eyebrow:'APPLICATION INTEGRATION',title:'애플리케이션 가까이에서 제어.',intro:'규칙, 키, 카운터의 역할을 나누면 요청 제한의 동작을 이해하기 쉬워집니다.',sections:[
{title:'정책과 상태를 분리',text:'Core는 요청과 규칙을 평가하는 기본 모델을 제공합니다. Redis 통합은 분산 카운터를, MongoDB 어댑터는 동적 규칙 저장을 담당합니다. 저장소마다 다른 역할과 장애 영향을 가진다는 점을 구성에 반영하세요.'},
{title:'어떤 요청을 같은 버킷에 넣을까요?',text:'GLOBAL, PER_IP, PER_USER, PER_API_KEY, CUSTOM 등 scope에 따라 키를 선택합니다. 사용자·테넌트 식별자는 신뢰할 수 있는 인증 결과에서 가져오세요. 클라이언트가 임의로 보낸 X-User-Id나 forwarded header를 검증 없이 신뢰하면 제한을 우회할 수 있습니다.'},
{title:'Spring Boot 지원 상태',text:'Boot 3과 Boot 2는 servlet 네임스페이스 및 Java 요구사항이 다릅니다. 0.5.0의 Boot 2 지원도 목표에 포함되어 검증 중입니다. 의존성·보안 검증이 끝났다는 뜻이 아니므로 운영 호환성을 단정하지 않습니다.',links:[['버전별 상태','/docs/releases/'],['Core 소스 문서','https://github.com/OpenFluxGate/fluxgate']]},
{title:'정책 재적용은 reset과 다릅니다',text:'검증에 사용한 0.5.0 개발 소스에서는 같은 정책을 재구성해도 소진된 Redis 카운터가 유지됐습니다. 명시적 reset은 별도 동작입니다. 이 결과를 모든 릴리스·HTTP/PubSub 경로의 보장으로 확대하지 마세요.',links:[['검증 범위와 업그레이드','/docs/upgrade/']]}
]},
{slug:'envoy',label:'Envoy',eyebrow:'AT THE EDGE',title:'프록시 경계에서도 같은 질문.',intro:'어떤 요청을 제한하고, 판정 서비스가 실패하면 무엇을 할지 먼저 결정합니다.',sections:[
{title:'통합 전 확인할 계약',text:'요청 descriptor, domain, 식별자, 제한 응답, timeout과 fail-open/fail-closed 정책을 일치시키세요. Envoy 연동은 버전별 구현과 설정을 확인해야 하며, 이 포털은 검증하지 않은 배포용 YAML을 제공하지 않습니다.'},
{title:'애플리케이션 제한과 중복 적용',text:'프록시와 애플리케이션이 동일 요청에 두 번 토큰을 소비하지 않는지 확인하세요. 의도한 계층별 제한이면 키와 정책 소유권을 구분하고, 각 계층의 거절 원인을 관측 가능하게 만드세요.'},
{title:'배포 전 검증',text:'허용, 과다 요청, 판정 서버 timeout, Redis 단절, identity 누락을 별도 테스트합니다. 0.5.0 소스의 실제 통합 범위와 릴리스 노트를 확인한 후 고정된 버전으로 검증하세요.',links:[['Core 저장소에서 구현 확인','https://github.com/OpenFluxGate/fluxgate'],['운영 체크리스트','/docs/operations/']]}
]},
{slug:'studio',label:'Studio',eyebrow:'CONTROL PLANE',title:'정책을 보고, 변경을 이해하세요.',intro:'Studio는 규칙 관리와 관찰을 위한 UI/API입니다. 관리 화면의 성공과 데이터 경로의 성공은 따로 확인해야 합니다.',sections:[
{title:'UI · API · Core 버전을 함께 기록',text:'Studio UI/API의 0.5.0 버전 정렬은 Core 아티팩트 발행이나 운영 배포 완료를 의미하지 않습니다. UI의 API 주소, API의 DB/Redis 대상, Core 라이브러리 버전을 환경별로 기록하세요.',links:[['Studio 저장소','https://github.com/OpenFluxGate/fluxgate-studio']]},
{title:'Audit TTL은 보존정책입니다',text:'검토된 0.5.0 개발 변경에서는 audit 인덱스 자동 생성이 opt-in입니다. STUDIO_AUDIT_CREATE_INDEXES=false는 기존 TTL 인덱스를 제거하거나 만료 삭제를 중단하지 않습니다. 기존 expireAfterSeconds와 데이터 보존 승인을 먼저 확인하세요.'},
{title:'정책 편집 시 확인',text:'빈 attributes 편집, tags 빈 배열, ACL 필드, ruleSetId와 id 조합을 포함하여 저장 전후 데이터를 비교하세요. 구버전 writer와 공유 DB를 쓰면 새 필드가 사라질 수 있습니다. UI 성공 알림만으로 호환성을 판단하지 마세요.',links:[['업그레이드 위험','/docs/upgrade/']]},
{title:'관리 인터페이스 보호',text:'Studio를 인터넷에 그대로 노출하지 마세요. 인증·접근제어·TLS·비밀값 관리 및 감사 로그 접근 정책은 실제 배포 환경에서 별도로 검증해야 합니다. 이 문서는 보안 인증을 제공하지 않습니다.'}
]},
{slug:'operations',label:'운영',eyebrow:'OPERATE DELIBERATELY',title:'실패할 때의 동작까지 설계.',intro:'정상 응답보다 장애 경로와 복구 절차가 운영 품질을 결정합니다.',sections:[
{title:'장애 모드를 명시',text:'Redis 지연·연결 실패, MongoDB 조회 실패, 정책 누락, 관리 API 장애를 각각 테스트하세요. fail-open은 가용성, fail-closed는 접근 제한에 영향을 줍니다. 어느 쪽도 모든 서비스의 정답은 아닙니다.'},
{title:'배포 전 체크리스트',list:['실행 중인 버전과 아티팩트 checksum 기록','백업 생성뿐 아니라 복원 가능 여부 확인','현재 인덱스·TTL·DB writer 목록 확인','health check와 실제 제한 요청을 함께 검증','이전 아티팩트 및 설정을 보존하고 복귀 절차 리허설','SSH·포트·ExecStart·권한을 실제 대상에서 확인']},
{title:'데이터 보존',text:'롤백용 바이너리만 남긴다고 데이터가 복원되지는 않습니다. 새 버전이 변경한 필드나 인덱스는 이전 버전과 호환되지 않을 수 있습니다. 삭제된 TTL 데이터와 구버전 writer가 제거한 ACL은 코드 롤백으로 되살아나지 않습니다.',links:[['업그레이드 및 롤백','/docs/upgrade/']]},
{title:'관측',text:'허용/거절 수, 판정 latency, 백엔드 오류, 정책 버전 및 reset 이력을 함께 보세요. 지표 라벨에 원문 API key나 무제한 사용자 식별자를 넣지 마세요. 벤치마크 수치는 환경·부하·버전이 명시되지 않으면 운영 용량 근거가 아닙니다.'}
]},
{slug:'upgrade',label:'업그레이드 / 롤백',eyebrow:'DATA COMPATIBILITY',title:'업그레이드 전에, writer부터 확인.',intro:'0.3.x와 0.5.0의 혼용은 단순한 바이너리 교체 문제가 아닙니다.',sections:[
{title:'0.3.7 writer의 ACL 손실',text:'격리 MongoDB 7.0.26의 합성 데이터 실험에서 0.3.7 writer가 새 문서를 저장할 때 deniedIps, deniedKeys, aclUpdatedAt 필드가 사라지는 동작을 확인했습니다. 구버전 서비스가 읽을 수 있다는 사실은 안전하게 쓸 수 있다는 뜻이 아닙니다.'},
{title:'중복 ID와 인덱스',text:'새 구조에서 ruleSetId가 다른 문서에 같은 id를 허용하면 구버전 id 단독 쓰기·삭제가 모호해질 수 있습니다. 기존 unique id_1 인덱스는 새 패턴과 충돌할 수 있습니다. 운영 인덱스를 자동으로 삭제하거나 변경하지 마세요.'},
{title:'안전한 순서 / rollback',list:['모든 writer의 정확한 버전과 대상 DB 파악','복원 시험을 포함한 백업 검증','합성 또는 승인된 복제 환경에서 인덱스·정책 검증','구버전 writer를 분리한 뒤 승인된 이관 수행','변경 후 ACL·복합 식별자·카운터·TTL 검증','이전 버전 복귀 전 데이터 호환성 재평가']},
{title:'검증의 경계',text:'위 결과는 0.3.7 및 0.5.0 개발 소스와 합성 데이터에 대한 결과입니다. 운영 데이터, 운영 이전 아티팩트와의 동일성, 모든 UI/API 혼합 조합, 전체 signed PubSub 경로는 검증 완료를 주장하지 않습니다. 자동 마이그레이션 도구나 백업 보장도 아닙니다.',links:[['고정 커밋의 상세 검증 가이드','https://github.com/OpenFluxGate/fluxgate-studio/blob/1419b4cc43035ebdfbbdc1118c7a1193ac33aa7b/deploy/UPGRADE-ROLLBACK.md']]}
]},
{slug:'reference',label:'개념 / Reference',eyebrow:'MENTAL MODEL',title:'작은 개념으로 읽는 요청 제한.',intro:'용어를 같은 의미로 사용하면 설정과 장애 분석이 간결해집니다.',sections:[
{title:'ruleSetId / id',text:'ruleSetId는 규칙 집합, id는 그 안에서의 규칙 식별자입니다. 새 복합 식별자를 구버전 id 단독 접근과 혼동하지 마세요.'},
{title:'Token bucket / band / refill / rate limit',text:'버킷은 요청이 소비할 토큰을 가집니다. band는 용량과 시간창 등 제한 조건을 나타냅니다. 여러 band를 조합할 때 짧은 폭주 제한과 장기 한도를 각각 검증하세요. refill과 명시적 reset은 서로 다른 동작입니다.'},
{title:'Scope / key',text:'scope는 어떤 요청들을 묶을지 정의하고 key는 실제 버킷의 식별에 사용됩니다. IP·사용자·API key·복합 키의 선택은 공정성, 보안 및 cardinality에 영향을 줍니다.'},
{title:'Configuration reference',text:'프로퍼티 기본값과 API signature는 선택한 릴리스의 소스를 기준으로 확인하세요. 개발 트랙과 발행 버전이 다를 수 있어 여기에서는 검증되지 않은 전체 설정표를 복제하지 않습니다.',links:[['Core 공식 소스','https://github.com/OpenFluxGate/fluxgate'],['Studio 공식 소스','https://github.com/OpenFluxGate/fluxgate-studio']]}
]},
{slug:'releases',label:'버전 상태',eyebrow:'RELEASE STATUS',title:'소스, 발행, 배포는 다릅니다.',intro:'이 포털의 문서 갱신은 소프트웨어 출시나 운영 배포를 의미하지 않습니다.',sections:[
{title:'0.5.0 · 개발 및 검증 중',text:'이 문서 작성 기준 0.5.0은 미출시 트랙입니다. Spring Boot 2 지원도 목표에 포함되지만 호환성·의존성·보안 검증은 진행 중입니다. 배포 가능 또는 취약점 없음으로 해석하지 마세요.'},
{title:'0.3.x · 기존 사용 환경',text:'기존 버전 사용자는 정확한 패치 버전과 발행된 아티팩트를 확인하세요. 0.3.7 호환성 실험 결과를 모든 0.3.x 버전에 일반화하지 않습니다. 별도로 진행되는 패치 작업의 발행 여부는 릴리스 기록에서 확인해야 합니다.'},
{title:'근거 확인',text:'Git tag, Maven 아티팩트, CI commit 및 운영 실행 파일은 각각 확인합니다. README의 버전 문자열이나 CI 성공 하나만으로 나머지를 추정하지 마세요.',links:[['Core releases','https://github.com/OpenFluxGate/fluxgate/releases'],['Core CI','https://github.com/OpenFluxGate/fluxgate/actions'],['Studio releases','https://github.com/OpenFluxGate/fluxgate-studio/releases']]}
]}
];
