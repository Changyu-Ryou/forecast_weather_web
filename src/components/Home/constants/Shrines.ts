export type ShirneType = {
  location: string;
  name: string;
  fullEnName: string;
  koName: string;
  position: {
    x: number;
    y: number;
  };
};

const SkyShrines = [
  {
    location: 'sky',
    name: 'Kahatanaum Shrine',
    position: {
      x: 500,
      y: 280,
    },
    fullEnName: "Kahatanaum Shrine - Rauru's Blessing",
    koName: '카하타나우메의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Mayaumekis Shrine',
    position: {
      x: 583,
      y: 370,
    },
    fullEnName: 'Mayaumekis Shrine - Downward Force',
    koName: '마야우메키사의 사당 - 도약하는 힘',
  },
  {
    location: 'sky',
    name: 'Ijo-o Shrine',
    position: {
      x: 367,
      y: 458,
    },
    fullEnName: 'Ijo-o Shrine - More than Defense',
    koName: '이죠오의 사당 - 방어 그 이상',
  },
  {
    location: 'sky',
    name: 'Taninoud Shrine',
    position: {
      x: 848,
      y: 286,
    },
    fullEnName: "Taninoud Shrine - Rauru's Blessing",
    koName: '타니노우다의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Tenbez Shrine',
    position: {
      x: 1045,
      y: 257,
    },
    fullEnName: 'Tenbez Shrine - Gravity and Velocity',
    koName: '테음베자이의 사당 - 낙하 속도',
  },
  {
    location: 'sky',
    name: 'Ga-ahisas Shrine',
    position: {
      x: 425,
      y: 842,
    },
    fullEnName: "Ga-ahisas Shrine - Rauru's Blessing",
    koName: '가아히사사의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Taunhiy Shrine',
    position: {
      x: 709,
      y: 895,
    },
    fullEnName: 'Taunhiy Shrine - Combat Training: Archery',
    koName: '타우음히요의 사당 - 전투의 가르침 활의 기술',
  },
  {
    location: 'sky',
    name: 'Ganos Shrine',
    position: {
      x: 482,
      y: 975,
    },
    fullEnName: "Ganos Shrine - Rauru's Blessing",
    koName: '가노사의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Mayasiar Shrine',
    position: {
      x: 441,
      y: 1171,
    },
    fullEnName: "Mayasiar Shrine - Rauru's Blessing",
    koName: '마야시아라의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Jinodok Shrine',
    position: {
      x: 979,
      y: 1444,
    },
    fullEnName: "Jinodok Shrine - Rauru's Blessing",
    koName: '지노도카오의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Siyamotsus Shrine',
    position: {
      x: 856,
      y: 1862,
    },
    fullEnName: 'Siyamotsus Shrine - Unlit Blessing',
    koName: '시야모츠시의 사당 - 꺼진 등불',
  },
  {
    location: 'sky',
    name: 'Rakashog Shrine',
    position: {
      x: 875,
      y: 1579,
    },
    fullEnName: 'Rakashog Shrine - A Reflective Device',
    koName: '라카쇼고의 사당 - 반사하는 것',
  },
  {
    location: 'sky',
    name: 'In-isa Shrine',
    position: {
      x: 1281,
      y: 1442,
    },
    fullEnName: 'In-isa Shrine - The Ability to Combine',
    koName: '이음이사의 사당 - 조합하는 힘',
  },
  {
    location: 'sky',
    name: 'Nachoyah Shrine',
    position: {
      x: 1368,
      y: 1482,
    },
    fullEnName: 'Nachoyah Shrine - The Ability to Rewind',
    koName: '나쵸야하의 사당 - 되돌리는 힘',
  },
  {
    location: 'sky',
    name: 'Ukouh Shrine',
    position: {
      x: 1338,
      y: 1301,
    },
    fullEnName: 'Ukouh Shrine - The Ability to Create',
    koName: '우코우호의 사당 - 창조하는 힘',
  },
  {
    location: 'sky',
    name: 'Gutanbac Shrine',
    position: {
      x: 1440,
      y: 1414,
    },
    fullEnName: 'Gutanbac Shrine - The Ability to Rise',
    koName: '구타음바치의 사당 - 올라가는 힘',
  },
  {
    location: 'sky',
    name: 'Mayam Shrine',
    position: {
      x: 1353,
      y: 425,
    },
    fullEnName: "Mayam Shrine - Rauru's Blessing",
    koName: '마야미이의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Simosiwak Shrine',
    position: {
      x: 1308,
      y: 626,
    },
    fullEnName: 'Simosiwak Shrine - Proving Grounds: Lights Out',
    koName: '시모시와카의 사당 - 맨몸 전투 어둠',
  },
  {
    location: 'sky',
    name: 'Joku-usin Shrine',
    position: {
      x: 1537,
      y: 1877,
    },
    fullEnName: 'Joku-usin Shrine - Proving Grounds: Short Circuit',
    koName: '죠쿠우시니의 사당 - 맨몸 전투 통전',
  },
  {
    location: 'sky',
    name: 'Joku-u Shrine',
    position: {
      x: 1614,
      y: 1861,
    },
    fullEnName: "Joku-u Shrine - Rauru's Blessing",
    koName: '죠쿠우의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Kumamayn Shrine',
    position: {
      x: 1944,
      y: 1758,
    },
    fullEnName: "Kumamayn Shrine - Rauru's Blessing",
    koName: '쿠마마이노의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Ukoojisi Shrine',
    position: {
      x: 1622,
      y: 1594,
    },
    fullEnName: "Ukoojisi Shrine - Rauru's Blessing",
    koName: '우코오지시의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Yansamin Shrine',
    position: {
      x: 1824,
      y: 1500,
    },
    fullEnName: 'Yansamin Shrine - Proving Grounds: Low Gravity',
    koName: '야음사미노의 사당 - 맨몸 전투 중력',
  },
  {
    location: 'sky',
    name: 'Josiu Shrine',
    position: {
      x: 1685,
      y: 1378,
    },
    fullEnName: "Josiu Shrine - Rauru's Blessing",
    koName: '죠시우의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Kadaunar Shrine',
    position: {
      x: 1714,
      y: 806,
    },
    fullEnName: 'Kadaunar Shrine - Water Makes a Way',
    koName: '카다우나리의 사당 - 물이 가리키는 길',
  },
  {
    location: 'sky',
    name: 'Jirutagumac Shrine',
    position: {
      x: 1957,
      y: 967,
    },
    fullEnName: 'Jirutagumac Shrine - A Flying Device',
    koName: '지루타구마치의 사당 - 하늘을 나는 것',
  },
  {
    location: 'sky',
    name: 'Igoshon Shrine',
    position: {
      x: 2084,
      y: 918,
    },
    fullEnName: 'Igoshon Shrine - Orbs of Water',
    koName: '이고쇼음의 사당 - 부유하는 물',
  },
  {
    location: 'sky',
    name: 'Sihajog Shrine',
    position: {
      x: 2345,
      y: 1287,
    },
    fullEnName: "Sihajog Shrine - Rauru's Blessing",
    koName: '시하죠고우의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Mayanas Shrine',
    position: {
      x: 2372,
      y: 1328,
    },
    fullEnName: 'Mayanas Shrine - The Ice Guides You',
    koName: '마야나시의 사당 - 얼음의 인도',
  },
  {
    location: 'sky',
    name: 'Natak Shrine',
    position: {
      x: 2137,
      y: 740,
    },
    fullEnName: "Natak Shrine - Rauru's Blessing",
    koName: '나타카카의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Gikaku Shrine',
    position: {
      x: 2332,
      y: 594,
    },
    fullEnName: "Gikaku Shrine - Rauru's Blessing",
    koName: '기카쿠음의 사당 - 라울의 축복',
  },
  {
    location: 'sky',
    name: 'Mogisari Shrine',
    position: {
      x: 2368,
      y: 265,
    },
    fullEnName: 'Mogisari Shrine - Courage to Jump',
    koName: '모기사리의 사당 - 뛰어오를 용기',
  },
];

