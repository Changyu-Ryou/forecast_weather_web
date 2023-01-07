import { LineType } from './lines';

export const line_8: LineType[][] = [
  [
    {
      line_id: 8,
      line_name: '8호선',
      station_id: 1,
      station_name: '암사',
      next_station: [2],
    },
  ],
  [{ line_id: 8, line_name: '8호선', station_id: 2, station_name: '천호', next_station: [3] }],
  [{ line_id: 8, line_name: '8호선', station_id: 3, station_name: '강동구청', next_station: [4] }],
  [{ line_id: 8, line_name: '8호선', station_id: 4, station_name: '몽촌토성', next_station: [5] }],
  [{ line_id: 8, line_name: '8호선', station_id: 5, station_name: '잠실', next_station: [6] }],
  [{ line_id: 8, line_name: '8호선', station_id: 6, station_name: '석촌', next_station: [7] }],
  [{ line_id: 8, line_name: '8호선', station_id: 7, station_name: '송파', next_station: [8] }],
  [
    {
      line_id: 8,
      line_name: '8호선',
      station_id: 8,
      station_name: '가락시장',
      next_station: [9],
      toilet: 'GATE',
    },
  ],
  [{ line_id: 8, line_name: '8호선', station_id: 9, station_name: '문정', next_station: [10] }],
  [{ line_id: 8, line_name: '8호선', station_id: 10, station_name: '장지', next_station: [11] }],
  [{ line_id: 8, line_name: '8호선', station_id: 11, station_name: '복정', next_station: [12] }],
  [{ line_id: 8, line_name: '8호선', station_id: 12, station_name: '남위례', next_station: [13] }],
  [{ line_id: 8, line_name: '8호선', station_id: 13, station_name: '산성', next_station: [14] }],
  [
    {
      line_id: 8,
      line_name: '8호선',
      station_id: 14,
      station_name: '남한산성입구',
      next_station: [15],
    },
  ],
  [
    {
      line_id: 8,
      line_name: '8호선',
      station_id: 15,
      station_name: '단대오거리',
      next_station: [16],
    },
  ],
  [{ line_id: 8, line_name: '8호선', station_id: 16, station_name: '신흥', next_station: [17] }],
  [{ line_id: 8, line_name: '8호선', station_id: 17, station_name: '수진', next_station: [18] }],
  [
    {
      line_id: 8,
      line_name: '8호선',
      station_id: 18,
      station_name: '모란',
      next_station: undefined,
    },
  ],
];
export const line_8_flat = line_8.reduce(function (acc, cur) {
  return acc.concat(cur);
});
