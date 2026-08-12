export interface HoleTee {
  label: string;
  color: string;
  yards: number;
}

export interface Hole {
  no: string;
  par: number;
  hdcp: number;
  champion: number;
  regular: number;
  ladies: number;
  tip: string;
  image?: string;
  tees?: HoleTee[];
}

export const HOLES: Hole[] = [
  {
    no: "01", par: 5, hdcp: 11, champion: 577, regular: 526, ladies: 457,
    image: "/images/holes/hole1.jpg",
    tees: [
      { label: "블랙", color: "#1a1a1a", yards: 577 },
      { label: "블루", color: "#1e3a8a", yards: 546 },
      { label: "화이트", color: "#ffffff", yards: 526 },
      { label: "실버", color: "#adb2ba", yards: 495 },
      { label: "레드", color: "#c0392b", yards: 457 },
    ],
    tip: "옥색 레이크를 끼고 시작되는 1번 홀은 파5로 넓은 페어웨이는 시원한 청량감을 선사하고, 전면의 좌우 타겟 벙커가 골퍼를 유혹하지만 그다지 위협적이지 못하다. 장타자는 페어웨이 좌측 벙커 우측 끝을 공략한다면 확 트인 시야를 확보하고, 투온을 노려 볼만한 홀이다. 단, 우측으로 공이 밀리면 세컨샷 지점에서 그린이 보이지 않고 그린앞 가드벙커에 빠질 염려가 있으나, 욕심내 볼만한 홀이다. 조심할 점은 바람과 그린앞에 벙커가 항상 기다린다는 점만 유의하면, 약간 오르막인 그린공략이 무난하다.",
  },
  { no: "02", par: 5, hdcp: 5, champion: 573, regular: 536, ladies: 456, tip: "오르막 파5. 티샷 낙하 지점 좌측이 야자수 군락이라 2온 욕심보다 세 번의 샷으로 나누는 편이 스코어에 유리합니다." },
  { no: "03", par: 3, hdcp: 17, champion: 180, regular: 161, ladies: 132, tip: "바람이 뒤에서 부는 날이 많아 한 클럽 짧게. 그린이 앞뒤로 길어 핀 위치에 따라 두 클럽까지 차이가 납니다." },
  { no: "04", par: 4, hdcp: 3, champion: 461, regular: 424, ladies: 360, tip: "코스에서 가장 긴 파4. 페어웨이 중앙 크로스 벙커를 넘기지 못하면 레이업 후 3온 전략이 현실적입니다." },
  { no: "05", par: 4, hdcp: 13, champion: 407, regular: 372, ladies: 315, tip: "왼쪽 도그렉. 코너를 질러 치려면 230야드 캐리가 필요하며, 실패 시 정글로 들어가 벌타를 각오해야 합니다." },
  { no: "06", par: 3, hdcp: 15, champion: 205, regular: 179, ladies: 145, tip: "연못을 넘겨 치는 아일랜드형 파3. 그린 앞 에이프런이 넓어 짧게 떨어져도 굴려 올릴 수 있습니다." },
  { no: "07", par: 5, hdcp: 7, champion: 555, regular: 521, ladies: 448, tip: "내리막 파5. 티샷만 페어웨이에 세우면 롱히터는 2온이 충분히 가능한 버디 홀입니다." },
  { no: "08", par: 4, hdcp: 9, champion: 416, regular: 383, ladies: 324, tip: "그린이 3단으로 나뉘어 있습니다. 핀과 다른 단에 올리면 3퍼트가 쉽게 나오므로 거리 확인이 중요합니다." },
  { no: "09", par: 4, hdcp: 1, champion: 473, regular: 437, ladies: 368, tip: "클럽하우스를 바라보는 아웃코스 최난도 홀. 오른쪽 워터해저드를 피해 왼쪽 러프를 노리는 것이 정석입니다." },
  { no: "10", par: 4, hdcp: 12, champion: 423, regular: 389, ladies: 330, tip: "인코스 시작. 티잉 그라운드가 높아 실제보다 짧게 느껴지니 캐디의 거리 안내를 신뢰하세요." },
  { no: "11", par: 3, hdcp: 18, champion: 165, regular: 148, ladies: 123, tip: "코스에서 가장 짧은 홀이지만 그린 주변 벙커가 다섯 개. 정확한 거리감이 관건입니다." },
  { no: "12", par: 5, hdcp: 6, champion: 588, regular: 548, ladies: 468, tip: "우측 도그렉 파5. 세컨드 샷 지점부터 페어웨이가 좁아져 레이업 지점을 미리 정해두는 편이 좋습니다." },
  { no: "13", par: 4, hdcp: 8, champion: 434, regular: 399, ladies: 341, tip: "양쪽이 워터해저드인 좁은 홀. 드라이버 대신 3번 우드로 페어웨이를 지키는 선택이 유효합니다." },
  { no: "14", par: 4, hdcp: 16, champion: 379, regular: 348, ladies: 297, tip: "짧은 파4. 그린이 앞으로 기울어 있어 스핀이 걸린 샷은 앞쪽으로 흘러내립니다." },
  { no: "15", par: 3, hdcp: 14, champion: 192, regular: 171, ladies: 138, tip: "오후 역광이 심한 홀. 그린 뒤쪽은 급경사 내리막이라 절대 길게 치지 마세요." },
  { no: "16", par: 5, hdcp: 4, champion: 600, regular: 561, ladies: 480, tip: "코스에서 가장 긴 홀. 세 번째 샷을 짧은 웨지로 남기는 배분이 스코어를 지킵니다." },
  { no: "17", par: 4, hdcp: 10, champion: 446, regular: 410, ladies: 349, tip: "그린 앞을 개울이 가로지릅니다. 애매한 거리가 남으면 한 클럽 길게 잡아 그린 뒤를 노리는 편이 안전합니다." },
  { no: "18", par: 4, hdcp: 2, champion: 470, regular: 431, ladies: 365, tip: "클럽하우스 테라스가 내려다보는 마무리 홀. 우측 호수를 따라 페어웨이가 휘어지며, 그린은 좌우 폭이 좁습니다." },
];