const Shrines = [
  {
    location: 'surface',
    name: 'Otak Shrine',
    position: {
      x: 253,
      y: 213,
    },
    fullEnName: 'Otak Shrine - Proving Grounds: Traps',
    koName: '오타카카의 사당 - 맨몸 전투 계략',
  },
  {
    location: 'surface',
    name: 'Tauyosipun Shrine',
    position: {
      x: 222,
      y: 408,
    },
    fullEnName: 'Tauyosipun Shrine - Forward or Backward?',
    koName: '타우요시푸니의 사당 - 전진하거나 후퇴하거나',
  },
  {
    location: 'surface',
    name: 'Eutoum Shrine',
    position: {
      x: 465,
      y: 241,
    },
    fullEnName: 'Eutoum Shrine - Proving Grounds: Infiltration',
    koName: '에우토우메의 사당 - 맨몸 전투 잠입',
  },
  {
    location: 'surface',
    name: 'Rutafu-um Shrine',
    position: {
      x: 581,
      y: 359,
    },
    fullEnName: "Rutafu-um Shrine - Rauru's Blessing",
    koName: '루타후우메의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sahirow Shrine',
    position: {
      x: 495,
      y: 520,
    },
    fullEnName: 'Sahirow Shrine - Aid from Above',
    koName: '사히로와의 사당 - 구원은 하늘에 있다',
  },
  {
    location: 'surface',
    name: 'Wao-os Shrine',
    position: {
      x: 340,
      y: 620,
    },
    fullEnName: 'Wao-os Shrine - Lever Power',
    koName: '와오오사의 사당 - 지렛대의 힘',
  },
  {
    location: 'surface',
    name: 'Gatakis Shrine',
    position: {
      x: 427,
      y: 660,
    },
    fullEnName: 'Gatakis Shrine - Ride the Winds',
    koName: '가타키사의 사당 - 바람을 타고',
  },
  {
    location: 'surface',
    name: 'Ikatak Shrine',
    position: {
      x: 358,
      y: 810,
    },
    fullEnName: "Ikatak Shrine - Rauru's Blessing",
    koName: '이카타쿠의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Iun-orok Shrin',
    position: {
      x: 457,
      y: 884,
    },
    fullEnName: 'Iun-orok Shrine - The Right Roll',
    koName: '이우음오로쿠의 사당 - 큰 것과 작은 것의 선택',
  },
  {
    location: 'surface',
    name: 'Gasas Shrine',
    position: {
      x: 310,
      y: 1066,
    },
    fullEnName: 'Gasas Shrine - Well-Timed Cuts',
    koName: '가사사의 사당 - 절단 타이밍',
  },
  {
    location: 'surface',
    name: 'Otutsum Shrine',
    position: {
      x: 235,
      y: 1234,
    },
    fullEnName: "Otutsum Shrine - Rauru's Blessing",
    koName: '오츠츠마의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Mayamats Shrine',
    position: {
      x: 198,
      y: 1436,
    },
    fullEnName: 'Mayamats Shrine - A Route for a Ball',
    koName: '마야마츠노의 사당 - 구슬이 지나가는 길',
  },
  {
    location: 'surface',
    name: 'Kudanisar Shrine',
    position: {
      x: 308,
      y: 1586,
    },
    fullEnName: 'Kudanisar Shrine - Bridging the Sands',
    koName: '쿠다니사라의 사당 - 모래 위의 다리',
  },
  {
    location: 'surface',
    name: 'Soryotanog Shrine',
    position: {
      x: 376,
      y: 1777,
    },
    fullEnName: 'Soryotanog Shrine - Buried Light',
    koName: '소료타니고의 사당 - 묻혀 있는 빛',
  },
  {
    location: 'surface',
    name: 'Miryotanog Shrine',
    position: {
      x: 186,
      y: 1807,
    },
    fullEnName: 'Miryotanog Shrine - Proving Grounds: Lure',
    koName: '미료타니고의 사당 - 맨몸 전투 회피',
  },
  {
    location: 'surface',
    name: 'Karahatag Shrine',
    position: {
      x: 410,
      y: 1934,
    },
    fullEnName: 'Karahatag Shrine - Drifting Flame',
    koName: '카라하타기의 사당 - 떠도는 화염',
  },
  {
    location: 'surface',
    name: 'Irasak Shrine',
    position: {
      x: 308,
      y: 1982,
    },
    fullEnName: "Irasak Shrine - Rauru's Blessing",
    koName: '이라사쿠의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Mayatat Shrine',
    position: {
      x: 513,
      y: 1670,
    },
    fullEnName: 'Mayatat Shrine - A Sliding Device',
    koName: '마야타타의 사당 - 미끄러지는 것',
  },
  {
    location: 'surface',
    name: 'Chichim Shrine',
    position: {
      x: 546,
      y: 1792,
    },
    fullEnName: "Chichim Shrine - Rauru's Blessing",
    koName: '치치마우의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Siwakama Shrine',
    position: {
      x: 711,
      y: 1869,
    },
    fullEnName: 'Siwakama Shrine - Moving the Spheres',
    koName: '시와카마의 사당 - 3개의 공',
  },
  {
    location: 'surface',
    name: 'Motsusis Shrine',
    position: {
      x: 865,
      y: 1912,
    },
    fullEnName: "Motsusis Shrine - Rauru's Blessing",
    koName: '모츠시시의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Kitawak Shrine',
    position: {
      x: 923,
      y: 1773,
    },
    fullEnName: 'Kitawak Shrine - Upward and Forward',
    koName: '키타와카의 사당 - 앞으로 이어지는 길',
  },
  {
    location: 'surface',
    name: 'Ishokin Shrine',
    position: {
      x: 1162,
      y: 1926,
    },
    fullEnName: "Ishokin Shrine - Rauru's Blessing",
    koName: '이쇼키음의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Utsushok Shrine',
    position: {
      x: 1447,
      y: 1872,
    },
    fullEnName: 'Utsushok Shrine - Long or Wide',
    koName: '우츠쇼키의 사당 - 세로로 가로로',
  },
  {
    location: 'surface',
    name: 'Joju-u-u Shrine',
    position: {
      x: 1641,
      y: 1924,
    },
    fullEnName: 'Joju-u-u Shrine - Building Bridges',
    koName: '죠쥬우우의 사당 - 연결된 다리',
  },
  {
    location: 'surface',
    name: 'Oromuwak Shrine',
    position: {
      x: 561,
      y: 712,
    },
    fullEnName: 'Oromuwak Shrine - A Launching Device',
    koName: '오로무와카의 사당 - 쏘아 올리는 것',
  },
  {
    location: 'surface',
    name: 'Nouda Shrine',
    position: {
      x: 752,
      y: 570,
    },
    fullEnName: 'Nouda Shrine - Proving Grounds: Intermediate',
    koName: '노우다의 사당 - 맨몸 전투 중급',
  },
  {
    location: 'surface',
    name: 'Sisuran Shrine',
    position: {
      x: 687,
      y: 295,
    },
    fullEnName: "Sisuran Shrine - Rauru's Blessing",
    koName: '시스라나의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Orochium Shrine',
    position: {
      x: 902,
      y: 463,
    },
    fullEnName: 'Orochium Shrine - Courage to Fall',
    koName: '오로치우무의 사당 - 떨어질 용기',
  },
  {
    location: 'surface',
    name: 'Oshozan-u Shrine',
    position: {
      x: 959,
      y: 219,
    },
    fullEnName: 'Oshozan-u Shrine - Mallet Smash',
    koName: '오쇼자음우의 사당 - 나무 망치로 때려라',
  },
  {
    location: 'surface',
    name: 'Mayaotaki Shrine',
    position: {
      x: 1087,
      y: 253,
    },
    fullEnName: "Mayaotaki Shrine - Rauru's Blessing",
    koName: '마야오타키의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Mayausiy Shrine',
    position: {
      x: 1035,
      y: 460,
    },
    fullEnName: 'Mayausiy Shrine - Building Blocks',
    koName: '마야우시유의 사당 - 조합',
  },
  {
    location: 'surface',
    name: 'Kikakin Shrine',
    position: {
      x: 1193,
      y: 443,
    },
    fullEnName: 'Kikakin Shrine - Shining in Darkness',
    koName: '키카쿠음의 사당 - 어둠을 밝히는 것',
  },
  {
    location: 'surface',
    name: 'Minetak Shrine',
    position: {
      x: 1373,
      y: 260,
    },
    fullEnName: "Minetak Shrine - Rauru's Blessing",
    koName: '미네타카카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sikukuu Shrine',
    position: {
      x: 1450,
      y: 428,
    },
    fullEnName: 'Sikukuu Shrine - Spinning Gears',
    koName: '시쿠쿠치의 사당 - 오른쪽이냐 왼쪽이냐',
  },
  {
    location: 'surface',
    name: 'Sakunbomar Shrine',
    position: {
      x: 1332,
      y: 537,
    },
    fullEnName: "Sakunbomar Shrine - Rauru's Blessing",
    koName: '세쿠음보마라의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Pupunke Shrine',
    position: {
      x: 1430,
      y: 563,
    },
    fullEnName: "Pupunke Shrine - Rauru's Blessing",
    koName: '푸푸음케의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Musanokir Shrine',
    position: {
      x: 1386,
      y: 582,
    },
    fullEnName: 'Musanokir Shrine - Swing to Hit',
    koName: '무사노키라의 사당 - 흔들흔들',
  },
  {
    location: 'surface',
    name: 'Ninjis Shrine',
    position: {
      x: 1377,
      y: 653,
    },
    fullEnName: "Ninjis Shrine - Rauru's Blessing",
    koName: '니음지시의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Turakawak Shrine',
    position: {
      x: 477,
      y: 1137,
    },
    fullEnName: 'Turakawak Shrine - Stacking a Path',
    koName: '츠라카와카의 사당 - 겹쳐진 통로',
  },
  {
    location: 'surface',
    name: 'Rotsumamu Shrine',
    position: {
      x: 489,
      y: 1405,
    },
    fullEnName: 'Rotsumamu Shrine - A Balanced Plan',
    koName: '로츠마무의 사당 - 불균형한 관계',
  },
  {
    location: 'surface',
    name: 'Suariwak Shrine',
    position: {
      x: 689,
      y: 1494,
    },
    fullEnName: "Suariwak Shrine - Rauru's Blessing",
    koName: '스아리와카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Rakakudaj Shrine',
    position: {
      x: 807,
      y: 1519,
    },
    fullEnName: "Rakakudaj Shrine - Rauru's Blessing",
    koName: '라카쿠구지토의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Turakamik Shrine',
    position: {
      x: 664,
      y: 1608,
    },
    fullEnName: 'Turakamik Shrine - Hidden Metal',
    koName: '츠라카미카의 사당 - 숨겨져 있는 철',
  },
  {
    location: 'surface',
    name: 'Sonapan Shrine',
    position: {
      x: 835,
      y: 1168,
    },
    fullEnName: 'Sonapan Shrine - Missing Pathways',
    koName: '소나파노의 사당 - 부서진 통로',
  },
  {
    location: 'surface',
    name: 'Usazum Shrine',
    position: {
      x: 787,
      y: 1286,
    },
    fullEnName: "Usazum Shrine - Rauru's Blessing",
    koName: '우사즈마의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Tadarok Shrine',
    position: {
      x: 1030,
      y: 1599,
    },
    fullEnName: 'Tadarok Shrine - Fire and Water',
    koName: '타다로쿠음의 사당 - 불과 물',
  },
  {
    location: 'surface',
    name: 'Riogok Shrine',
    position: {
      x: 949,
      y: 1462,
    },
    fullEnName: 'Riogok Shrine - Force Transfer',
    koName: '리오고코의 사당 - 힘의 전달',
  },
  {
    location: 'surface',
    name: 'Tsutsu-um Shrine',
    position: {
      x: 952,
      y: 1401,
    },
    fullEnName: 'Tsutsu-um Shrine - The Stakes Guide You',
    koName: '츠츠우메의 사당 - 말뚝의 인도',
  },
  {
    location: 'surface',
    name: 'Makurukis Shrine',
    position: {
      x: 618,
      y: 933,
    },
    fullEnName: 'Makurukis Shrine - Combat Training: Archery',
    koName: '마쿠루키사의 사당 - 전투의 가르침 활의 기술 2',
  },
  {
    location: 'surface',
    name: 'Taki-ihaban Shrine',
    position: {
      x: 859,
      y: 805,
    },
    fullEnName: "Taki-ihaban Shrine - Rauru's Blessing",
    koName: '타키이하바노의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sinakawak Shrine',
    position: {
      x: 953,
      y: 901,
    },
    fullEnName: 'Sinakawak Shrine - An Uplifting Device',
    koName: '시나카와카의 사당 - 부유하는 것',
  },
  {
    location: 'surface',
    name: 'Runakit Shrine',
    position: {
      x: 693,
      y: 815,
    },
    fullEnName: 'Runakit Shrine - Built to Carry',
    koName: '루나키타의 사당 - 옮기는 형태',
  },
  {
    location: 'surface',
    name: 'Tenmaten Shrine',
    position: {
      x: 1127,
      y: 735,
    },
    fullEnName: "Tenmaten Shrine - Rauru's Blessing",
    koName: '테음마테음의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Kiuyoyou Shrine',
    position: {
      x: 1026,
      y: 593,
    },
    fullEnName: 'Kiuyoyou Shrine - Fire and Ice',
    koName: '키우요요우의 사당 - 화염을 막는 것',
  },
  {
    location: 'surface',
    name: 'Kyokugon Shrine',
    position: {
      x: 1120,
      y: 1446,
    },
    fullEnName: 'Kyokugon Shrine - Alignment of the Circles',
    koName: '쿄쿠고니의 사당 - 천지의 원',
  },
  {
    location: 'surface',
    name: 'Kamizun Shrine',
    position: {
      x: 1244,
      y: 1453,
    },
    fullEnName: 'Kamizun Shrine - Proving Grounds: Beginner',
    koName: '카미즈나의 사당 - 맨몸 전투 초급',
  },
  {
    location: 'surface',
    name: 'Teniten Shrine',
    position: {
      x: 1272,
      y: 1346,
    },
    fullEnName: 'Teniten Shrine - Combat Training: Throwing',
    koName: '테음지테음의 사당 - 전투의 가르침 무기 던지기 기술',
  },
  {
    location: 'surface',
    name: 'Mayachin Shrine',
    position: {
      x: 1121,
      y: 1285,
    },
    fullEnName: 'Mayachin Shrine - A Fixed Device',
    koName: '마야치노우의 사당 - 고정하는 것',
  },
  {
    location: 'surface',
    name: 'Susuyai Shrine',
    position: {
      x: 1101,
      y: 1184,
    },
    fullEnName: 'Susuyai Shrine - A Spinning Device',
    koName: '스스야이의 사당 - 달리는 것',
  },
  {
    location: 'surface',
    name: 'Ishodag Shrine',
    position: {
      x: 1081,
      y: 983,
    },
    fullEnName: 'Ishodag Shrine - A Windy Device',
    koName: '이쇼다구음의 사당 - 바람을 만드는 것',
  },
  {
    location: 'surface',
    name: 'Kyononis Shrine',
    position: {
      x: 1241,
      y: 975,
    },
    fullEnName: 'Kyononis Shrine - Combat Training',
    koName: '쿄노니시우의 사당 - 전투의 가르침',
  },
  {
    location: 'surface',
    name: 'Tajikats Shrine',
    position: {
      x: 1368,
      y: 1318,
    },
    fullEnName: 'Tajikats Shrine - Building with Logs',
    koName: '타지카츠의 사당 - 균형 잡힌 형태',
  },
  {
    location: 'surface',
    name: 'Jiosin Shrine',
    position: {
      x: 1233,
      y: 1164,
    },
    fullEnName: 'Jiosin Shrine - Shape Rotation',
    koName: '지오시니오의 사당 - 지혜의 고리',
  },
  {
    location: 'surface',
    name: 'Serutabomac Shrine',
    position: {
      x: 1242,
      y: 807,
    },
    fullEnName: 'Serutabomac Shrine - The Way Up',
    koName: '세루타보마치의 사당 - 지탱하는 형태',
  },
  {
    location: 'surface',
    name: 'Yamiyo Shrine',
    position: {
      x: 1368,
      y: 973,
    },
    fullEnName: 'Yamiyo Shrine - Combat Training: Throwing',
    koName: '오야미오의 사당 - 전투의 가르침 소재 던지기 기술',
  },
  {
    location: 'surface',
    name: 'En-oma Shrine',
    position: {
      x: 1304,
      y: 1674,
    },
    fullEnName: "En-oma Shrine - Rauru's Blessing",
    koName: '엔오마의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Jochisiu Shrine',
    position: {
      x: 1501,
      y: 1526,
    },
    fullEnName: "Jochisiu Shrine - Rauru's Blessing",
    koName: '죠치시우의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Susub Shrine',
    position: {
      x: 1366,
      y: 1561,
    },
    fullEnName: "Susub Shrine - Rauru's Blessing",
    koName: '스스비에의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Jiukoum Shrine',
    position: {
      x: 1489,
      y: 1616,
    },
    fullEnName: 'Jiukoum Shrine - Built for Rails',
    koName: '지우코우메의 사당 - 딱 맞는 형태',
  },
  {
    location: 'surface',
    name: 'Utojis Shrine',
    position: {
      x: 1575,
      y: 1680,
    },
    fullEnName: "Utojis Shrine - Rauru's Blessing",
    koName: '우토지시의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Eshos Shrine',
    position: {
      x: 1652,
      y: 1542,
    },
    fullEnName: 'Eshos Shrine - Combat Training: Shields',
    koName: '에쇼세의 사당 - 전투의 가르침 방패의 기술',
  },
  {
    location: 'surface',
    name: 'Tokiy Shrine',
    position: {
      x: 1826,
      y: 1641,
    },
    fullEnName: "Tokiy Shrine - Rauru's Blessing",
    koName: '토키요우의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sifumim Shrine',
    position: {
      x: 1948,
      y: 1850,
    },
    fullEnName: 'Sifumim Shrine - Proving Grounds: Flow',
    koName: '시후미미의 사당 - 맨몸 전투 수류',
  },
  {
    location: 'surface',
    name: 'Bamitok Shrine',
    position: {
      x: 2013,
      y: 1838,
    },
    fullEnName: "Bamitok Shrine - Rauru's Blessing",
    koName: '바미토카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sepapa Shrine',
    position: {
      x: 1346,
      y: 816,
    },
    fullEnName: 'Sepapa Shrine - Backtrack',
    koName: '세파파의 사당 - 돌아오는 길',
  },
  {
    location: 'surface',
    name: 'Ren-iz Shrine',
    position: {
      x: 1463,
      y: 900,
    },
    fullEnName: 'Ren-iz Shrine - Jump the Gaps',
    koName: '레음이제의 사당 - 튀어 오르는 형태',
  },
  {
    location: 'surface',
    name: 'Jojon Shrine',
    position: {
      x: 1570,
      y: 1004,
    },
    fullEnName: 'Jojon Shrine - Proving Grounds: Rotation',
    koName: '죠죠니우의 사당 - 맨몸 전투 회전',
  },
  {
    location: 'surface',
    name: 'Tukarok Shrine',
    position: {
      x: 1502,
      y: 1141,
    },
    fullEnName: 'Tukarok Shrine - Forward Force',
    koName: '츠카로쿠의 사당 - 전진하는 힘',
  },
  {
    location: 'surface',
    name: 'Morok Shrine',
    position: {
      x: 1564,
      y: 1271,
    },
    fullEnName: 'Morok Shrine - A Bouncy Device',
    koName: '모로음쿠의 사당 - 튕겨 내는 것',
  },
  {
    location: 'surface',
    name: 'Makasura Shrine',
    position: {
      x: 1706,
      y: 1330,
    },
    fullEnName: 'Makasura Shrine - An Upright Device',
    koName: '마카스라의 사당 - 일어서는 것',
  },
  {
    location: 'surface',
    name: 'Kurakat Shrine',
    position: {
      x: 1841,
      y: 1203,
    },
    fullEnName: "Kurakat Shrine - Rauru's Blessing",
    koName: '쿠라카타의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'O-ogim Shrine',
    position: {
      x: 1934,
      y: 1340,
    },
    fullEnName: "O-ogim Shrine - Rauru's Blessing",
    koName: '오오기음의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Jogou Shrine',
    position: {
      x: 2076,
      y: 1361,
    },
    fullEnName: "Jogou Shrine - Rauru's Blessing",
    koName: '죠고우의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Zakusu Shrine',
    position: {
      x: 2114,
      y: 1432,
    },
    fullEnName: 'Zakusu Shrine - Proving Grounds: Ascension',
    koName: '자쿠스쿠의 사당 - 맨몸 전투 상승',
  },
  {
    location: 'surface',
    name: 'Mayahisik Shrine',
    position: {
      x: 2162,
      y: 1566,
    },
    fullEnName: "Mayahisik Shrine - Rauru's Blessing",
    koName: '마야히시카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Zanmik Shrine',
    position: {
      x: 2103,
      y: 1591,
    },
    fullEnName: 'Zanmik Shrine - Scoop It Out',
    koName: '자음미카카의 사당 - 건져 올리는 형태',
  },
  {
    location: 'surface',
    name: 'Anedamimik Shrine',
    position: {
      x: 2281,
      y: 1591,
    },
    fullEnName: 'Anedamimik Shrine - A Retraced Path',
    koName: '아네다미미카의 사당 - 왕복 운동',
  },
  {
    location: 'surface',
    name: 'Jikais Shrine',
    position: {
      x: 2288,
      y: 1476,
    },
    fullEnName: 'Jikais Shrine - Jailbreak',
    koName: '지카이세음의 사당 - 감옥의 샛길',
  },
  {
    location: 'surface',
    name: 'Jonsau Shrine',
    position: {
      x: 1698,
      y: 1080,
    },
    fullEnName: 'Jonsau Shrine - Deep Force',
    koName: '죠음사우의 사당 - 깊고 강하게',
  },
  {
    location: 'surface',
    name: 'Yomizuk Shrine',
    position: {
      x: 2324,
      y: 1232,
    },
    fullEnName: "Yomizuk Shrine - Rauru's Blessing",
    koName: '요미즈키의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Apogek Shrine',
    position: {
      x: 2199,
      y: 1129,
    },
    fullEnName: 'Apogek Shrine - Wings on the Wind',
    koName: '아포게케의 사당 - 바람의 날개',
  },
  {
    location: 'surface',
    name: 'Mogawak Shrine',
    position: {
      x: 2063,
      y: 985,
    },
    fullEnName: 'Mogawak Shrine - The Power of Water',
    koName: '모가와카의 사당 - 수력 발전',
  },
  {
    location: 'surface',
    name: 'Ihen-a Shrine',
    position: {
      x: 2176,
      y: 948,
    },
    fullEnName: 'Ihen-a Shrine - Midair Perch',
    koName: '이헤음아의 사당 - 하늘에 머무는 것',
  },
  {
    location: 'surface',
    name: 'Joniu Shrine',
    position: {
      x: 1971,
      y: 965,
    },
    fullEnName: "Joniu Shrine - Rauru's Blessing",
    koName: '죠니우의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Maoikes Shrine',
    position: {
      x: 1824,
      y: 1047,
    },
    fullEnName: "Maoikes Shrine - Rauru's Blessing",
    koName: '마오이케스카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Ekochiu Shrine',
    position: {
      x: 1531,
      y: 788,
    },
    fullEnName: 'Ekochiu Shrine - Rise and Fall',
    koName: '에코치우의 사당 - 낙하와 상승',
  },
  {
    location: 'surface',
    name: 'Timawak Shrine',
    position: {
      x: 1707,
      y: 695,
    },
    fullEnName: 'Timawak Shrine - Against the Flow',
    koName: '티마와카의 사당 - 흐름을 거슬러서',
  },
  {
    location: 'surface',
    name: 'Marakuguc Shrine',
    position: {
      x: 1699,
      y: 495,
    },
    fullEnName: 'Marakuguc Shrine - Wheeled Wonders',
    koName: '마라쿠구치의 사당 - 주파하는 것',
  },
  {
    location: 'surface',
    name: 'Isisim Shrine',
    position: {
      x: 1716,
      y: 415,
    },
    fullEnName: 'Isisim Shrine - Proving Grounds: In Reverse',
    koName: '이시시메의 사당 - 맨몸 전투 역재생',
  },
  {
    location: 'surface',
    name: 'Jiotak Shrine',
    position: {
      x: 1717,
      y: 328,
    },
    fullEnName: "Jiotak Shrine - Rauru's Blessing",
    koName: '지오타키오의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Mayak Shrine',
    position: {
      x: 1585,
      y: 204,
    },
    fullEnName: 'Mayak Shrine - Timely Catches',
    koName: '마야코코의 사당 - 떨어지는 찰나',
  },
  {
    location: 'surface',
    name: 'Kisinona Shrine',
    position: {
      x: 1891,
      y: 787,
    },
    fullEnName: 'Kisinona Shrine - Wind Power',
    koName: '키시노나의 사당 - 바람의 힘',
  },
  {
    location: 'surface',
    name: 'Domizuin Shrine',
    position: {
      x: 2058,
      y: 742,
    },
    fullEnName: 'Domizuin Shrine - A Prone Pathway',
    koName: '도미즈이노의 사당 - 누워 있는 길',
  },
  {
    location: 'surface',
    name: 'Jochi-ihiga Shrine',
    position: {
      x: 2180,
      y: 797,
    },
    fullEnName: "Jochi-ihiga Shrine - Rauru's Blessing",
    koName: '죠치이히가의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Rasitakiwak Shrine',
    position: {
      x: 2264,
      y: 774,
    },
    fullEnName: 'Rasitakiwak Shrine - Proving Grounds: Vehicles',
    koName: '라시타키와카의 사당 - 맨몸 전투 조종',
  },
  {
    location: 'surface',
    name: 'Gatanisis Shrine',
    position: {
      x: 2334,
      y: 900,
    },
    fullEnName: 'Gatanisis Shrine - A Well-Timed Bounce',
    koName: '가타니시시의 사당 - 누르고 되돌려서',
  },
  {
    location: 'surface',
    name: 'Moshapin Shrine',
    position: {
      x: 1915,
      y: 634,
    },
    fullEnName: "Moshapin Shrine - Rauru's Blessing",
    koName: '모샤피음의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Mayachideg Shrine',
    position: {
      x: 2004,
      y: 654,
    },
    fullEnName: 'Mayachideg Shrine - Proving Grounds: The Hunt',
    koName: '마야치데기나의 사당 - 맨몸 전투 추적',
  },
  {
    location: 'surface',
    name: 'Gemimik Shrine',
    position: {
      x: 2344,
      y: 584,
    },
    fullEnName: 'Gemimik Shrine - Turbine Power',
    koName: '게미미카의 사당 - 회전하는 힘',
  },
  {
    location: 'surface',
    name: 'Sinatanika Shrine',
    position: {
      x: 2185,
      y: 541,
    },
    fullEnName: 'Sinatanika Shrine - Combat Training: Sneakstrike',
    koName: '시나타니카카의 사당 - 전투의 가르침 습격의 기술',
  },
  {
    location: 'surface',
    name: 'Jochi-iu Shrine',
    position: {
      x: 2307,
      y: 406,
    },
    fullEnName: 'Jochi-iu Shrine - Courage to Pluck',
    koName: '죠치이우의 사당 - 빼낼 배짱',
  },
  {
    location: 'surface',
    name: 'Rasiwak Shrine',
    position: {
      x: 2379,
      y: 316,
    },
    fullEnName: 'Rasiwak Shrine - Flotational Brilliance',
    koName: '라시와카의 사당 - 떠오르는 힘',
  },
  {
    location: 'surface',
    name: 'Igashuk Shrine',
    position: {
      x: 2379,
      y: 210,
    },
    fullEnName: "Igashuk Shrine - Rauru's Blessing",
    koName: '이가슈쿠의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Kamatukis Shrine',
    position: {
      x: 2084,
      y: 295,
    },
    fullEnName: 'Kamatukis Shrine - A Precise Strike',
    koName: '카마츠키사의 사당 - 혼을 담은 스윙',
  },
  {
    location: 'surface',
    name: 'Momosik Shrine',
    position: {
      x: 1983,
      y: 433,
    },
    fullEnName: "Momosik Shrine - Rauru's Blessing",
    koName: '모모시카의 사당 - 라울의 축복',
  },
  {
    location: 'surface',
    name: 'Sitsum Shrine',
    position: {
      x: 1841,
      y: 472,
    },
    fullEnName: 'Sitsum Shrine - A Controlling Device',
    koName: '시츠모이의 사당 - 조종하는 것',
  },
  {
    location: 'surface',
    name: 'Kimayat Shrine',
    position: {
      x: 1958,
      y: 232,
    },
    fullEnName: 'Kimayat Shrine - Proving Grounds: Smash',
    koName: '키마야타의 사당 - 맨몸 전투 분쇄',
  },
  {
    location: 'surface',
    name: 'Sibajitak Shrine',
    position: {
      x: 1850,
      y: 312,
    },
    fullEnName: 'Sibajitak Shrine - Alignment',
    koName: '시바지타키오의 사당 - 길을 잇는 열쇠',
  },
  {
    location: 'surface',
    name: 'Marari-in Shrine',
    position: {
      x: 2372,
      y: 1948,
    },
    fullEnName: "Marari-in Shrine - Rauru's Blessing",
    koName: '마야리이나의 사당 - 라울의 축복',
  },

  ...SkyShrines,
];

export default Shrines;
