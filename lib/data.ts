export interface HoleTee {
  label: string;
  color: string;
  yards: number;
}

export interface Hole {
  no: string;
  par: number;
  hdcp?: number;
  champion: number;
  regular: number;
  ladies: number;
  tip: string;
  image?: string;
  tees?: HoleTee[];
}

function makeTees(black: number, blue: number, white: number, silver: number, red: number): HoleTee[] {
  return [
    { label: "블랙", color: "#1a1a1a", yards: black },
    { label: "블루", color: "#1e3a8a", yards: blue },
    { label: "화이트", color: "#ffffff", yards: white },
    { label: "실버", color: "#adb2ba", yards: silver },
    { label: "레드", color: "#c0392b", yards: red },
  ];
}

export const HOLES: Hole[] = [
  {
    no: "01", par: 5, champion: 577, regular: 526, ladies: 457,
    image: "/images/holes/hole1.jpg",
    tees: makeTees(577, 546, 526, 495, 457),
    tip: "옥색 레이크를 끼고 시작되는 1번 홀은 파5로 넓은 페어웨이는 시원한 청량감을 선사하고, 전면의 좌우 타겟 벙커가 골퍼를 유혹하지만 그다지 위협적이지 못하다. 장타자는 페어웨이 좌측 벙커 우측 끝을 공략한다면 확 트인 시야를 확보하고, 투온을 노려 볼만한 홀이다. 단, 우측으로 공이 밀리면 세컨샷 지점에서 그린이 보이지 않고 그린앞 가드벙커에 빠질 염려가 있으나, 욕심내 볼만한 홀이다. 조심할 점은 바람과 그린앞에 벙커가 항상 기다린다는 점만 유의하면, 약간 오르막인 그린공략이 무난하다.",
  },
  {
    no: "02", par: 4, champion: 386, regular: 342, ladies: 285,
    image: "/images/holes/2.png",
    tees: makeTees(386, 366, 342, 323, 285),
    tip: "물과 벙커가 없는 유일한 홀로서 그린을 직접 공략할 수 있는 18개 홀 중 가장 편안한 홀이다. 페어웨이와 그린 우측엔 길게 grass 벙커가 도사리고 있다. 그린은 중앙부분이 높아 전면과 후면은 약간의 경사를 봐야 한다.",
  },
  {
    no: "03", par: 3, champion: 206, regular: 160, ladies: 124,
    image: "/images/holes/3.png",
    tees: makeTees(206, 182, 160, 145, 124),
    tip: "호수를 낀 파3 홀이다. 시원한 청량감을 맛볼 수 있는 씨엠립 레이크 리조트 골프코스의 서막을 알리는 홀이기도 하다. 확 트인 시야와 그린을 감싸 안은 야자수와 짬빠이나무 아래에 2단 그린이 골퍼를 기다린다. 좌측의 레이크가 부담감이 있으나, 어렵지 않은 홀이다.",
  },
  {
    no: "04", par: 4, champion: 406, regular: 367, ladies: 304,
    image: "/images/holes/4.png",
    tees: makeTees(406, 389, 367, 339, 304),
    tip: "파4홀로서 좌우의 시원한 레이크와 폭이 160야드가 넘는 넓은 페어웨이는 드라이버 샷을 맘껏 날릴 수 있는 홀이다. 세컨샷에서는 정확한 아이언 샷이 요구되는 홀이다.",
  },
  {
    no: "05", par: 4, hdcp: 1, champion: 434, regular: 387, ladies: 323,
    image: "/images/holes/5.png",
    tees: makeTees(434, 410, 387, 366, 323),
    tip: "넓은 레이크가 홀을 따라 좌측으로 길게 늘어서 있으며 4번 페어웨이가 호수를 사이에 두고 정원같이 펼쳐져 있다. 핸디캡 1번 홀로서 페어웨이 중앙좌측 벙커가 공략의 포인트고, 충분한 드라이버 샷과 정확한 아이언 샷이 요구된다. 그린 주변의 벙커와 세컨샷 위치가 승부의 관건이다.",
  },
  {
    no: "06", par: 4, champion: 430, regular: 381, ladies: 309,
    image: "/images/holes/6.png",
    tees: makeTees(430, 404, 381, 359, 309),
    tip: "완만한 도그렉 홀로서 페어웨이 중앙의 벙커가 잘 다듬어진 넓은 페어웨이와 조화롭다. 벙커 좌측엔 코코넛 트리가 그린을 감추고 있으며, 이 코코넛 트리가 지름길이긴 하나 충분한 드라이버 거리가 요구된다.",
  },
  {
    no: "07", par: 3, champion: 252, regular: 200, ladies: 149,
    image: "/images/holes/7.png",
    tees: makeTees(252, 223, 200, 178, 149),
    tip: "숏홀 중 가장 어려운 홀이다. 경우에 따라 드라이버로 공략해야 될 홀이다. 밭 밑의 쪽빛 레이크와 좌우 그린을 떠받들고 있는 벙커와의 조화는 더욱 신중한 플레이를 요구한다. 그린은 이단과 웨이브가 퍼팅에 긴장을 배가한다.",
  },
  {
    no: "08", par: 4, champion: 454, regular: 381, ladies: 311,
    image: "/images/holes/8.png",
    tees: makeTees(454, 419, 381, 358, 311),
    tip: "완만한 오르막과 좌우로 늘어선 코코넛과 짬빠이, 팜트리 나무들로 둘러싸인 아늑한 홀이다. 전면의 좌측 타겟 벙커를 공략하면 드넓은 그린과 페어웨이가 펼쳐진다. 그린은 뒷부분이 오르막 경사로 어렵지않게 공략할 수있다.",
  },
  {
    no: "09", par: 5, champion: 542, regular: 489, ladies: 424,
    image: "/images/holes/9.png",
    tees: makeTees(542, 517, 489, 459, 424),
    tip: "마지막 파5 홀인 이 홀은 확 트인 홀답게 멀리 클럽하우스를 보면서 공을 친다. 홀 중간에 크릭크가 파여 있어 주의가 필요한 홀이기도 하다. 홀 우측으로 내려다보는 파란 레이크가 호수같이 펼쳐져 있어 호쾌한 드라이버 샷이 절로 나온다. 그린 주변엔 가드 벙커가 도사리고 있어 투온을 노리기엔 정확한 샷이 요구되고 그린은 완만한 오르막이다.",
  },
  {
    no: "10", par: 4, champion: 417, regular: 367, ladies: 311,
    image: "/images/holes/10.png",
    tees: makeTees(417, 397, 367, 344, 311),
    tip: "우측에 길게 늘어선 호수와 좌측의 이엉트리, 트농, 팜트리 군식들 그리고 그린을 감싸고 있는 꽃나무들이 아름다운 홀이다. 호수방향의 가드 벙커를 피한다면 무난히 공략할 수 있는 편안한 홀이다.",
  },
  {
    no: "11", par: 4, champion: 379, regular: 334, ladies: 284,
    image: "/images/holes/11.png",
    tees: makeTees(379, 358, 334, 318, 284),
    tip: "좌측의 레이크와 중앙의 벙커가 공략의 관건이다. IP지점이 벙커로 위험하는 홀로서, 레이크의 바람도 영향을 받는 홀이다. 티샷의 랜딩이 좋다면 버디도 노려 볼만한 유일한 홀이다.",
  },
  {
    no: "12", par: 5, champion: 556, regular: 501, ladies: 441,
    image: "/images/holes/12.png",
    tees: makeTees(556, 531, 501, 475, 441),
    tip: "그린을 향해 맘껏 티샷을 날릴수 있는 파5 홀이다. 충분히 확보된 시야와 야자수 사이의 그린은 손에 잡힐듯 하다. 티샷이 훌륭하다면 장타자는 그린 우측의 호수를 건너 투온을 시도해 봄직한 홀이다. 전체적으로 에스자 코스인 이 홀은 도전심이 솟구치는 홀이다. 그린은 2단 그린이고 뒤가 높다.",
  },
  {
    no: "13", par: 3, champion: 221, regular: 186, ladies: 133,
    image: "/images/holes/13.png",
    tees: makeTees(221, 202, 186, 160, 133),
    tip: "파3홀인 이 홀은 좌측 레이크와 가드 벙커가 티샷에 신중함을 배가 시킨다. 그린 주변의 슬라나무와 야자수 그리고 꽃 단장한 주변 조경은 파란 잔디 만큼이나 아름다운 홀이다.",
  },
  {
    no: "14", par: 4, champion: 430, regular: 379, ladies: 320,
    image: "/images/holes/14.png",
    tees: makeTees(430, 408, 379, 353, 320),
    tip: "좌측 레이크와 코스를 가로지르는 레이크는 티샷을 신중하게 한다. 페어웨이 우측 300야드 지점의 사타반 나무가 샷의 목표가 되며 레이크를 넘기는데는 180야드면 충분하나 가끔 실수 할 수도 있다. 잘 다듬어진 잔디 만큼이나 아름다운 홀이다.",
  },
  {
    no: "15", par: 4, champion: 446, regular: 390, ladies: 328,
    image: "/images/holes/15.png",
    tees: makeTees(446, 411, 390, 370, 328),
    tip: "그린이 보이는 좌측 도그렉 홀이다. 티샷이 정교하다면 좌측의 코코넛 트리군식지점이 1차 목표가 될 수 있고, 2차는 우측 끝 팜트리 군식이 목표가 될 수 있다. 비교적 긴 파4홀로 IP지점에서 그린앞의 벙커를 조심해야할 홀이다.",
  },
  {
    no: "16", par: 3, champion: 187, regular: 153, ladies: 115,
    image: "/images/holes/16.png",
    tees: makeTees(187, 173, 153, 136, 115),
    tip: "그린의 언듀레이션은 그린을 감싸고 있는 벙커들과 레이크가 조화를 이루는 가장 아름다운 홀이다. 그린 주변의 코코넛 트리가 목표가 될 수도 있겠다.",
  },
  {
    no: "17", par: 5, champion: 604, regular: 560, ladies: 493,
    image: "/images/holes/17.png",
    tees: makeTees(604, 582, 560, 537, 493),
    tip: "좌측으로 길게 펼쳐진 호수와 녹음진 코코넛, 팜트리 나무가 긴장된 전 홀의 스트레스를 풀어 주기에 충분한 604야드 파5 홀이다. 정확한 티샷으로 250야드 지점의 좌우 벙커를 피한다면 350야드 지점의 코스를 가로지르는 크릭크는 문제가 없다. 그린을 오버하지 않도록 조심해야한다.",
  },
  {
    no: "18", par: 4, champion: 469, regular: 414, ladies: 343,
    image: "/images/holes/18.png",
    tees: makeTees(469, 445, 414, 388, 343),
    tip: "마지막의 대미를 장식할 수 있는 티샷이 가장 좋아야 할 홀이다. 좌우측으로 펼쳐진 호수와 IP 우측지점에 길게 자리잡은 가드 벙커가 한껏 모양을 내고 있고, 그린주변은 호수가 감싸고 있다. IP지점에 늘어선 팜트리와 코코넛 트리는 낭만적이기도 하다. 파를 잡기 위해서는 페어웨이 중앙에 정확한 안착이 중요하다.",
  },
];