export const SIGNATURE_HOLES = [
  { title: "9번 홀", en: "THE CHALLENGE", par: 4, yards: 473, trait: "워터해저드", image: "/images/hole9.jpg", desc: "클럽하우스를 바라보는 아웃코스 최난도 홀. 오른쪽 워터해저드를 피해 왼쪽 러프를 노리는 것이 정석입니다." },
  { title: "11번 홀", en: "THE PRECISION", par: 3, yards: 165, trait: "벙커 5개", image: "/images/hole11.jpg", desc: "코스에서 가장 짧은 홀이지만 그린 주변 벙커가 다섯 개. 정확한 거리감이 관건입니다." },
  { title: "18번 홀", en: "THE FINISH", par: 4, yards: 470, trait: "호수·좁은 그린", image: "/images/hole18.jpg", desc: "클럽하우스 테라스를 향해 호수를 끼고 휘어지는 마무리 홀. 갤러리 앞에서 치는 기분을 줍니다." },
];

export const FACILITY_TEASERS = [
  { id: "golftel", name: "골프텔", en: "GOLFTEL", image: "/images/hotel1.png", meta: "94실 · 40㎡ / 46㎡", desc: "클럽하우스와 이어진 94실 규모 숙소. 이동 없이 연박 라운드가 가능합니다." },
  { id: "clubhouse", name: "클럽하우스", en: "CLUBHOUSE", image: "/images/clubhouse1.jpg", meta: "레스토랑 · 프로샵 · 라커 · 스파", desc: "크메르 목조 양식을 현대적으로 해석한 2층 규모. 라운드 전후가 한 건물에서 끝납니다." },
  { id: "range", name: "골프연습장", en: "PRACTICE RANGE", image: "/images/driving1.png", meta: "78타석 · 1층·2층 구조", desc: "1층과 2층으로 나뉜 78타석 규모의 자동화 드라이빙 레인지. 새벽 라운드 전에도 문을 엽니다." },
];

export const CLUBHOUSE_ITEMS = [
  { name: "레스토랑", photo: "레스토랑 홀", hours: "05:00 – 21:00", desc: "한식·크메르식·양식을 함께 냅니다. 18번 홀 그린이 보이는 테라스석이 인기입니다." },
  { name: "프로샵", photo: "프로샵 진열대", hours: "05:30 – 18:30", desc: "클럽 대여와 소모품 판매, 간단한 그립 교체와 로프트 점검을 현장에서 처리합니다." },
  { name: "라커 · 샤워", photo: "라커룸", hours: "05:00 – 19:00", desc: "남녀 각 120개 라커와 샤워 부스. 그린피에 이용료가 포함됩니다." },
  { name: "스파 & 사우나", photo: "스파 트리트먼트 룸", hours: "11:00 – 21:00", desc: "크메르 전통 마사지와 건식 사우나. 예약 없이 이용 가능합니다." },
];

export const GOLFTEL_ITEMS = [
  { name: "호텔 전경", photo: "호텔 전경", hours: "상시 이용", desc: "야자수와 정원이 어우러진 골프텔 전경. 체크인 전후로 편안하게 머물 수 있는 공간입니다." },
  { name: "수영장", photo: "수영장", hours: "07:00 – 19:00", desc: "라운드 후 피로를 풀 수 있는 야외 수영장. 투숙객은 자유롭게 이용하실 수 있습니다." },
  { name: "피트니스", photo: "피트니스 센터", hours: "05:00 – 21:00", desc: "기본 유산소·웨이트 기구를 갖춘 피트니스 센터. 이른 아침에도 이용 가능합니다." },
  { name: "매점", photo: "매점", hours: "06:00 – 22:00", desc: "생수·스낵·골프용품을 갖춘 매점. 라운드 전후 간단한 요기에 편리합니다." },
];

