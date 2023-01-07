import { LineType } from './lines';

export const line_sinbundang: LineType[][] = [
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 1,
      station_name: '신사',
      next_station: [2],
    },
  ],
  [{ line_id: 14, line_name: '신분당선', station_id: 2, station_name: '논현', next_station: [3] }],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 3,
      station_name: '신논현',
      next_station: [4],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 4,
      station_name: '강남',
      next_station: [5],
      toilet: 'PLATFORM',
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 5,
      station_name: '양재',
      next_station: [6],
      toilet: 'PLATFORM',
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 6,
      station_name: '양재시민의숲',
      next_station: [7],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 7,
      station_name: '청계산입구',
      next_station: [8],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 8,
      station_name: '판교',
      next_station: [9],
      toilet: 'PLATFORM',
    },
  ],

  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 9,
      station_name: '정자',
      next_station: [10],
      toilet: 'GATE',
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 10,
      station_name: '미금',
      next_station: [11],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 11,
      station_name: '동천',
      next_station: [12],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 12,
      station_name: '수지구청',
      next_station: [13],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 13,
      station_name: '성복',
      next_station: [14],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 14,
      station_name: '상현',
      next_station: [15],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 15,
      station_name: '광교중앙',
      next_station: [16],
    },
  ],
  [
    {
      line_id: 14,
      line_name: '신분당선',
      station_id: 16,
      station_name: '광교',
      next_station: undefined,
    },
  ],
];
export const line_sinbundang_flat = line_sinbundang.reduce(function (acc, cur) {
  return acc.concat(cur);
});
