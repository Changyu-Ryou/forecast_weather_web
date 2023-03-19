import { WebDriver } from 'selenium-webdriver';
import xlsx from 'xlsx';
import { runChrome } from '../naver_parser/selenium';
import { storeData } from '../naver_parser/storeData';
import parserYoutubeChrominum from './parserYoutubeChrominum';
import path from 'path';
// import { requestPlace } from "./parser";

type ExcelData = {
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
const parserName = 'kim_sawon' as string;
const filePath = '../constants/kim_sawon.xlsx';

const main = async () => {
  // @files 엑셀 파일을 가져온다.
  const pathFullPath = path.join(__dirname, filePath);
  const excelFile = xlsx.readFile(pathFullPath, {
    sheetRows: 200,
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

  const driver: WebDriver = await runChrome();
  await driver.get('https://www.youtube.com/');
  await driver.sleep(12000);

  for await (const [i, data] of jsonData.entries()) {
    if (startNum && i < startNum) continue;
    if (maxFlag && i > maxFlag) break;

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

    const parser = parserYoutubeChrominum;
    if (!parser) return;

    const result = await parser(
      driver,
      `https://www.youtube.com/watch?v=${data.video_id}` ?? data.youtube_url,
      data.index,
      parserName
    );

    console.log('[[' + i + ']] finish = ', result);
  }
};
main();
