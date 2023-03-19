import { By, Builder, until, WebDriver } from 'selenium-webdriver';

import { storeData } from '../naver_parser/storeData';

const KAKAO_MAP_URL = 'https://map.kakao.com/';

const getTitleKeyword = (title: string) => {
  const titleSplit = title.split(' ');
  const titleSplitLen = titleSplit.length;
  if (titleSplitLen === 1) return title;
  if (titleSplitLen === 2) {
    const lastWord = titleSplit[1][titleSplit[1].length - 1];
    console.log('lastWord========> ', lastWord);
    if (lastWord === '점') {
      return titleSplit[0];
    }
  }
  return titleSplit[0] + ' ' + titleSplit[1];
};

export const parserKakaoReview = async (driver: WebDriver, data: any, type: string) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    // headless로 크롬 드라이버 실행
    try {
      // 특정 URL 생성
      const addressSplit = data.address.split(' ');
      const addressKeyword = addressSplit[0] + ' ' + addressSplit[1] + ' ' + addressSplit[2];
      const titleKeyword = getTitleKeyword(data.title);

      const searchKeyword = `${addressKeyword} ${titleKeyword}`;
      await driver.get(KAKAO_MAP_URL + `?q=${encodeURIComponent(searchKeyword)}`);
      await driver.sleep(4000);

      // 가게 평점 가져오기
      try {
        const score = await driver.findElement(By.css('.score em.num'))?.getText();
        console.log('score', score);
        if (score) data.kakao_score = score;
      } catch (e) {
        console.log('no score');
      }

      //가게 리뷰 갯수 가져오기
      try {
        const reviewCount = await driver.findElement(By.css('a.review em'))?.getText();
        console.log('reviewCount', reviewCount);
        if (reviewCount) data.kakao_review_count = reviewCount;
      } catch (e) {
        console.log('no reviewCount');
      }

      //가게 공유 링크 가져오기
      try {
        const kakao_detail_url_el = await driver.findElement(By.css('.contact.clickArea a'));
        const kakao_detail_url = await kakao_detail_url_el.getAttribute('href');
        if (kakao_detail_url) data.kakao_detail_url = kakao_detail_url;
      } catch (e) {
        console.log('no kakao_detail_url');
      }

      resolve(data);
    } catch (e) {
      console.log(e);
      await storeData({
        data: { index: data.index, error: e },
        filePathStr: `/data/${type}_kakao_log.json`,
      });
      console.log('-----실패 내용 저장 성공-----');
      resolve(data);
    } finally {
      driver.sleep(300);
      // resolve(data);
    }
  });
};