export const SIGNATURE_HOLES = [
  { title: "9번 홀", en: "THE CHALLENGE", par: 5, yards: 542, trait: "레이크·크릭", image: "/images/hole9.jpg", desc: "클럽하우스를 보며 티샷하는 확 트인 파5. 우측 레이크를 따라 호쾌한 드라이버 샷이 가능하지만, 그린 주변 가드벙커는 정확한 온그린을 요구합니다." },
  { title: "11번 홀", en: "THE PRECISION", par: 4, yards: 379, trait: "레이크·벙커", image: "/images/hole11.jpg", desc: "좌측 레이크와 중앙 벙커가 공략의 관건인 파4. 티샷 랜딩이 좋다면 버디도 노려볼 만한 유일한 홀입니다." },
  { title: "18번 홀", en: "THE FINISH", par: 4, yards: 469, trait: "호수·좁은 그린", image: "/images/hole18.jpg", desc: "좌우로 호수가 펼쳐진 마무리 홀. 페어웨이 중앙에 정확히 안착시키는 것이 파를 지키는 열쇠입니다." },
];

export const FACILITY_TEASERS = [
  { id: "golftel", name: "골프텔", en: "GOLFTEL", image: "/images/hotel1.png", meta: "94실 · STANDARD · DELUXE", desc: "클럽하우스와 이어진 94실 규모 숙소. 이동 없이 연박 라운드가 가능합니다." },
  { id: "clubhouse", name: "클럽하우스", en: "CLUBHOUSE", image: "/images/clubhouse1.jpg", meta: "레스토랑 · 프로샵 · 라커 · 스파", desc: "크메르 목조 양식을 현대적으로 해석한 2층 규모. 라운드 전후가 한 건물에서 끝납니다." },
  { id: "range", name: "골프연습장", en: "PRACTICE RANGE", image: "/images/driving1.png", meta: "78타석 · 1층·2층 구조", desc: "넓고 쾌적한 1·2층 78타석 규모의 연습시설에서 스윙의 완성도를 높여보세요." },
];

