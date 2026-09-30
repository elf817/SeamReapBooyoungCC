export interface HoleTee {
  label: string;
  labelEn: string;
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
  tipEn: string;
  image?: string;
  tees?: HoleTee[];
}

function makeTees(black: number, blue: number, white: number, silver: number, red: number): HoleTee[] {
  return [
    { label: "블랙", labelEn: "Black", color: "#1a1a1a", yards: black },
    { label: "블루", labelEn: "Blue", color: "#1e3a8a", yards: blue },
    { label: "화이트", labelEn: "White", color: "#ffffff", yards: white },
    { label: "실버", labelEn: "Silver", color: "#adb2ba", yards: silver },
    { label: "레드", labelEn: "Red", color: "#c0392b", yards: red },
  ];
}

export const HOLES: Hole[] = [
  {
    no: "01", par: 5, champion: 577, regular: 526, ladies: 457,
    image: "/images/holes/Hole_01.png",
    tees: makeTees(577, 546, 526, 495, 457),
    tip: "옥색 레이크를 끼고 시작되는 1번 홀은 파5로 넓은 페어웨이는 시원한 청량감을 선사하고, 전면의 좌우 타겟 벙커가 골퍼를 유혹하지만 그다지 위협적이지는 않습니다. 장타자는 페어웨이 좌측 벙커 우측 끝을 공략한다면 확 트인 시야를 확보하고, 투온을 노려 볼만한 홀입니다. 단, 우측으로 공이 밀리면 세컨샷 지점에서 그린이 보이지 않고 그린앞 가드벙커에 빠질 염려가 있으나, 욕심내 볼만한 홀입니다. 조심할 점은 바람과 그린앞에 벙커가 항상 기다린다는 점만 유의하시면, 약간 오르막인 그린공략이 무난합니다.",
    tipEn: "Opening alongside a jade-colored lake, this par-5 first hole offers a wide, refreshing fairway. Bunkers flanking the front tempt golfers but pose little real threat. Long hitters who target the right edge of the left fairway bunker gain a wide-open view and a good look at going for the green in two. If the ball drifts right, though, the green won't be visible from the second-shot spot and there's a risk of landing in the greenside bunker — still worth the gamble. Just mind the wind and the ever-present bunkers guarding the green; the slightly uphill approach is otherwise manageable.",
  },
  {
    no: "02", par: 4, champion: 386, regular: 342, ladies: 285,
    image: "/images/holes/Hole_02.png",
    tees: makeTees(386, 366, 342, 323, 285),
    tip: "물과 벙커가 없는 유일한 홀로서 그린을 직접 공략할 수 있는 18개 홀 중 가장 편안한 홀입니다. 페어웨이와 그린 우측엔 길게 grass 벙커가 도사리고 있습니다. 그린은 중앙부분이 높아 전면과 후면은 약간의 경사를 봐야 합니다.",
    tipEn: "The only hole with no water or bunkers, making it the most comfortable of all 18 for a direct approach to the green. A long grass bunker lurks along the right side of the fairway and green. The green's center sits higher, so read a slight slope on both the front and back.",
  },
  {
    no: "03", par: 3, champion: 206, regular: 160, ladies: 124,
    image: "/images/holes/Hole_03.png",
    tees: makeTees(206, 182, 160, 145, 124),
    tip: "호수를 낀 파3 홀입니다. 시원한 청량감을 맛볼 수 있는 씨엠립 레이크 리조트 골프코스의 서막을 알리는 홀이기도 합니다. 확 트인 시야와 그린을 감싸 안은 야자수와 짬빠이나무 아래에 2단 그린이 골퍼를 기다립니다. 좌측의 레이크가 부담감이 있으나, 어렵지 않은 홀입니다.",
    tipEn: "A par-3 hole bordered by a lake, marking the refreshing opening act of the course. Wide-open views and a two-tiered green await beneath palm and champa trees framing the putting surface. The lake to the left adds pressure, but the hole isn't difficult.",
  },
  {
    no: "04", par: 4, champion: 406, regular: 367, ladies: 304,
    image: "/images/holes/Hole_04.png",
    tees: makeTees(406, 389, 367, 339, 304),
    tip: "파4홀로서 좌우의 시원한 레이크와 폭이 160야드가 넘는 넓은 페어웨이는 드라이버 샷을 맘껏 날릴 수 있는 홀입니다. 세컨샷에서는 정확한 아이언 샷이 요구되는 홀입니다.",
    tipEn: "A par-4 hole with refreshing lakes on both sides and a fairway over 160 yards wide, inviting a full driver swing. The second shot demands a precise iron.",
  },
  {
    no: "05", par: 4, hdcp: 1, champion: 434, regular: 387, ladies: 323,
    image: "/images/holes/Hole_05.png",
    tees: makeTees(434, 410, 387, 366, 323),
    tip: "넓은 레이크가 홀을 따라 좌측으로 길게 늘어서 있으며 4번 페어웨이가 호수를 사이에 두고 정원같이 펼쳐져 있습니다. 핸디캡 1번 홀로서 페어웨이 중앙좌측 벙커가 공략의 포인트이며, 충분한 드라이버 샷과 정확한 아이언 샷이 요구됩니다. 그린 주변의 벙커와 세컨샷 위치가 승부의 관건입니다.",
    tipEn: "A wide lake runs the length of the hole on the left, with the 4th fairway spreading out like a garden across the water. As the No. 1 handicap hole, the bunker at center-left fairway is the key target, calling for a solid drive and a precise iron. Bunkers around the green and second-shot placement decide the outcome.",
  },
  {
    no: "06", par: 4, champion: 430, regular: 381, ladies: 309,
    image: "/images/holes/Hole_06.png",
    tees: makeTees(430, 404, 381, 359, 309),
    tip: "완만한 도그렉 홀로서 페어웨이 중앙의 벙커가 잘 다듬어진 넓은 페어웨이와 조화롭습니다. 벙커 좌측엔 코코넛 트리가 그린을 감추고 있으며, 이 코코넛 트리가 지름길이긴 하나 충분한 드라이버 거리가 요구됩니다.",
    tipEn: "A gentle dogleg hole where a center-fairway bunker sits in harmony with the wide, well-manicured fairway. Coconut trees to the left of the bunker hide the green; while they offer a shortcut line, it demands a long, confident drive.",
  },
  {
    no: "07", par: 3, champion: 252, regular: 200, ladies: 149,
    image: "/images/holes/Hole_07.png",
    tees: makeTees(252, 223, 200, 178, 149),
    tip: "숏홀 중 가장 어려운 홀입니다. 경우에 따라 드라이버로 공략해야 하는 홀입니다. 밭 밑의 쪽빛 레이크와 좌우 그린을 떠받들고 있는 벙커와의 조화는 더욱 신중한 플레이를 요구합니다. 그린은 이단과 웨이브가 퍼팅에 긴장을 배가합니다.",
    tipEn: "The most challenging of the short holes, sometimes calling for a driver off the tee. The indigo lake below and the bunkers cradling the green on both sides demand extra-careful play. The two-tiered, undulating green heightens the tension on every putt.",
  },
  {
    no: "08", par: 4, champion: 454, regular: 381, ladies: 311,
    image: "/images/holes/Hole_08.png",
    tees: makeTees(454, 419, 381, 358, 311),
    tip: "완만한 오르막과 좌우로 늘어선 코코넛과 짬빠이, 팜트리 나무들로 둘러싸인 아늑한 홀입니다. 전면의 좌측 타겟 벙커를 공략하면 드넓은 그린과 페어웨이가 펼쳐집니다. 그린은 뒷부분이 오르막 경사로 어렵지 않게 공략하실 수 있습니다.",
    tipEn: "A cozy hole with a gentle uphill grade, lined on both sides with coconut, champa, and palm trees. Target the left-front bunker to open up a wide green and fairway. The green slopes upward toward the back, making it fairly manageable to approach.",
  },
  {
    no: "09", par: 5, champion: 542, regular: 489, ladies: 424,
    image: "/images/holes/Hole_09.png",
    tees: makeTees(542, 517, 489, 459, 424),
    tip: "마지막 파5 홀인 이 홀은 확 트인 홀답게 멀리 클럽하우스를 보면서 공을 칩니다. 홀 중간에 크릭크가 파여 있어 주의가 필요한 홀이기도 합니다. 홀 우측으로 내려다보는 파란 레이크가 호수같이 펼쳐져 있어 호쾌한 드라이버 샷이 절로 나옵니다. 그린 주변엔 가드 벙커가 도사리고 있어 투온을 노리기엔 정확한 샷이 요구되며 그린은 완만한 오르막입니다.",
    tipEn: "The closing par-5 of the front nine, wide open with the clubhouse visible in the distance as you tee off. A creek cutting across the middle of the hole calls for caution. A blue lake spreading out below on the right invites a bold, confident drive. Guard bunkers around the green demand a precise shot for anyone going for it in two, and the green itself sits on a gentle upslope.",
  },
  {
    no: "10", par: 4, champion: 417, regular: 367, ladies: 311,
    image: "/images/holes/Hole_10.png",
    tees: makeTees(417, 397, 367, 344, 311),
    tip: "우측에 길게 늘어선 호수와 좌측의 이엉트리, 트농, 팜트리 군식들 그리고 그린을 감싸고 있는 꽃나무들이 아름다운 홀입니다. 호수방향의 가드 벙커를 피한다면 무난히 공략할 수 있는 편안한 홀입니다.",
    tipEn: "A beautiful hole framed by a long lake on the right, clusters of ieong, tronoh, and palm trees on the left, and flowering trees surrounding the green. Avoid the guard bunker on the lake side and this is a comfortable, manageable hole.",
  },
  {
    no: "11", par: 4, champion: 379, regular: 334, ladies: 284,
    image: "/images/holes/Hole_11.png",
    tees: makeTees(379, 358, 334, 318, 284),
    tip: "좌측의 레이크와 중앙의 벙커가 공략의 관건입니다. IP지점이 벙커로 위험한 홀로서, 레이크의 바람도 영향을 받는 홀입니다. 티샷의 랜딩이 좋다면 버디도 노려 볼만한 유일한 홀입니다.",
    tipEn: "The lake on the left and the center bunker are the keys to this hole. The landing zone is guarded by a bunker, and lake winds can also come into play. With a good tee shot landing, this is the one hole where a birdie is well worth chasing.",
  },
  {
    no: "12", par: 5, champion: 556, regular: 501, ladies: 441,
    image: "/images/holes/Hole_12.png",
    tees: makeTees(556, 531, 501, 475, 441),
    tip: "그린을 향해 맘껏 티샷을 날릴 수 있는 파5 홀입니다. 충분히 확보된 시야와 야자수 사이의 그린은 손에 잡힐 듯합니다. 티샷이 훌륭하다면 장타자는 그린 우측의 호수를 건너 투온을 시도해 봄직한 홀입니다. 전체적으로 에스자 코스인 이 홀은 도전심이 솟구치는 홀입니다. 그린은 2단 그린이고 뒤가 높습니다.",
    tipEn: "A par-5 that invites a free-swinging tee shot toward the green. The wide-open view makes the green, framed by palm trees, feel almost within reach. With a great drive, long hitters may attempt to carry the lake on the right of the green in two. This S-shaped hole overall stirs up a real sense of challenge. The green is two-tiered, higher toward the back.",
  },
  {
    no: "13", par: 3, champion: 221, regular: 186, ladies: 133,
    image: "/images/holes/Hole_13.png",
    tees: makeTees(221, 202, 186, 160, 133),
    tip: "파3홀인 이 홀은 좌측 레이크와 가드 벙커가 티샷에 신중함을 배가시킵니다. 그린 주변의 슬라나무와 야자수 그리고 꽃 단장한 주변 조경은 파란 잔디만큼이나 아름다운 홀입니다.",
    tipEn: "On this par-3, the lake on the left and the guard bunker call for extra care on the tee shot. Sla trees and palms around the green, along with the flowering landscaping nearby, make this hole every bit as beautiful as its green fairway.",
  },
  {
    no: "14", par: 4, champion: 430, regular: 379, ladies: 320,
    image: "/images/holes/Hole_14.png",
    tees: makeTees(430, 408, 379, 353, 320),
    tip: "좌측 레이크와 코스를 가로지르는 레이크는 티샷을 신중하게 합니다. 페어웨이 우측 300야드 지점의 사타반 나무가 샷의 목표가 되며 레이크를 넘기는 데는 180야드면 충분하나 가끔 실수할 수도 있습니다. 잘 다듬어진 잔디만큼이나 아름다운 홀입니다.",
    tipEn: "A lake on the left and another crossing the course call for a careful tee shot. A sataban tree 300 yards down the right side of the fairway serves as an aiming point, and 180 yards is enough to clear the lake — though the occasional mishit happens. As beautiful a hole as its well-manicured turf.",
  },
  {
    no: "15", par: 4, champion: 446, regular: 390, ladies: 328,
    image: "/images/holes/Hole_15.png",
    tees: makeTees(446, 411, 390, 370, 328),
    tip: "그린이 보이는 좌측 도그렉 홀입니다. 티샷이 정교하다면 좌측의 코코넛 트리 군식 지점이 1차 목표가 될 수 있고, 2차는 우측 끝 팜트리 군식이 목표가 될 수 있습니다. 비교적 긴 파4홀로 IP지점에서 그린앞의 벙커를 조심해야 할 홀입니다.",
    tipEn: "A left-doglegging hole with the green visible from the tee. A precise tee shot can target the cluster of coconut trees on the left first, then the palm tree cluster at the far right. A fairly long par-4 where you'll want to watch for the bunker in front of the green at the landing zone.",
  },
  {
    no: "16", par: 3, champion: 187, regular: 153, ladies: 115,
    image: "/images/holes/Hole_16.png",
    tees: makeTees(187, 173, 153, 136, 115),
    tip: "그린의 언듀레이션은 그린을 감싸고 있는 벙커들과 레이크가 조화를 이루는 가장 아름다운 홀입니다. 그린 주변의 코코넛 트리가 목표가 될 수도 있습니다.",
    tipEn: "The green's undulation harmonizes beautifully with the bunkers and lake surrounding it, making this one of the most scenic holes on the course. A coconut tree near the green can also serve as an aiming point.",
  },
  {
    no: "17", par: 5, champion: 604, regular: 560, ladies: 493,
    image: "/images/holes/Hole_17.png",
    tees: makeTees(604, 582, 560, 537, 493),
    tip: "좌측으로 길게 펼쳐진 호수와 녹음진 코코넛, 팜트리 나무가 긴장된 전 홀의 스트레스를 풀어 주기에 충분한 604야드 파5 홀입니다. 정확한 티샷으로 250야드 지점의 좌우 벙커를 피한다면 350야드 지점의 코스를 가로지르는 크릭크는 문제가 없습니다. 그린을 오버하지 않도록 조심해야 합니다.",
    tipEn: "A long lake stretching along the left and lush coconut and palm trees make this 604-yard par-5 a welcome release after the tension of the previous hole. A precise tee shot avoiding the bunkers on both sides at 250 yards leaves no trouble with the creek crossing the course at 350 yards. Take care not to fly the green.",
  },
  {
    no: "18", par: 4, champion: 469, regular: 414, ladies: 343,
    image: "/images/holes/Hole_18.png",
    tees: makeTees(469, 445, 414, 388, 343),
    tip: "마지막의 대미를 장식할 수 있는 티샷이 가장 좋아야 할 홀입니다. 좌우측으로 펼쳐진 호수와 IP 우측지점에 길게 자리잡은 가드 벙커가 한껏 모양을 내고 있고, 그린주변은 호수가 감싸고 있습니다. IP지점에 늘어선 팜트리와 코코넛 트리는 낭만적이기도 합니다. 파를 잡기 위해서는 페어웨이 중앙에 정확한 안착이 중요합니다.",
    tipEn: "The hole where your best tee shot should close out the round in style. Lakes spread out on both sides, and a long guard bunker along the right landing zone adds plenty of character, while the green itself is wrapped by water. Palm and coconut trees lining the landing zone lend a romantic touch. Landing accurately in the center of the fairway is key to securing par.",
  },
];