export const RANGE_ITEMS = [
  { name: "드라이빙 레인지", photo: "78타석 전경", hours: "05:00 – 21:00", desc: "1층과 2층으로 나뉜 78타석 규모의 최첨단 자동화 드라이빙 레인지입니다." },
  { name: "쇼트게임 구역", photo: "어프로치 연습장", hours: "05:30 – 18:30", desc: "벙커 두 곳과 러프 구간을 갖춘 어프로치 전용 구역. 실제 코스와 같은 잔디를 씁니다." },
  { name: "퍼팅 그린", photo: "퍼팅 그린", hours: "05:00 – 19:00", desc: "코스와 동일한 스피드로 관리하는 두 개의 퍼팅 그린. 첫 조 대기 중 이용하기 좋습니다." },
  { name: "프로 레슨", photo: "레슨 스튜디오", hours: "예약제 · 09:00 – 17:00", desc: "소속 프로의 1:1 레슨 50분. 한국어 진행 가능하며 프론트에서 당일 신청됩니다." },
];

export const ROOMS = [
  {
    tag: "40㎡", name: "스탠다드", spec: "40㎡ · 49실",
    desc: "합리적인 크기로 구성된 스탠다드 객실입니다. 클럽하우스와 가까워 이동이 편리합니다.",
    items: ["조식 포함", "무료 Wi-Fi", "골프백 보관 및 클럽 세척", "클럽하우스 도보 이동"],
    dark: false, photo: "스탠다드 객실 (40㎡)",
  },
  {
    tag: "46㎡", name: "디럭스", spec: "46㎡ · 45실",
    desc: "한층 여유로운 공간의 디럭스 객실입니다. 장기 투숙과 연박 라운드에 적합합니다.",
    items: ["조식 포함", "무료 Wi-Fi", "골프백 보관 및 클럽 세척", "클럽하우스 도보 이동"],
    dark: true, photo: "디럭스 객실 (46㎡)",
  },
];

export const NOTICES = [
  { no: "08", pinned: true, cat: "요금", date: "2026.08.01", title: "2026년 하반기 그린피·카트비·캐디피 요금표 안내" },
  { no: "07", pinned: true, cat: "요금", date: "2026.07.20", title: "부영 골프텔 객실 요금 및 투숙객 그린피 할인율 변경 안내" },
  { no: "06", pinned: false, cat: "코스", date: "2026.07.11", title: "우기 집중호우에 따른 12~14번 홀 카트 진입 제한 안내" },
  { no: "05", pinned: false, cat: "운영", date: "2026.06.28", title: "7월 그린 에어레이션 작업 일정 및 임시 그린 운영 안내" },
  { no: "04", pinned: false, cat: "대회", date: "2026.06.02", title: "제9회 부영 클럽 챔피언십 참가자 모집 (8월 22~23일)" },
  { no: "03", pinned: false, cat: "시설", date: "2026.05.15", title: "드라이빙 레인지 야간 조명 교체 공사에 따른 이용 시간 조정" },
  { no: "02", pinned: false, cat: "운영", date: "2026.04.30", title: "크메르 신년 연휴 기간 셔틀 및 레스토랑 운영 시간 안내" },
  { no: "01", pinned: false, cat: "시설", date: "2026.03.18", title: "클럽하우스 라커룸 및 사우나 리뉴얼 공사 완료 안내" },
];

export const FAQ_CATS = ["라운드 · 코스", "골프텔 · 숙박", "교통 · 픽업", "시설 · 이용 안내"];