export const CLUBHOUSE_ITEMS = [
  { name: "레스토랑", photo: "레스토랑 홀", image: "/images/restaurant.png", hours: "05:00 – 21:00", desc: "한식·크메르식·양식을 함께 냅니다. 18번 홀 그린이 보이는 테라스석이 인기입니다." },
  { name: "프로샵", photo: "프로샵 진열대", image: "/images/proshop.png", hours: "05:30 – 18:30", desc: "클럽 대여와 소모품 판매, 간단한 그립 교체와 로프트 점검을 현장에서 처리합니다." },
  { name: "라커 · 샤워", photo: "라커룸", image: "/images/locker.png", hours: "05:00 – 19:00", desc: "남녀 각 120개 라커와 샤워 부스. 그린피에 이용료가 포함됩니다." },
  { name: "스파 & 사우나", photo: "스파 트리트먼트 룸", hours: "11:00 – 21:00", desc: "크메르 전통 마사지와 건식 사우나. 예약 없이 이용 가능합니다." },
];

export const GOLFTEL_ITEMS = [
  { name: "호텔 전경", photo: "호텔 전경", image: "/images/hotel1.png", hours: "상시 이용", desc: "야자수와 정원이 어우러진 골프텔 전경. 체크인 전후로 편안하게 머물 수 있는 공간입니다." },
  { name: "수영장", photo: "수영장", image: "/images/pool.png", hours: "07:00 – 19:00", desc: "라운드 후 피로를 풀 수 있는 야외 수영장. 투숙객은 자유롭게 이용하실 수 있습니다." },
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
    name: "STANDARD", spec: "39㎡ · 49실",
    desc: "합리적인 크기로 구성된 스탠다드 객실입니다. 클럽하우스와 가까워 이동이 편리합니다.",
    items: ["체크인 14:00 · 체크아웃 12:00", "무료 Wi-Fi", "골프백 보관", "클럽하우스 도보 이동", "투숙객 그린피 할인"],
    dark: false, photo: "STANDARD 객실 (39㎡)", image: "/images/room_12py.png",
  },
  {
    name: "DELUXE", spec: "46㎡ · 45실",
    desc: "한층 여유로운 공간의 디럭스 객실입니다. 장기 투숙과 연박 라운드에 적합합니다.",
    items: ["체크인 14:00 · 체크아웃 12:00", "무료 Wi-Fi", "골프백 보관", "클럽하우스 도보 이동", "투숙객 그린피 할인"],
    dark: true, photo: "DELUXE 객실 (46㎡)", image: "/images/room_14py.png",
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
