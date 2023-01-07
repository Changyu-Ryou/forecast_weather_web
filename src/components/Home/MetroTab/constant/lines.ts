import { line_1_flat } from './line_1';
import { line_2_flat } from './line_2';
import { line_3_flat } from './line_3';
import { line_4_flat } from './line_4';
import { line_5_flat } from './line_5';
import { line_6_flat } from './line_6';
import { line_7_flat } from './line_7';
import { line_8_flat } from './line_8';
import { line_9_flat } from './line_9';
import { line_gonghang_flat } from './line_gonghang';
import { line_incheon_flat } from './line_incheon';
import { line_kyongei_flat } from './line_kyongei';
import { line_oohi_flat } from './line_oohi';
import { line_sinbundang_flat } from './line_sinbundang';
import { line_sooin_flat } from './line_sooin';
import { line_uijungboo_flat } from './line_uijungboo';

export type LineType =
  | {
      line_id: number;
      line_name: string;
      station_id: number;
      station_name: string;
      next_station: number[] | undefined;
      toilet?: 'PLATFORM' | 'GATE' | undefined;
    }
  | undefined;

type ColorObjType = { [index: number]: string };
export const LINE_COLOR_HEX: ColorObjType = {
  1: '#0052A4',
  2: '#00A84D',
  3: '#EF7C1C',
  4: '#00A5DE',
  5: '#996CAC',
  6: '#CD7C2F',
  7: '#747F00',
  8: '#E6186C',
  9: '#BDB092',
  10: '#0065B3',
  11: '#B7C452',
  12: '#77C4A3',
  13: '#F5A200',
  14: '#D4003B',
  15: '#FDA600',
  16: '#7CA8D5',
};

export const LINE_NAME_LIST = [
  {
    line_name: '1호선',
    line_id: 1,
  },
  {
    line_name: '2호선',
    line_id: 2,
  },
  {
    line_name: '3호선',
    line_id: 3,
  },
  {
    line_name: '4호선',
    line_id: 4,
  },
  {
    line_name: '5호선',
    line_id: 5,
  },
  {
    line_name: '6호선',
    line_id: 6,
  },
  {
    line_name: '7호선',
    line_id: 7,
  },
  {
    line_name: '8호선',
    line_id: 8,
  },
  {
    line_name: '9호선',
    line_id: 9,
  },
  {
    line_name: '공항철도',
    line_id: 10,
  },
  {
    line_name: '우이신설경전철',
    line_id: 11,
  },
  {
    line_name: '경의중앙선',
    line_id: 12,
  },
  {
    line_name: '수인분당선',
    line_id: 13,
  },
  {
    line_name: '신분당선',
    line_id: 14,
  },
  {
    line_name: '의정부경전철',
    line_id: 15,
  },
  {
    line_name: '인천1&2호선',
    line_id: 16,
  },
];

export const line_all_flat = [
  ...line_1_flat.filter((el) => el),
  ...line_2_flat.filter((el) => el),
  ...line_3_flat.filter((el) => el),
  ...line_4_flat.filter((el) => el),
  ...line_5_flat.filter((el) => el),
  ...line_6_flat.filter((el) => el),
  ...line_7_flat.filter((el) => el),
  ...line_8_flat.filter((el) => el),
  ...line_9_flat.filter((el) => el),
  ...line_gonghang_flat.filter((el) => el),
  ...line_incheon_flat.filter((el) => el),
  ...line_oohi_flat.filter((el) => el),
  ...line_sooin_flat.filter((el) => el),
  ...line_kyongei_flat.filter((el) => el),
  ...line_uijungboo_flat.filter((el) => el),
  ...line_sinbundang_flat.filter((el) => el),
];
