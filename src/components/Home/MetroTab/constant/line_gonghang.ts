import { LineType } from './lines';

export const line_gonghang: LineType[][] = [
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 1,
      station_name: '서울',
      next_station: [2],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 2,
      station_name: '공덕',
      next_station: [3],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 3,
      station_name: '홍대입구',
      next_station: [4],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 4,
      station_name: '디지털미디어시티',
      next_station: [5],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 5,
      station_name: '마곡나루',
      next_station: [6],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 6,
      station_name: '김포공항',
      next_station: [7],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 7,
      station_name: '계양',
      next_station: [8],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 8,
      station_name: '검암',
      next_station: [9],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 9,
      station_name: '청라국제도시',
      next_station: [10],
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 10,
      station_name: '운서',
      next_station: [11],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 11,
      station_name: '공항화물청사',
      next_station: [12],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 12,
      station_name: '인천공항1터미널',
      next_station: [13],
    },
  ],
  [
    {
      line_id: 10,
      line_name: '공항철도',
      station_id: 13,
      station_name: '인천공항2터미널',
      next_station: undefined,
    },
  ],
];
export const line_gonghang_flat = line_gonghang.reduce(function (acc, cur) {
  return acc.concat(cur);
});
