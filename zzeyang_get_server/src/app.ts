import { WebDriver } from 'selenium-webdriver';
import xlsx from 'xlsx';
// import { requestPlace } from "./parser";
import { runChrome } from './naver_parser/selenium';

import { runChromePage as runZzyangChromePage } from './naver_parser/zzyang_excel_parser/selenium';
import { runChromePage as runSSGChromePage } from './naver_parser/ssg_excel_parser/selenium';
import { storeData } from './naver_parser/storeData';
import kimJson from './data/kim_sawon_raw.json';

type ExcelData = {
  type?: string;
  index: number;
  name: string;
  youtube_url: string;
  video_id?: string;
  naver_url: string;
  ad: string;
  chain: string;
};

// 어떤 엑셀 파일을 파싱할지 결정 및 타입 이름을 지정한다.
// ex) "zzyang" or "ssg"
const parserName = 'kim_sawon';

const main = async () => {
  // @files 엑셀 파일을 가져온다.

  const fileSwitcher = () => {
    switch (parserName as string) {
      case 'ssg':
        return '/constants/ssg.xlsx';
      case 'zzyang':
        return '/constants/zzyang.xlsx';
      case 'bigface':
        return '/constants/bigface.xlsx';
      default:
        return '/constants/ssg.xlsx';
    }
  };

  const excelFile = xlsx.readFile(__dirname + fileSwitcher(), {
    sheetRows: 100,
  });

  // @breif 엑셀 파일의 첫번째 시트의 정보를 추출
  const sheetName = excelFile.SheetNames[0]; // @details 첫번째 시트 정보 추출
  const firstSheet = excelFile.Sheets[sheetName]; // @details 시트의 제목 추출

  // @details 엑셀 파일의 첫번째 시트를 읽어온다.
  const jsonData: ExcelData[] = xlsx.utils.sheet_to_json(firstSheet, {
    defval: '',
  });

  console.log(jsonData.length > 50 && '>>>>>>>>>>>>>>엑셀 가져오기 성공<<<<<<<<<<');

  // const maxFlag = jsonData.length;

  const startNum = undefined;
  const maxFlag = undefined;
  const cherryPick: number[] = [];

  const driver: WebDriver = await runChrome();

  for await (const [i, data] of jsonData.entries()) {
    if (startNum && i < startNum) continue;
    if (maxFlag && i > maxFlag) break;
    if (cherryPick.length !== 0 && !cherryPick.includes(data.index)) {
      continue;
    }

    if (data.youtube_url.length === 0) {
      console.log('>>' + data?.index + '<< = 비어있는 row');

      await storeData({
        data: {
          index: data.index,
          result: '>>' + data?.index + '<< = 비어있는 row',
        },
        filePathStr: `../data/${parserName}_log.json`,
      });
      continue;
    }
    if (data.name.length < 2) {
      console.log('>>' + data.index + ' [' + data.name + '] << = 상호명이 입력되지 않음');

      await storeData({
        data: {
          index: data.index,
          result: '>>' + data.index + ' [' + data.name + '] << = 상호명이 입력되지 않음',
        },
        filePathStr: `../data/${parserName}_log.json`,
      });
      continue;
    }

    if (data.naver_url.length === 0) {
      console.log('>>' + jsonData[i].naver_url + '<< = 네이버 링크 없음');
      await storeData({
        data: {
          index: data.index,
          result: '>>' + jsonData[i].naver_url + '<< = 네이버 링크 없음',
        },
        filePathStr: `../data/${parserName}_log.json`,
      });
      continue;
    }

    const parserChrominum = () => {
      switch (parserName as string) {
        case 'ssg':
          return runSSGChromePage;
        case 'zzyang':
          return runZzyangChromePage;
        default:
          return runSSGChromePage;
      }
    };

    const parser = parserChrominum();
    if (!parser) return;

    const result = await parser(
      driver,
      data?.video_id ? `https://www.youtube.com/watch?v=${data?.video_id}` : data.youtube_url,
      data.naver_url,
      data.index,
      parserName
    );

    console.log('[[' + i + ']] finish = ', result);
  }
};
main();
