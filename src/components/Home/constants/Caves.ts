export type CaveType = {
  location: string;
  name: string;
  fullEnName?: string;
  koName?: string;
  position: {
    x: number;
    y: number;
  };
};

export const SkyCaves: CaveType[] = [
  {
    location: 'sky',
    name: 'Pondside Cave',
    position: { x: 1325, y: 1463 },
  },
  {
    location: 'sky',
    name: 'Mining Cave',
    position: { x: 1381, y: 1479 },
  },
  {
    location: 'sky',
    name: 'Pit Cave',
    position: { x: 1417, y: 1471 },
  },
  {
    location: 'sky',
    name: 'Bottomless Cave',
    position: { x: 1448, y: 1416 },
  },
];

export const Caves: CaveType[] = [
  ...SkyCaves,
  {
    location: 'surface',
    name: 'Ulria Grotto South Cave',
    koName: '울라 협곡 남쪽 동굴',
    position: {
      x: 2252.6167247391563,
      y: 929.1440677966101,
    },
  },
  {
    location: 'surface',
    name: 'Ulria Grotto East Cave',
    koName: '울라 협곡 동쪽 동굴',
    position: {
      x: 2342.8466898959723,
      y: 919.1214689265536,
    },
  },
  {
    location: 'surface',
    name: 'Ulria Grotto East Cave',
    koName: '울라 협곡 동쪽 동굴',
    position: {
      x: 2290.2125435544967,
      y: 901.5819209039547,
    },
  },
  {
    location: 'surface',
    name: 'Tarrey Town Tunnel',
    koName: '시자기 마을 터널',
    position: {
      x: 2207.501742160748,
      y: 713.6581920903955,
    },
  },
  {
    location: 'surface',
    name: 'Construction Site Cave',
    position: {
      x: 2149.8548199772267,
      y: 723.680790960452,
    },
  },
  {
    location: 'surface',
    name: 'Construction Site Cave',
    position: {
      x: 2162.3867595823403,
      y: 723.680790960452,
    },
  },
  {
    location: 'surface',
    name: 'Akkala Citadel Ruins Cave',
    koName: '추낙 요새 옛터 동굴',
    position: {
      x: 2047.0929152152976,
      y: 741.2203389830509,
    },
  },
  {
    location: 'surface',
    name: 'Skull Lake Cave',
    koName: '해골 연못 동굴',
    position: {
      x: 2064.637630662456,
      y: 280.180790960452,
    },
  },
  {
    location: 'surface',
    name: 'North Akkala Beach Cave',
    koName: '북추낙 해변 동굴',
    position: {
      x: 2377.93612079029,
      y: 242.59604519774012,
    },
  },
  {
    location: 'surface',
    name: 'North Akkala Beach Cave',
    koName: '북추낙 해안 동굴',
    position: {
      x: 2377.93612079029,
      y: 330.29378531073445,
    },
  },
  {
    location: 'surface',
    name: 'Akkala Citadel Ruins Summit Cave',
    koName: '추낙 요새 옛터 정상 동굴',
    position: {
      x: 2059.624854820411,
      y: 733.7033898305084,
    },
  },
  {
    location: 'surface',
    name: 'Ranch Ruins Cave',
    koName: '평원의 목장 옛터 동굴',
    position: {
      x: 1292.670150987475,
      y: 1132.101694915254,
    },
  },
  {
    location: 'surface',
    name: 'Ranch Ruins Cave',
    koName: '평원의 목장 옛터 동굴',
    position: {
      x: 1287.6573751454296,
      y: 1122.0790960451977,
    },
  },
  {
    location: 'surface',
    name: 'Great Plateau Foothill Cave',
    position: {
      x: 1089.6527293846389,
      y: 1435.285310734463,
    },
  },
  {
    location: 'surface',
    name: 'Royal Hidden Passage',
    position: {
      x: 1207.452961672704,
      y: 896.5706214689266,
    },
  },
  {
    location: 'surface',
    name: 'Royal Hidden Passage',
    position: {
      x: 1224.9976771198628,
      y: 1054.4265536723165,
    },
  },
  {
    location: 'surface',
    name: 'Royal Hidden Passage',
    position: {
      x: 1224.9976771198628,
      y: 904.0875706214689,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Tree Stump Cave',
    position: {
      x: 1024.4866434380494,
      y: 1187.2259887005648,
    },
  },
  {
    location: 'surface',
    name: 'Whistling Hill Cave',
    position: {
      x: 1267.6062717772484,
      y: 1330.04802259887,
    },
  },
  {
    location: 'surface',
    name: 'Passeri Greenbelt Cave',
    position: {
      x: 1164.8443670153188,
      y: 1054.4265536723165,
    },
  },
  {
    location: 'surface',
    name: 'Coliseum Ruins Cave',
    position: {
      x: 1011.9547038329362,
      y: 1392.689265536723,
    },
  },
  {
    location: 'surface',
    name: 'Sage Temple Cave',
    position: {
      x: 954.3077816494148,
      y: 1144.6299435028247,
    },
  },
  {
    location: 'surface',
    name: 'Death Mountain East Tunnel',
    position: {
      x: 1934.3054587692777,
      y: 433.0254237288135,
    },
  },
  {
    location: 'surface',
    name: 'Death Mountain West Tunnel',
    position: {
      x: 1811.492450639167,
      y: 455.57627118644064,
    },
  },
  {
    location: 'surface',
    name: 'Lake Darman Monster Den',
    position: {
      x: 1844.0754936124617,
      y: 367.8785310734463,
    },
  },
  {
    location: 'surface',
    name: 'Isle of Rabac Gallery',
    position: {
      x: 1651.0836236937164,
      y: 355.3502824858757,
    },
  },
  {
    location: 'surface',
    name: 'Goronbi River Cave',
    position: {
      x: 1618.5005807204216,
      y: 590.8813559322034,
    },
  },
  {
    location: 'surface',
    name: 'Southern Mine',
    position: {
      x: 1708.7305458772375,
      y: 618.4435028248588,
    },
  },
  {
    location: 'surface',
    name: 'Gorko Tunnel',
    position: {
      x: 1758.858304297691,
      y: 605.9152542372881,
    },
  },
  {
    location: 'surface',
    name: 'West Restaurant Cave',
    position: {
      x: 1671.1347270618976,
      y: 678.5790960451977,
    },
  },
  {
    location: 'surface',
    name: 'East Restaurant Cave',
    position: {
      x: 1721.262485482351,
      y: 681.0847457627118,
    },
  },
  {
    location: 'surface',
    name: "Lizard's Burrow",
    position: {
      x: 1803.9732868760989,
      y: 362.86723163841805,
    },
  },
  {
    location: 'surface',
    name: 'Lake Intenoch Cave',
    position: {
      x: 1869.1393728226883,
      y: 663.5451977401129,
    },
  },
  {
    location: 'surface',
    name: 'YunoboCo HQ East Cave',
    position: {
      x: 1698.704994193147,
      y: 417.99152542372883,
    },
  },
  {
    location: 'surface',
    name: 'YunoboCo HQ South Cave',
    position: {
      x: 1688.6794425090563,
      y: 445.55367231638417,
    },
  },
  {
    location: 'surface',
    name: 'Death Mountain Foothill Cave',
    position: {
      x: 1743.819976771555,
      y: 453.07062146892656,
    },
  },
  {
    location: 'surface',
    name: 'Lake Ferona Cave',
    position: {
      x: 1738.8072009295097,
      y: 786.322033898305,
    },
  },
  {
    location: 'surface',
    name: 'Lake Ferona Cave',
    position: {
      x: 1738.8072009295097,
      y: 778.8050847457627,
    },
  },
  {
    location: 'surface',
    name: 'Cephla Lake Cave',
    position: {
      x: 1894.203252032915,
      y: 771.2881355932203,
    },
  },
  {
    location: 'surface',
    name: 'Foothill Monster Den',
    position: {
      x: 1819.011614402235,
      y: 726.1864406779661,
    },
  },
  {
    location: 'surface',
    name: 'Floria River Upstream Excavation',
    position: {
      x: 1475.6364692221296,
      y: 1783.5706214689264,
    },
  },
  {
    location: 'surface',
    name: 'Pagos Woods Excavation Site',
    position: {
      x: 1443.053426248835,
      y: 1816.14406779661,
    },
  },
  {
    location: 'surface',
    name: "Tobio's Hollow Cave",
    position: {
      x: 1560.8536585369002,
      y: 1658.2881355932202,
    },
  },
  {
    location: 'surface',
    name: 'Cora Lakefront Cave',
    position: {
      x: 1224.9976771198628,
      y: 1776.053672316384,
    },
  },
  {
    location: 'surface',
    name: 'Cora Lakefront Cave',
    position: {
      x: 1245.048780488044,
      y: 1806.1214689265535,
    },
  },
  {
    location: 'surface',
    name: 'Finra Woods Excavation Site',
    position: {
      x: 1417.9895470386082,
      y: 1786.0762711864406,
    },
  },
  {
    location: 'surface',
    name: 'Sarjon Woods Cave',
    position: {
      x: 1568.3728222999682,
      y: 1828.6723163841807,
    },
  },
  {
    location: 'surface',
    name: 'Lake Hylia Whirlpool Cave',
    position: {
      x: 1315.2276422766788,
      y: 1673.3220338983049,
    },
  },
  {
    location: 'surface',
    name: 'Popla Foothills Excavation Site',
    position: {
      x: 1428.015098722699,
      y: 1603.1638418079094,
    },
  },
  {
    location: 'surface',
    name: 'Puffer Beach Overhead Cave',
    position: {
      x: 1352.823461092019,
      y: 1989.0338983050847,
    },
  },
  {
    location: 'surface',
    name: 'River of the Dead Waterfall Cave',
    position: {
      x: 1029.4994192800948,
      y: 1593.1412429378531,
    },
  },
  {
    location: 'surface',
    name: 'Shrine of Resurrection',
    position: {
      x: 1034.5121951221402,
      y: 1515.466101694915,
    },
  },
  {
    location: 'surface',
    name: 'Gerudo Sanctuary',
    position: {
      x: 400.3960511034054,
      y: 1718.4237288135591,
    },
  },
  {
    location: 'surface',
    name: 'Gerudo Sanctuary',
    position: {
      x: 400.3960511034054,
      y: 1653.276836158192,
    },
  },
  {
    location: 'surface',
    name: 'Valley of Silent Statues',
    position: {
      x: 385.3577235772693,
      y: 1705.8954802259886,
    },
  },
  {
    location: 'surface',
    name: 'Quicksand Lake Cave',
    position: {
      x: 523.209059233516,
      y: 1776.053672316384,
    },
  },
  {
    location: 'surface',
    name: 'Mount Nabooru Cave',
    position: {
      x: 823.9756097562362,
      y: 1568.0847457627117,
    },
  },
  {
    location: 'surface',
    name: 'Mount Nabooru Cave',
    position: {
      x: 864.0778164925988,
      y: 1545.5338983050847,
    },
  },
  {
    location: 'surface',
    name: 'Stalry Plateau Cave',
    position: {
      x: 926.7375145181654,
      y: 1605.6694915254236,
    },
  },
  {
    location: 'surface',
    name: 'East Gerudo Ruins Cave',
    position: {
      x: 651.0348432056721,
      y: 1743.4802259887006,
    },
  },
  {
    location: 'surface',
    name: 'Central Gerudo Cave',
    position: {
      x: 420.4471544715867,
      y: 1848.7175141242938,
    },
  },
  {
    location: 'surface',
    name: 'Mount Nabooru South Cave',
    position: {
      x: 879.1161440187348,
      y: 1598.1525423728813,
    },
  },
  {
    location: 'surface',
    name: 'Lower Spectacle Rock Cave',
    position: {
      x: 874.1033681766895,
      y: 1645.7598870056497,
    },
  },
  {
    location: 'surface',
    name: 'Spectacle Rock Cave',
    position: {
      x: 763.8222996516921,
      y: 1648.2655367231637,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Prison Ruins',
    position: {
      x: 555.7921022068108,
      y: 1803.6158192090395,
    },
  },
  {
    location: 'surface',
    name: 'South Gerudo Cave',
    position: {
      x: 593.3879210221507,
      y: 1991.5395480225989,
    },
  },
  {
    location: 'surface',
    name: 'Koukot Plateau Cave',
    position: {
      x: 753.7967479676015,
      y: 1497.9265536723162,
    },
  },
  {
    location: 'surface',
    name: 'Koukot Plateau Cave',
    position: {
      x: 773.8478513357828,
      y: 1517.9717514124293,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 688.6306620210121,
      y: 1936.415254237288,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 693.6434378630574,
      y: 1946.4378531073446,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 678.6051103369214,
      y: 1938.920903954802,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 681.111498257944,
      y: 1963.9774011299435,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 691.1370499420348,
      y: 1968.9887005649716,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 701.1626016261255,
      y: 1966.4830508474574,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 693.6434378630574,
      y: 1958.966101694915,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 683.6178861789667,
      y: 1948.9435028248586,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 708.6817653891934,
      y: 1948.9435028248586,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 701.1626016261255,
      y: 1938.920903954802,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 703.6689895471482,
      y: 1956.460451977401,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Altar Ruins',
    position: {
      x: 673.592334494876,
      y: 1956.460451977401,
    },
  },
  {
    location: 'surface',
    name: 'Oasis Source',
    position: {
      x: 495.63879210226673,
      y: 1718.4237288135591,
    },
  },
  {
    location: 'surface',
    name: 'Gerudo Great Skeleton',
    position: {
      x: 154.77003484318396,
      y: 1994.0451977401128,
    },
  },
  {
    location: 'surface',
    name: 'West Gerudo Underground Ruins',
    position: {
      x: 187.35307781647865,
      y: 1550.5451977401128,
    },
  },
  {
    location: 'surface',
    name: 'Yiga Blademaster Station',
    position: {
      x: 713.6945412312388,
      y: 1512.9604519774011,
    },
  },
  {
    location: 'surface',
    name: 'Gerudo Canyon Mine',
    position: {
      x: 671.0859465738533,
      y: 1695.8728813559321,
    },
  },
  {
    location: 'surface',
    name: 'Gerudo Canyon Mine',
    position: {
      x: 656.0476190477175,
      y: 1648.2655367231637,
    },
  },
  {
    location: 'surface',
    name: 'Taafei Hill Cave',
    position: {
      x: 708.6817653891934,
      y: 1507.9491525423728,
    },
  },
  {
    location: 'surface',
    name: 'Statue of the Eighth Heroine Cave',
    position: {
      x: 255.02555168409066,
      y: 1209.776836158192,
    },
  },
  {
    location: 'surface',
    name: "Meadela's Mantle Cave",
    position: {
      x: 350.26829268295205,
      y: 1377.6553672316384,
    },
  },
  {
    location: 'surface',
    name: "Mystathi's Shelf Cave",
    position: {
      x: 372.82578397215605,
      y: 1254.8785310734463,
    },
  },
  {
    location: 'surface',
    name: 'Mount Dunsel Cave',
    position: {
      x: 2042.0801393732525,
      y: 1793.593220338983,
    },
  },
  {
    location: 'surface',
    name: 'Mount Dunsel Cave',
    position: {
      x: 2059.624854820411,
      y: 1858.7401129943503,
    },
  },
  {
    location: 'surface',
    name: 'Mount Floria Cave',
    position: {
      x: 1746.3263646925777,
      y: 1698.3785310734463,
    },
  },
  {
    location: 'surface',
    name: 'Mount Floria Cave',
    position: {
      x: 1706.2241579562149,
      y: 1786.0762711864406,
    },
  },
  {
    location: 'surface',
    name: 'Corta Lake Cave',
    position: {
      x: 1678.6538908249656,
      y: 1798.6045197740111,
    },
  },
  {
    location: 'surface',
    name: 'Rodai Lakefront Tunnel',
    position: {
      x: 1731.2880371664417,
      y: 1816.14406779661,
    },
  },
  {
    location: 'surface',
    name: 'Calora Lake Cave',
    position: {
      x: 1746.3263646925777,
      y: 1796.0988700564972,
    },
  },
  {
    location: 'surface',
    name: 'Calora Lake Cave',
    position: {
      x: 1756.3519163766682,
      y: 1828.6723163841807,
    },
  },
  {
    location: 'surface',
    name: 'Rassla Lake Cave',
    position: {
      x: 1711.2369337982602,
      y: 1961.4717514124293,
    },
  },
  {
    location: 'surface',
    name: 'Eventide Island Cave',
    position: {
      x: 2403.0000000005166,
      y: 1973.9999999999998,
    },
  },
  {
    location: 'surface',
    name: 'Ubota Point Cave',
    position: {
      x: 1626.0197444834896,
      y: 1903.8418079096043,
    },
  },
  {
    location: 'surface',
    name: 'Atun Valley Cave',
    position: {
      x: 1861.6202090596203,
      y: 1833.6836158192089,
    },
  },
  {
    location: 'surface',
    name: 'Byroad to Lanayru Wetlands',
    position: {
      x: 1666.1219512198522,
      y: 1380.1610169491526,
    },
  },
  {
    location: 'surface',
    name: 'Byroad to Lanayru Wetlands',
    position: {
      x: 1658.6027874567842,
      y: 1274.9237288135594,
    },
  },
  {
    location: 'surface',
    name: 'Kakariko Village Cave',
    position: {
      x: 1743.819976771555,
      y: 1315.0141242937852,
    },
  },
  {
    location: 'surface',
    name: 'Cucco Hideaway',
    position: {
      x: 1726.2752613243963,
      y: 1357.6101694915253,
    },
  },
  {
    location: 'surface',
    name: 'Sahasra Slope Cave',
    position: {
      x: 1608.4750290363309,
      y: 1365.1271186440677,
    },
  },
  {
    location: 'surface',
    name: 'Sahasra Slope Cave',
    position: {
      x: 1598.4494773522404,
      y: 1355.1045197740111,
    },
  },
  {
    location: 'surface',
    name: 'Dueling Peaks North Cave',
    position: {
      x: 1565.8664343789455,
      y: 1520.4774011299435,
    },
  },
  {
    location: 'surface',
    name: 'Dueling Peaks South Cave',
    position: {
      x: 1563.3600464579229,
      y: 1543.0282485875705,
    },
  },
  {
    location: 'surface',
    name: 'Sturnida Springs Cave',
    position: {
      x: 335.22996515681604,
      y: 458.08192090395477,
    },
  },
  {
    location: 'surface',
    name: 'Icefall Foothills Cave',
    position: {
      x: 245,
      y: 200,
    },
  },
  {
    location: 'surface',
    name: 'Lake Kilsie Cave',
    position: {
      x: 360.2938443670427,
      y: 412.98022598870057,
    },
  },
  {
    location: 'surface',
    name: 'Hebra Headspring Cave',
    position: {
      x: 603.4134727062415,
      y: 495.66666666666663,
    },
  },
  {
    location: 'surface',
    name: 'Pikida Stonegrove Northwest Cave',
    position: {
      x: 663.5667828107854,
      y: 317.76553672316385,
    },
  },
  {
    location: 'surface',
    name: 'Pikida Stonegrove Northwest Cave',
    position: {
      x: 718.7073170732841,
      y: 347.8333333333333,
    },
  },
  {
    location: 'surface',
    name: 'Hebra Great Skeleton',
    position: {
      x: 387.864111498292,
      y: 240.090395480226,
    },
  },
  {
    location: 'surface',
    name: 'Hebra Mountains Northwest Cave',
    position: {
      x: 580.8559814170374,
      y: 327.7881355932203,
    },
  },
  {
    location: 'surface',
    name: 'Brightcap Cave',
    position: {
      x: 578.3495934960147,
      y: 701.1299435028247,
    },
  },
  {
    location: 'surface',
    name: 'Rospro Pass Cave',
    position: {
      x: 448.01742160283607,
      y: 500.6779661016949,
    },
  },
  {
    location: 'surface',
    name: 'Talonto Peak Cave',
    position: {
      x: 530.728222996584,
      y: 505.68926553672316,
    },
  },
  {
    location: 'surface',
    name: 'Hebra South Summit Cave',
    position: {
      x: 485.613240418176,
      y: 498.17231638418076,
    },
  },
  {
    location: 'surface',
    name: 'Hebra South Summit Cave',
    position: {
      x: 525.7154471545387,
      y: 488.1497175141243,
    },
  },
  {
    location: 'surface',
    name: 'Tabantha Hills Cave',
    position: {
      x: 618.4518002323774,
      y: 668.5564971751412,
    },
  },
  {
    location: 'surface',
    name: 'Mount Drena Foothill Cave',
    position: {
      x: 961.8269454124828,
      y: 412.98022598870057,
    },
  },
  {
    location: 'surface',
    name: 'Kopeeki Drifts Cave',
    position: {
      x: 721.2137049943067,
      y: 550.7909604519773,
    },
  },
  {
    location: 'surface',
    name: 'West Lake Totori Cave',
    position: {
      x: 355.28106852499735,
      y: 608.4209039548023,
    },
  },
  {
    location: 'surface',
    name: 'North Biron Snowshelf Cave',
    position: {
      x: 355.28106852499735,
      y: 322.77683615819205,
    },
  },
  {
    location: 'surface',
    name: 'East Biron Snowshelf Cave',
    position: {
      x: 450.52380952385874,
      y: 357.8559322033898,
    },
  },
  {
    location: 'surface',
    name: 'East Biron Snowshelf Cave',
    position: {
      x: 347.7619047619294,
      y: 365.3728813559322,
    },
  },
  {
    location: 'surface',
    name: 'Rauru Hillside Cave',
    position: {
      x: 1443.053426248835,
      y: 758.7598870056497,
    },
  },
  {
    location: 'surface',
    name: 'Pico Pond Cave',
    position: {
      x: 1578.398373984059,
      y: 796.3446327683615,
    },
  },
  {
    location: 'surface',
    name: 'Yiga Clan Maritta Branch',
    position: {
      x: 1134.7677119630468,
      y: 605.9152542372881,
    },
  },
  {
    location: 'surface',
    name: 'Deplian Badlands Cave',
    position: {
      x: 1357.8362369340641,
      y: 242.59604519774012,
    },
  },
  {
    location: 'surface',
    name: 'North Hyrule Plain Cave',
    position: {
      x: 994.4099883857775,
      y: 904.0875706214689,
    },
  },
  {
    location: 'surface',
    name: 'North Hyrule Plain Cave',
    position: {
      x: 1006.9419279908908,
      y: 934.1553672316384,
    },
  },
  {
    location: 'surface',
    name: 'Tamio River Downstream Cave',
    position: {
      x: 598.4006968641961,
      y: 1272.4180790960452,
    },
  },
  {
    location: 'surface',
    name: "Lindor's Brow Cave",
    position: {
      x: 876.6097560977121,
      y: 811.3785310734463,
    },
  },
  {
    location: 'surface',
    name: 'Satori Mountain Foothill Cave',
    position: {
      x: 768.8350754937375,
      y: 1274.9237288135594,
    },
  },
  {
    location: 'surface',
    name: 'Thundra Plateau Cave',
    position: {
      x: 751.2903600465788,
      y: 874.0197740112994,
    },
  },
  {
    location: 'surface',
    name: 'Tanagar Canyon East Cave',
    position: {
      x: 803.9245063880547,
      y: 701.1299435028247,
    },
  },
  {
    location: 'surface',
    name: 'Satori Mountain Cave',
    position: {
      x: 778.8606271778281,
      y: 1169.686440677966,
    },
  },
  {
    location: 'surface',
    name: 'Crenel Peak Cave',
    position: {
      x: 1553.3344947738321,
      y: 1026.8644067796608,
    },
  },
  {
    location: 'surface',
    name: 'Crenel Peak Cave',
    position: {
      x: 1603.4622531942855,
      y: 1014.3361581920904,
    },
  },
  {
    location: 'surface',
    name: "Luto's Channel",
    position: {
      x: 2012.0034843209803,
      y: 1097.0225988700563,
    },
  },
  {
    location: 'surface',
    name: 'Oren Bridge Cave',
    position: {
      x: 1969.394889663595,
      y: 1099.5282485875705,
    },
  },
  {
    location: 'surface',
    name: 'Tabahl Woods Cave',
    position: {
      x: 1914.2543554010963,
      y: 1016.8418079096044,
    },
  },
  {
    location: 'surface',
    name: 'Tabahl Woods Cave',
    position: {
      x: 1896.7096399539378,
      y: 1031.8757062146892,
    },
  },
  {
    location: 'surface',
    name: 'Tabahl Woods Cave',
    position: {
      x: 1914.2543554010963,
      y: 1034.3813559322034,
    },
  },
  {
    location: 'surface',
    name: 'Boné Pond East Cave',
    position: {
      x: 1798.9605110340538,
      y: 1051.9209039548023,
    },
  },
  {
    location: 'surface',
    name: 'Boné Pond East Cave',
    position: {
      x: 1813.9988385601896,
      y: 1081.9887005649716,
    },
  },
  {
    location: 'surface',
    name: 'Boné Pond East Cave',
    position: {
      x: 1806.4796747971216,
      y: 1061.9435028248586,
    },
  },
  {
    location: 'surface',
    name: 'Boné Pond East Cave',
    position: {
      x: 1816.5052264812123,
      y: 1059.4378531073446,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Mountainside Cave',
    position: {
      x: 1889.1904761908697,
      y: 961.7175141242938,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Mountainside Cave',
    position: {
      x: 1904.2288037170056,
      y: 961.7175141242938,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Byroad',
    position: {
      x: 1956.8629500584816,
      y: 1004.3135593220338,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Byroad',
    position: {
      x: 1919.2671312431416,
      y: 971.7401129943503,
    },
  },
  {
    location: 'surface',
    name: 'Horon Lagoon Cave',
    position: {
      x: 2282.6933797914285,
      y: 1144.6299435028247,
    },
  },
  {
    location: 'surface',
    name: 'Tarm Point Cave',
    position: {
      x: 2335.3275261329045,
      y: 1279.9350282485875,
    },
  },
  {
    location: 'surface',
    name: 'Ralis Channel',
    position: {
      x: 1979.4204413476857,
      y: 1024.3587570621469,
    },
  },
  {
    location: 'surface',
    name: 'Ralis Channel',
    position: {
      x: 1969.394889663595,
      y: 1044.4039548022597,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Summit Cave',
    position: {
      x: 1954.356562137459,
      y: 971.7401129943503,
    },
  },
  {
    location: 'surface',
    name: 'Crenel Hills Cave',
    position: {
      x: 1400.4448315914497,
      y: 911.6045197740112,
    },
  },
  {
    location: 'surface',
    name: 'Rebonae Bridge Cave',
    position: {
      x: 1483.1556329851976,
      y: 1076.9774011299435,
    },
  },
  {
    location: 'surface',
    name: 'Reservoir Lakefront Cavern',
    position: {
      x: 2179.931475029499,
      y: 986.774011299435,
    },
  },
  {
    location: 'surface',
    name: 'Ploymus Mountain Cave',
    position: {
      x: 2144.842044135182,
      y: 959.2118644067796,
    },
  },
  {
    location: 'surface',
    name: 'Upland Zorana Foothill Cave',
    position: {
      x: 2024.5354239260937,
      y: 926.638418079096,
    },
  },
  {
    location: 'surface',
    name: "Cave Under Zora's Domain",
    position: {
      x: 2047.0929152152976,
      y: 996.7966101694915,
    },
  },
  {
    location: 'surface',
    name: 'Lanayru Road South Cave',
    position: {
      x: 1919.2671312431416,
      y: 1392.689265536723,
    },
  },
  {
    location: 'surface',
    name: 'Mapla Point Cave',
    position: {
      x: 2362.8977932641537,
      y: 1613.186440677966,
    },
  },
  {
    location: 'surface',
    name: "Oakle's Navel Cave",
    position: {
      x: 1874.1521486647337,
      y: 1578.1073446327682,
    },
  },
  {
    location: 'surface',
    name: 'Lanayru Road East Cave',
    position: {
      x: 2006.990708478935,
      y: 1352.5988700564972,
    },
  },
  {
    location: 'surface',
    name: 'Lanayru Road East Cave',
    position: {
      x: 2102.233449477796,
      y: 1312.508474576271,
    },
  },
  {
    location: 'surface',
    name: 'Robred Dropoff Cave',
    position: {
      x: 1871.645760743711,
      y: 1432.7796610169491,
    },
  },
  {
    location: 'surface',
    name: 'Walnot Mountain Cave',
    position: {
      x: 2277.680603949383,
      y: 1492.915254237288,
    },
  },
  {
    location: 'surface',
    name: 'Walnot Mountain Cave',
    position: {
      x: 2210.008130081771,
      y: 1570.5903954802259,
    },
  },
  {
    location: 'surface',
    name: 'Deepback Bay Cave',
    position: {
      x: 2275.17421602836,
      y: 1615.6920903954801,
    },
  },
  {
    location: 'surface',
    name: 'Cape Cales Cliffbase Cave',
    position: {
      x: 2142.335656214159,
      y: 1838.6949152542372,
    },
  },
  {
    location: 'surface',
    name: 'Retsam Forest Cave',
    position: {
      x: 2167.3995354243857,
      y: 1570.5903954802259,
    },
  },
  {
    location: 'surface',
    name: 'Retsam Forest Cave',
    position: {
      x: 2164.8931475033633,
      y: 1560.5677966101694,
    },
  },
  {
    location: 'surface',
    name: 'Fort Hateno Cave',
    position: {
      x: 1811.492450639167,
      y: 1480.3870056497174,
    },
  },
  {
    location: 'surface',
    name: 'Gisa Crater Cave',
    position: {
      x: 377.83855981420135,
      y: 846.457627118644,
    },
  },
  {
    location: 'surface',
    name: 'Gisa Crater Cave',
    position: {
      x: 360.2938443670427,
      y: 828.9180790960452,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Columns Cave',
    position: {
      x: 470.57491289204006,
      y: 979.2570621468926,
    },
  },
  {
    location: 'surface',
    name: 'Tanagar Canyon West Cave',
    position: {
      x: 508.17073170738007,
      y: 899.0762711864406,
    },
  },
  {
    location: 'surface',
    name: 'Komo Shoreline Cave',
    position: {
      x: 1400.4448315914497,
      y: 1984.0225988700563,
    },
  },
  {
    location: 'surface',
    name: 'Pristine Sanctum',
    position: {
      x: 2157.373983740295,
      y: 941.6723163841807,
    },
  },
  {
    location: 'surface',
    name: 'Pristine Sanctum',
    position: {
      x: 2137.322880372114,
      y: 946.683615819209,
    },
  },
  {
    location: 'surface',
    name: 'Ancient Zora Waterworks',
    position: {
      x: 2132.310104530068,
      y: 1056.9322033898304,
    },
  },
];