export const FACILITY_TEASERS = [
  {
    id: "golftel", name: "골프텔", nameEn: "Golftel", en: "GOLFTEL", image: "/images/hotel1.jpg",
    meta: "94실 · STANDARD · DELUXE", metaEn: "94 Rooms · STANDARD · DELUXE",
    desc: "클럽하우스와 이어진 94실 규모 숙소. 이동 없이 연박 라운드가 가능합니다.",
    descEn: "A 94-room stay connected to the clubhouse — enjoy multi-night rounds without ever needing to travel.",
  },
  {
    id: "clubhouse", name: "클럽하우스", nameEn: "Clubhouse", en: "CLUBHOUSE", image: "/images/lobby.png",
    meta: "레스토랑 · 프로샵 · 라커 · 스파", metaEn: "Restaurant · Pro Shop · Locker · Spa",
    desc: "편안한 휴식과 세심한 서비스로 라운드에 특별함을 더합니다.",
    descEn: "Comfortable rest and attentive service add something special to every round.",
  },
  {
    id: "range", name: "골프연습장", nameEn: "Driving Range", en: "PRACTICE RANGE", image: "/images/drivingrange.jpg",
    meta: "78타석 · 1층·2층 구조", metaEn: "78 Bays · 2-Floor Layout",
    desc: "넓고 쾌적한 1·2층 78타석 규모의 연습시설에서 스윙의 완성도를 높여보세요.",
    descEn: "Refine your swing at our spacious 2-floor, 78-bay practice facility.",
  },
];

