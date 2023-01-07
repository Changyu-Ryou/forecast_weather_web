import { LineType } from './lines';

export const line_uijungboo: LineType[][] = [
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 1,
      station_name: '발곡',
      next_station: [2],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 2,
      station_name: '회룡',
      next_station: [3],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 3,
      station_name: '범골',
      next_station: [4],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 4,
      station_name: '경전철의정부',
      next_station: [5],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 5,
      station_name: '의정부시청',
      next_station: [6],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 6,
      station_name: '흥선',
      next_station: [7],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 7,
      station_name: '의정부중앙',
      next_station: [8],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 8,
      station_name: '동오',
      next_station: [9],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 9,
      station_name: '새말',
      next_station: [10],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 10,
      station_name: '경기도청북부청사',
      next_station: [11],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 11,
      station_name: '효자',
      next_station: [12],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 12,
      station_name: '곤제',
      next_station: [13],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 13,
      station_name: '어룡',
      next_station: [14],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 14,
      station_name: '송산',
      next_station: [15],
    },
  ],
  [
    {
      line_id: 15,
      line_name: '의정부경전철',
      station_id: 15,
      station_name: '탑석',
      next_station: undefined,
      toilet: 'GATE',
    },
  ],
];
export const line_uijungboo_flat = line_uijungboo.reduce(function (acc, cur) {
  return acc.concat(cur);
});
