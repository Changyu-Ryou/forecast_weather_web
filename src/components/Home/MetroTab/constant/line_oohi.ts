import { LineType } from './lines';

export const line_oohi: LineType[][] = [
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 1,
      station_name: '신설동',
      next_station: [2],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 2,
      station_name: '보문',
      next_station: [3],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 3,
      station_name: '성신여대입구',
      next_station: [4],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 4,
      station_name: '정릉',
      next_station: [5],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 5,
      station_name: '북한산보국문',
      next_station: [6],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 6,
      station_name: '솔샘',
      next_station: [7],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 7,
      station_name: '삼양사거리',
      next_station: [8],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 8,
      station_name: '삼양',
      next_station: [9],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 9,
      station_name: '화계',
      next_station: [10],
      toilet: 'PLATFORM',
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 10,
      station_name: '가오리',
      next_station: [11],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 11,
      station_name: '4·19민주묘지',
      next_station: [12],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 12,
      station_name: '솔밭공원',
      next_station: [13],
    },
  ],
  [
    {
      line_id: 11,
      line_name: '우이신설경전철',
      station_id: 13,
      station_name: '북한산우이',
      next_station: undefined,
      toilet: 'PLATFORM',
    },
  ],
];
export const line_oohi_flat = line_oohi.reduce(function (acc, cur) {
  return acc.concat(cur);
});
