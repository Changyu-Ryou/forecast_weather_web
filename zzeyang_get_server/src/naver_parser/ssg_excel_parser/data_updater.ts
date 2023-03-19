import { WebDriver } from "selenium-webdriver";
import { loadJsonData } from "../../kakao_map_parser/loadJsonFile";
import { runChrome } from "../selenium";
import { storeData } from "../storeData";
import { updateDataParser } from "./update_data_parser";

const parserName = "ssg";

export const dataUpdater = async () => {
  const driver: WebDriver = await runChrome();

  console.log("data ssg update start");
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
        filePathStr: `../data/${parserName}_log.json`,
      });
      continue;
    }

    const result = await updateDataParser(driver, data, parserName);

    await storeData({
      data: jsonData,
      filePathStr: `../data/${parserName}_data.json`,
      overwrite: true,
    });
    console.log("[[" + i + "]] finish = ", result);
  }
};

dataUpdater();
