import fs from "fs-extra";
import path from "path";

export const loadJsonData = async (filePath: string) => {
  const pathFullPath = path.join(__dirname, filePath);
  const checkExsist = await fs.existsSync(pathFullPath);
  if (!checkExsist) {
    return undefined;
  }

  const dataBuffer = await fs.readFileSync(pathFullPath);
  const dataJSON = dataBuffer.toString();
  const jsonData = JSON.parse(dataJSON);
  return jsonData;
};
