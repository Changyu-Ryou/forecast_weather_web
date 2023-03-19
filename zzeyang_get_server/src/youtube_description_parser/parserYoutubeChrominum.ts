import { By, Key, WebDriver, until } from 'selenium-webdriver';
import { storeData } from '../naver_parser/storeData';

const parserYoutubeChrominum = async (
  driver: WebDriver,
  youtube_url: string,
  index: number,
  type: string
) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    // headless로 크롬 드라이버 실행

    try {
      // 특정 URL 생성
      await driver.get(youtube_url);

      await driver.sleep(12000);

      // css selector로 가져온 element가 위치할때까지 최대 10초간 기다린다

      const resultData: any = {
        type,
        index,
        name: 'raw',
        youtube_url: youtube_url,
      };

      //더보기 버튼 클릭
      await moreButtonClick(driver);

      //내용 설명 가져오기

      const descriptionUrls = await descriptionParsing(driver);

      console.log(index, '== descriptionUrls: ', descriptionUrls);

      if (!descriptionUrls) {
        await storeData({
          data: { index, error: 'url 없음' },
          filePathStr: `../data/${type}_log.json`,
        });
        resolve('fail');
        return;
      }

      for await (const [i, data] of descriptionUrls.entries()) {
        if (data.includes('naver.me')) {
          resultData.naver_url = data;
          await storeData({
            data: resultData,
            filePathStr: `../data/${type}_data.json`,
          });
          console.log('-----저장 성공-----', resultData);
        }
      }

      return;
    } catch (e) {
      console.log(e);
      await storeData({
        data: { index, error: e },
        filePathStr: `../data/${type}_log.json`,
      });
      console.log('-----실패 내용 저장 성공-----');
      resolve('fail');
    } finally {
      driver.sleep(300);
      resolve('done');
    }
  });
};

export default parserYoutubeChrominum;

// 설명 더보기 클릭
export const moreButtonClick = async (driver: WebDriver) => {
  try {
    const moreButton = await driver.findElement(By.css('#bottom-row > #description'));
    if (moreButton) await moreButton.click();

    driver.sleep(1000);

    return;
  } catch (e) {
    console.log('moreButtonClick error', e);
    return 0;
  }
};

// 영상설명 가져오기
export const descriptionParsing = async (driver: WebDriver) => {
  try {
    const description = await driver.findElements(
      By.css('#description-inline-expander > yt-attributed-string > span a')
    );

    const list: string[] = [];

    await Promise.all(
      description.map(async (item) => {
        const text = await item.getText();
        list.push(text);
      })
    );

    return list;
  } catch (e) {
    console.log('descriptionParsing error', e);
    return undefined;
  }
};