export const FAQS = [
  { q: "첫 조 티오프는 몇 시부터인가요?", a: "건기에는 오전 5시 40분, 우기에는 오전 6시부터 첫 조가 출발합니다. 골프텔 투숙객은 첫 조 배정을 우선 요청하실 수 있습니다." },
  { q: "캐디와 카트는 필수인가요?", a: "전 홀 캐디 동반이 원칙이며, 카트는 4인 1대 기준으로 운영합니다. 2인 이하 라운드는 시간대에 따라 조인 라운드로 진행될 수 있습니다." },
  { q: "한국어가 통하나요?", a: "한국어 가능 캐디 60명이 상주하며, 프론트와 레스토랑에는 한국인 매니저가 상주합니다. 사전 요청 시 한국어 캐디로 배정해 드립니다." },
  { q: "클럽을 빌릴 수 있나요?", a: "프로샵에서 남녀 풀세트 대여가 가능합니다. 좌타 세트는 수량이 제한적이라 도착 3일 전까지 미리 알려주시는 편이 좋습니다." },
  { q: "우기에도 라운드가 가능한가요?", a: "5~10월 우기에도 대부분 라운드가 가능합니다. 스콜은 보통 30분 내로 그치며, 전 홀 배수 설계로 비 직후에도 페어웨이 상태가 유지됩니다." },
  { q: "골프텔 조식은 몇 시부터인가요?", a: "오전 4시 50분부터 오전 10시까지 운영합니다. 첫 조로 나가시는 분들을 위해 간편식 도시락도 준비해 드립니다." },
  { q: "공항 픽업은 어떻게 신청하나요?", a: "도착 항공편과 인원을 전화 또는 카카오톡으로 알려주시면 도착 게이트에서 클럽 차량이 대기합니다. 골프텔 투숙객은 무료입니다." },
  { q: "복장 규정이 있나요?", a: "칼라 있는 셔츠와 골프화를 착용해 주세요. 민소매·청바지·운동화 차림은 코스 입장이 제한됩니다." },
];

export const INQUIRY_CHANNELS = [
  { label: "TELEPHONE", value: "+855 63 967 101 / 114", note: "현지 05:30 – 18:30 (연중무휴)" },
  { label: "KAKAOTALK", value: "booyoungcc", note: "한국어 상담 09:00 – 21:00 (KST)" },
  { label: "EMAIL", value: "golf@booyoungcc.com", note: "영업일 기준 1일 이내 회신" },
];

export const INQUIRIES = [
  { no: "06", title: "8인 단체 라운드 시 카트 배정 문의", writer: "김*수", date: "2026.08.05", status: "답변완료" },
  { no: "05", title: "스위트 객실 4인 투숙 시 침구 추가 가능한가요", writer: "이*영", date: "2026.08.03", status: "답변완료" },
  { no: "04", title: "단체 20인 라운드 시 클럽하우스 만찬 예약 가능한가요", writer: "박*환", date: "2026.08.02", status: "접수" },
  { no: "03", title: "공항 픽업 차량 골프백 4개 적재 가능 여부", writer: "정*미", date: "2026.07.30", status: "답변완료" },
  { no: "02", title: "좌타 대여 클럽 재고 확인 부탁드립니다", writer: "최*호", date: "2026.07.28", status: "답변완료" },
  { no: "01", title: "클럽 챔피언십 참가 자격 관련 문의", writer: "윤*진", date: "2026.07.25", status: "답변완료" },
];

export const CONTACT_ROWS = [
  { label: "ADDRESS", value: "Tropaingrun Road, Krong Siem Reap, Kingdom of Cambodia" },
  { label: "공항에서", value: "시엠립 앙코르 국제공항(SAI)에서 37km 차로 약 40분" },
  { label: "시내에서", value: "펍 스트리트 기준 15km 차로 약 25분" },
  { label: "TEL · FAX", value: "+855 63 967 101 / 114 · FAX +855 63 967 133 · MOBILE +855 12 365 712" },
];

export const FAMILY_LINKS = [
  { name: "부영그룹", url: "https://www.booyoung.co.kr" },
  { name: "사랑으로부영", url: "https://www.sarangeuro.co.kr" },
  { name: "라오스 씨게임즈 GC", url: "http://www.seagamesgc.com/" },
  { name: "마에스트로CC", url: "https://www.maestrocc.co.kr" },
  { name: "순천부영CC", url: "https://www.scbooyoungcc.co.kr" },
  { name: "제주부영CC", url: "https://www.booyoungcc.co.kr" },
  { name: "더클래식CC", url: "https://www.theclassicresort.com" },
  { name: "제주부영호텔&리조트", url: "https://www.booyoungjejuhotel.com" },
  { name: "무주덕유산리조트", url: "https://www.mdysresort.com" },
  { name: "오투리조트", url: "https://www.o2resort.com" },
  { name: "제주청소년수련원", url: "https://www.booyoungyouth.com" },
  { name: "도농애시앙", url: "https://donong.aesiang.co.kr" },
  { name: "목동애시앙", url: "https://mokdong.aesiang.co.kr" },
];

export const NAV_ITEMS = [
  { href: "/", label: "홈", match: (p: string) => p === "/" },
  { href: "/course", label: "코스", match: (p: string) => p.startsWith("/course") },
  { href: "/facilities/golftel", label: "시설안내", match: (p: string) => p.startsWith("/facilities") },
  { href: "/board/notice", label: "게시판", match: (p: string) => p.startsWith("/board") },
  { href: "/access", label: "오시는 길", match: (p: string) => p.startsWith("/access") },
];
