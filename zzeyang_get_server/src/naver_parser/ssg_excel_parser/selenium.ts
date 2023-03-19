import { By, until, WebDriver } from "selenium-webdriver";
import {
  addressParser,
  categoryParser,
  phoneNumberParser,
  shareMapUrlParser,
  titleParser,
  menuTextParser,
  menuWithPhotoTextParser,
  changeToPictureTab,
  companyProvidedPicturesParser,
  reviewScoreParser,
  visitorReviewCountParser,
  blogReviewCountParser,
} from "../common_parser";
import { storeData } from "../storeData";

export const runChromePage = async (
  driver: WebDriver,
  youtube_url: string,
  url: string,
  index: number,
  type: string
) => {
  return new Promise(async (resolve, reject) => {
    // headless로 크롬 드라이버 실행

    try {
      // 특정 URL 생성
      await driver.get(url);
      await driver.sleep(4000);

      // css selector로 가져온 element가 위치할때까지 최대 10초간 기다린다.
      await driver.wait(until.elementLocated(By.id("entryIframe")), 10000);

      const iframe = await driver.findElements(By.css("iframe"));

      driver.switchTo().frame(iframe.length - 1);
      let resultData: any = {
        type,
        index,
        youtubeUrl: youtube_url,
      };

      // 가게 상호 가져오기
      let title = await titleParser(driver);
      resultData["title"] = title;

      // 가게 업종 가져오기
      const category = await categoryParser(driver);
      resultData["category"] = category;

      // 가게 주소 가져오기
      const address = await addressParser(driver);
      resultData["address"] = address;

      // 네이버 정식 지도 url 가져오기
      const naver_map_url = await shareMapUrlParser(driver);
      resultData["naver_map_url"] = naver_map_url;

      // 가게 리뷰 평점 가져오기
      const naver_review_score = await reviewScoreParser(driver);
      resultData["naver_review_score"] = naver_review_score;

      // 가게 방문자 리뷰 갯수 가져오기
      const naver_visitor_review_count = await visitorReviewCountParser(driver);
      resultData["naver_visitor_review_count"] = naver_visitor_review_count;

      // 블로그 리뷰 갯수 가져오기
      const naver_blog_review_count = await blogReviewCountParser(driver);
      resultData["naver_blog_review_count"] = naver_blog_review_count;

      // 가게 전화번호 가져오기
      const phone = await phoneNumberParser(driver, index);
      if (phone) resultData["phone"] = phone;

      // 메뉴 텍스트 모으기
      const menusArr: any[] = [];
      await menuTextParser(driver, index, menusArr);
      await menuWithPhotoTextParser(driver, index, menusArr);
      resultData["menus"] = menusArr;

      // 사진 탭으로 이동
      await changeToPictureTab(driver);

      // 업체 제공 이미지 가져오기
      const pictureArr = await companyProvidedPicturesParser(driver);
      resultData["pictures"] = pictureArr;

      // 데이터 저장
      await storeData({
        data: resultData,
        filePathStr: `../data/${type}_data.json`,
      });
      console.log("-----저장 성공-----", resultData);
    } catch (e) {
      console.log(e);
      await storeData({
        data: { index, error: e },
        filePathStr: `../data/${type}_data.json`,
      });
      console.log("-----실패 내용 저장 성공-----");
      resolve("fail");
    } finally {
      driver.sleep(300);
      resolve("done");
    }
  });
};