export const CLUBHOUSE_ITEMS = [
  {
    name: "레스토랑", nameEn: "Restaurant", photo: "레스토랑 홀", image: "/images/restaurant.jpg", hours: "05:00 – 21:00",
    desc: "클럽하우스 내 레스토랑에서는 서양식과 아시아 요리, 특히 정통 한국 음식을 다양하게 즐기실 수 있습니다. 아름다운 정원과 고급스러운 분위기 속에서 특별한 식사를 경험해 보세요.",
    descEn: "The clubhouse restaurant serves a range of Western and Asian dishes, with authentic Korean cuisine a specialty. Enjoy a special meal amid a beautiful garden and refined atmosphere.",
  },
  {
    name: "프로샵", nameEn: "Pro Shop", photo: "프로샵 진열대", image: "/images/proshop.jpg", hours: "05:30 – 18:30",
    desc: "클럽하우스 내 프로샵에서 골프 클럽부터 골프웨어, 다양한 골프용품까지 라운딩에 필요한 상품을 편리하게 만나보실 수 있습니다.",
    descEn: "From clubs to golf wear and accessories, find everything you need for your round at the clubhouse pro shop.",
  },
  {
    name: "라커 · 샤워", nameEn: "Locker · Shower", photo: "라커룸", image: "/images/sauna.png", hours: "05:00 – 19:00",
    desc: "쾌적하고 편안한 샤워시설을 갖춘 럭셔리 락커룸에서 라운딩 후 상쾌한 휴식을 즐겨보세요. 개인 락커를 제공하여 더욱 편리하게 이용하실 수 있습니다.",
    descEn: "Refresh after your round in a luxury locker room with comfortable shower facilities. Personal lockers are provided for added convenience.",
  },
];

