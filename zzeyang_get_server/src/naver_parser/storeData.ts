import fs from "fs-extra";
import path from "path";

type StoreDataType = {
  data: any;
  filePathStr?: string;
  overwrite?: boolean;
};

export const storeData = async ({
  data,
  filePathStr,
  overwrite = false,
}: StoreDataType) => {
  const filePath = path.join(__dirname, filePathStr || "../data/data.json");

  const checkExsist = await fs.existsSync(filePath);
  if (!checkExsist) {
    await fs.createFileSync(filePath);
    await fs.writeFileSync(filePath, JSON.stringify([]));
  }

  const dataBuffer = await fs.readFileSync(filePath);
  const dataJSON = dataBuffer.toString();
  let jsonData = JSON.parse(dataJSON);

  if (overwrite) {
    jsonData = data;
  } else {
    jsonData.push(data);
  }

  const stringfyJson = JSON.stringify(jsonData);
  await fs.writeFileSync(filePath, stringfyJson);
  return;
};
