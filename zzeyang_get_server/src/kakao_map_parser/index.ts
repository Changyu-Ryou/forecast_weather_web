import { WebDriver } from "selenium-webdriver";
import { parserKakaoReview } from "./parserKakaoReview";

import { storeData } from "../naver_parser/storeData";
import { loadJsonData } from "./loadJsonFile";
import { runChrome } from "../naver_parser/selenium";

const parserName = "kim_sawon";

const kakaoParserMain = async () => {
  const driver: WebDriver = await runChrome();

  const jsonData = await loadJsonData(`../data/${parserName}_data.json`);
  if (!jsonData) {
    console.log("json file not found");
    return;
  }

  for await (const [i, data] of jsonData.entries()) {
    if (!data.title || !data.address) {
      console.log(">>" + data?.index + "<<= title or address is empty");
      await storeData({
        data: {
          index: data.index,
          result: ">>" + data?.index + "<<= title or address is empty",
        },
        filePathStr: `../data/${parserName}_kakao_log.json`,
      });
      continue;
    }

    const result = await parserKakaoReview(driver, data, parserName);

    console.log("[[" + i + "]] finish = ", result);
    await storeData({
      data: jsonData,
      filePathStr: `../data/${parserName}_kakao_data.json`,
      overwrite: true,
    });
  }
  await storeData({
    data: jsonData,
    filePathStr: `../data/${parserName}_kakao_data.json`,
  });
};

kakaoParserMain();