export const GOLFTEL_ITEMS = [
  {
    name: "호텔 전경", nameEn: "Hotel Exterior", photo: "호텔 전경", image: "/images/hotel1.jpg", hours: "상시 이용",
    desc: "야자수와 정원이 어우러진 골프텔 전경. 체크인 전후로 편안하게 머물 수 있는 공간입니다.",
    descEn: "A golftel exterior surrounded by palm trees and gardens — a comfortable space to stay before or after check-in.",
  },
  {
    name: "수영장", nameEn: "Swimming Pool", photo: "수영장", image: "/images/pool.jpg", hours: "07:00 – 19:00",
    desc: "라운드 후 피로를 풀 수 있는 야외 수영장. 투숙객은 자유롭게 이용하실 수 있습니다.",
    descEn: "An outdoor pool to unwind after your round, freely available to all guests.",
  },
  {
    name: "피트니스", nameEn: "Fitness Center", photo: "피트니스 센터", image: "/images/fitness.png", hours: "05:00 – 21:00",
    desc: "기본 유산소·웨이트 기구를 갖춘 피트니스 센터. 이른 아침에도 이용 가능합니다.",
    descEn: "A fitness center with basic cardio and weight equipment, open even in the early morning.",
  },
];

export const ROOMS = [
  {
    name: "STANDARD", spec: "39㎡ · 49실", specEn: "39㎡ · 49 Rooms",
    desc: "합리적인 크기로 구성된 스탠다드 객실입니다. 클럽하우스와 가까워 이동이 편리합니다.",
    descEn: "A comfortably sized standard room, conveniently close to the clubhouse.",
    items: ["체크인 14:00 · 체크아웃 12:00", "무료 Wi-Fi", "골프백 보관", "클럽하우스 도보 이동", "투숙객 그린피 할인"],
    itemsEn: ["Check-in 14:00 · Check-out 12:00", "Free Wi-Fi", "Golf bag storage", "Walking distance to clubhouse", "Guest green fee discount"],
    dark: false, photo: "STANDARD 객실 (39㎡)", image: "/images/room_12py.jpg",
  },
  {
    name: "DELUXE", spec: "46㎡ · 45실", specEn: "46㎡ · 45 Rooms",
    desc: "한층 여유로운 공간의 디럭스 객실입니다. 장기 투숙과 연박 라운드에 적합합니다.",
    descEn: "A more spacious deluxe room, ideal for extended stays and multi-night rounds.",
    items: ["체크인 14:00 · 체크아웃 12:00", "무료 Wi-Fi", "골프백 보관", "클럽하우스 도보 이동", "투숙객 그린피 할인"],
    itemsEn: ["Check-in 14:00 · Check-out 12:00", "Free Wi-Fi", "Golf bag storage", "Walking distance to clubhouse", "Guest green fee discount"],
    dark: true, photo: "DELUXE 객실 (46㎡)", image: "/images/room_14py.jpg",
  },
];

