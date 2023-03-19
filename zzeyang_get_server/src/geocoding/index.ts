import axios from "axios";

import fs from "fs-extra";
import path from "path";

const CLIENT_ID = "7b3rr1fq7g";
const CLIENT_SECRET = "K30QoFYOiG8izKzgRNTeLUBtli6JqZjsMLA3dVB0";

const endpoint = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";

const headers = {
  "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
  "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
};

// 타입 지정
const TYPE_NAME = "kim_sawon";

const INPUT_FILE_PATH = `../data/${TYPE_NAME}_kakao_data.json`;
const OUTPUT_FILE_PATH = `../data/${TYPE_NAME}_all_data_geo.json`;

const updateJson = async (data: any) => {
  const stringfyJson = JSON.stringify(data);
  const pathName = path.join(__dirname, OUTPUT_FILE_PATH);
  await fs.writeFileSync(pathName, stringfyJson);
  return true;
};

const getGeocoding = async (address: string) => {
  const url = `${endpoint}?query=${address}`;
  const req = await axios.get(url, { headers });
  return req.data;
};

const main = async () => {
  const pathName = path.join(__dirname, INPUT_FILE_PATH);
  const dataBuffer = await fs.readFileSync(pathName);
  const dataJSON = dataBuffer.toString();
  const json = JSON.parse(dataJSON);

  for (const [index, value] of Object.entries(json)) {
    let data = value as any;
    if (data?.address) {
      try {
        const address = await getGeocoding(data.address);
        const result = address?.addresses?.[0];
        console.log(data.index, " = address", address?.addresses?.[0]);
        if (result && result?.x && result?.y) {
          data.x = result.x;
          data.y = result.y;
        }
        console.log("index", index, "x=", data?.x, "y=", data?.y);
      } catch (e) {
        console.log("error", e);
      }
    }
  }

  await updateJson(json);
};

main();
