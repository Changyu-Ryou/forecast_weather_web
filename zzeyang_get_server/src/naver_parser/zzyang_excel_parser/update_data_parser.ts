import { By, until, WebDriver } from "selenium-webdriver";
import {
  blogReviewCountParser,
  reviewScoreParser,
  shareMapUrlParser,
  visitorReviewCountParser,
} from "../common_parser";
import { storeData } from "../storeData";

export const updateDataParser = async (
  driver: WebDriver,
  data: any,
  type: string
) => {
  return new Promise(async (resolve, reject) => {
    // headless로 크롬 드라이버 실행

    try {
      // 특정 URL 생성
      await driver.get(data.naverUrl);
      await driver.sleep(4000);

      data["type"] = type;

      // css selector로 가져온 element가 위치할때까지 최대 10초간 기다린다.
      await driver.wait(until.elementLocated(By.id("entryIframe")), 10000);

      const iframe = await driver.findElements(By.css("iframe"));

      driver.switchTo().frame(iframe.length - 1);

      // 네이버 정식 지도 url 가져오기
      const naver_map_url = await shareMapUrlParser(driver);
      data["naver_map_url"] = naver_map_url;

      // 가게 리뷰 평점 가져오기
      const naver_review_score = await reviewScoreParser(driver);
      data["naver_review_score"] = naver_review_score;

      // 가게 방문자 리뷰 갯수 가져오기
      const naver_visitor_review_count = await visitorReviewCountParser(driver);
      data["naver_visitor_review_count"] = naver_visitor_review_count;

      // 블로그 리뷰 갯수 가져오기
      const naver_blog_review_count = await blogReviewCountParser(driver);
      data["naver_blog_review_count"] = naver_blog_review_count;

      resolve(data);
    } catch (e) {
      console.log(e);
      await storeData({
        data: { index: data.index, error: e },
        filePathStr: `../data/${type}_data.json`,
      });
      console.log("-----실패 내용 저장 성공-----");
      resolve(data);
    } finally {
      driver.sleep(1000);
      resolve(data);
    }
  });
};