export const FAQS = [
  {
    q: "티오프 가능시간은 어떻게 되나요?", a: "오전 6시부터 가능하며 마지막 티오프 시간은 16:30입니다.",
    qEn: "What are the available tee-off times?", aEn: "Tee times are available from 6:00 AM, with the last tee-off at 16:30.",
  },
  {
    q: "캐디는 필수인가요?", a: "전 홀 캐디 동반이 원칙이며, 2인 1캐디 기준으로 운영합니다. 당일 손님 수요에 따라 1인 1캐디 배정 가능합니다.",
    qEn: "Is a caddie mandatory?", aEn: "A caddie is required for all 18 holes, standardly one caddie per two players. Depending on demand that day, one caddie per player may also be arranged.",
  },
  {
    q: "카트를 혼자 사용 가능한가요?", a: "1인 1카트로 사용하실 수 있습니다. 당일 손님 수요에 따라 모든 카트가 사용 될 경우에는 불가피하게 1인1카트로 제공해 드릴 수 없으나, 그렇지 않은 경우에는 얼마든지 이용하실 수 있습니다.",
    qEn: "Can I use a cart by myself?", aEn: "Single-rider carts are available. If all carts are in use due to demand that day, a single-rider cart may not be guaranteed, but otherwise it is available as needed.",
  },
  {
    q: "클럽을 빌릴 수 있나요?", a: "남녀 풀세트 대여가 가능합니다.",
    qEn: "Can I rent clubs?", aEn: "Full sets are available to rent for both men and women.",
  },
  {
    q: "우기에도 라운드가 가능한가요?", a: "우기에도 대부분 라운드가 가능합니다. 스콜은 보통 30분 내로 그치며, 전 홀 배수 설계로 비 직후에도 페어웨이 상태가 유지됩니다.",
    qEn: "Can I play during the rainy season?", aEn: "Rounds are possible on most days even in the rainy season. Squalls typically clear within 30 minutes, and drainage design across every hole keeps fairways playable right after rain.",
  },
  {
    q: "공항 픽업은 어떻게 신청하나요?", a: "도착 항공편과 인원을 미리 연락주시면 도착 게이트에서 클럽 차량이 대기합니다. 골프텔 투숙객은 무료입니다.",
    qEn: "How do I arrange airport pickup?", aEn: "Let us know your arrival flight and party size in advance, and a club vehicle will be waiting at the arrival gate. Free for golftel guests.",
  },
];

export const CONTACT_ROWS = [
  {
    label: "ADDRESS", labelEn: "ADDRESS",
    value: "Lolei Village, Bakong Commune, Prasat Bakong, Siem Reap, Cambodia",
    valueEn: "Lolei Village, Bakong Commune, Prasat Bakong, Siem Reap, Cambodia",
  },
  {
    label: "공항에서", labelEn: "FROM THE AIRPORT",
    value: "시엠립 앙코르 국제공항(SAI)에서 37km 차로 약 40분",
    valueEn: "37km, about a 40-minute drive from Siem Reap Angkor International Airport (SAI)",
  },
  {
    label: "시내에서", labelEn: "FROM DOWNTOWN",
    value: "펍 스트리트 기준 15km 차로 약 25분",
    valueEn: "15km, about a 25-minute drive from Pub Street",
  },
  {
    label: "TEL · FAX", labelEn: "TEL · FAX",
    value: "+855 63 967 101 / 114 · FAX +855 63 967 133 · MOBILE +855 12 365 712",
    valueEn: "+855 63 967 101 / 114 · FAX +855 63 967 133 · MOBILE +855 12 365 712",
  },
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

export const GALLERY_IMAGES: string[] = [
  "/images/gallery/gellery01.jpg",
  "/images/gallery/gellery02.jpg",
  "/images/gallery/gellery03.jpg",
  "/images/gallery/gellery05.jpg",
  "/images/gallery/gellery06.jpg",
  "/images/gallery/gellery07.jpg",
  "/images/gallery/gellery08.png",
  "/images/gallery/gellery09.png",
  "/images/gallery/gellery10.png",
  "/images/gallery/gellery11.png",
  "/images/gallery/gellery12.png",
  "/images/gallery/gellery13.png",
  "/images/gallery/gellery14.png",
  "/images/gallery/gellery15.png",
  "/images/gallery/gellery16.png",
  "/images/gallery/gellery17.png",
  "/images/gallery/gellery18.png",
  "/images/gallery/gellery19.png",
  "/images/gallery/gellery2.png",
  "/images/gallery/gellery20.png",
  "/images/gallery/gellery21.png",
  "/images/gallery/gellery22.png",
  "/images/gallery/gellery23.png",
  "/images/gallery/gellery24.png",
  "/images/gallery/gellery31.jpg",
  "/images/gallery/gellery32.jpg",
  "/images/gallery/gellery33.jpg",
  "/images/gallery/gellery34.jpg",
  "/images/gallery/gellery35.png",
  "/images/gallery/gellery41.png",
  "/images/gallery/gellery42.jpg",
  "/images/gallery/gellery43.jpg",
  "/images/gallery/gellery44.jpg",
  "/images/gallery/gellery45.png",
  "/images/gallery/gellery46.png",
  "/images/gallery/gellery51.jpg",
];

export interface NavItem {
  href: string;
  label: string;
  labelEn: string;
  match: (p: string) => boolean;
  children?: { href: string; label: string; labelEn: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "홈", labelEn: "Home", match: (p: string) => p === "/" },
  {
    href: "/course", label: "코스", labelEn: "Course", match: (p: string) => p.startsWith("/course"),
    children: [
      { href: "/course?nine=out", label: "우정코스", labelEn: "Friendship Course" },
      { href: "/course?nine=in", label: "사랑코스", labelEn: "Love Course" },
    ],
  },
  {
    href: "/facilities/golftel", label: "시설안내", labelEn: "Facilities", match: (p: string) => p.startsWith("/facilities"),
    children: [
      { href: "/facilities/golftel", label: "골프텔", labelEn: "Golftel" },
      { href: "/facilities/clubhouse", label: "클럽하우스", labelEn: "Clubhouse" },
      { href: "/facilities/range", label: "골프연습장", labelEn: "Driving Range" },
      { href: "/facilities/gallery", label: "갤러리", labelEn: "Gallery" },
    ],
  },
  {
    href: "/board/notice", label: "게시판", labelEn: "Board", match: (p: string) => p.startsWith("/board"),
    children: [
      { href: "/board/notice", label: "공지사항", labelEn: "Notice" },
      { href: "/board/faq", label: "FAQ", labelEn: "FAQ" },
      { href: "/board/inquiry", label: "문의게시판", labelEn: "Inquiry" },
    ],
  },
  { href: "/access", label: "오시는 길", labelEn: "Access", match: (p: string) => p.startsWith("/access") },
];
