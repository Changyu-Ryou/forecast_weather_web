import { By, WebDriver } from 'selenium-webdriver';

// 가게 상호 가져오기
export const titleParser = async (driver: WebDriver) => {
  const title = await driver.findElement(By.className('Fc1rA')).getText();
  return title;
};

// 가게 업종 가져오기
export const categoryParser = async (driver: WebDriver) => {
  const category = await driver.findElement(By.className('DJJvD')).getText();
  return category;
};

// 가게 주소 가져오기
export const addressParser = async (driver: WebDriver) => {
  const address = await driver.findElement(By.className('LDgIH')).getText();
  return address;
};

// 네이버 정식 지도 url 가져오기
export const shareMapUrlParser = async (driver: WebDriver) => {
  const shareButtons = await driver.findElement(By.css('.D_Xqt.naver-splugin.spi_sns_share'));
  if (shareButtons) {
    const map_url = await shareButtons?.getAttribute('data-url');
    if (map_url) return map_url;
  }
  return undefined;
};

// 가게 전화번호 가져오기
export const phoneNumberParser = async (driver: WebDriver, index: number) => {
  try {
    const phone = await driver.findElement(By.className('xlx7Q'))?.getText();
    return phone;
  } catch (e) {
    console.log('[' + index + '] phone number error', e);
    return undefined;
  }
};

// 가게 리뷰 평점 가져오기
export const reviewScoreParser = async (driver: WebDriver) => {
  try {
    const score = await driver.findElement(By.css('.LXIwF em')).getText();
    return score;
  } catch (e) {
    return undefined;
  }
};

// 가게 방문자 리뷰 갯수 가져오기
export const visitorReviewCountParser = async (driver: WebDriver) => {
  try {
    const review_section = await driver.findElements(By.css('.PXMot a.place_bluelink em'));
    const visitor_review_count = await review_section[0].getText();
    return visitor_review_count;
  } catch (e) {
    return 0;
  }
};

// 가게 블로그 리뷰 갯수 가져오기
export const blogReviewCountParser = async (driver: WebDriver) => {
  try {
    const review_section = await driver.findElements(By.css('.PXMot a.place_bluelink em'));
    const blog_review_count = await review_section[1].getText();
    return blog_review_count;
  } catch (e) {
    return 0;
  }
};

// 텍스트만 있는 가게 메뉴 텍스트 가져오기
export const menuTextParser = async (driver: WebDriver, index: number, menusArr: any[]) => {
  try {
    const menus = await driver.findElements(By.css('.vEsKn > a.place_bluelink'));
    for await (const item of menus) {
      menusArr.push(await item.getText());
    }
    return menusArr;
  } catch (e) {
    console.log('[' + index + '] menus text pasing error', e);
    return [];
  }
};

// 이미지랑 같이 있는 가게 메뉴 텍스트 가져오기
export const menuWithPhotoTextParser = async (
  driver: WebDriver,
  index: number,
  menusArr: any[]
) => {
  try {
    const photoMenus = await driver.findElements(By.css('.MENyI'));
    for await (const item of photoMenus) {
      menusArr.push(await item.getText());
    }
    return menusArr;
  } catch (e) {
    console.log('[' + index + '] menus text with image pasing error', e);
    return [];
  }
};

//  사진 탭으로 전환
export const changeToPictureTab = async (driver: WebDriver) => {
  const tabs = await driver.findElements(By.css('.veBoZ'));
  const tabsArr = [];
  for await (const item of tabs) {
    tabsArr.push(await item.getText());
  }
  const pictureTabIndex = tabsArr.findIndex((item) => item === '사진');
  await tabs[pictureTabIndex].click();
  await driver.sleep(3000);
};

// 업체 제공 사진 가져오기
export const companyProvidedPicturesParser = async (driver: WebDriver) => {
  const pictureMenus = await driver.findElement(By.css('.BSSHM')).getText();

  // 메뉴 업체 사진 링크
  const pictureArr = [];
  if (pictureMenus === '업체사진') {
    await driver.findElement(By.css('.BSSHM')).click();
    await driver.sleep(3000);

    const picture = await driver.findElements(By.css('.wzrbN .place_thumb > img'));
    for await (const item of picture) {
      if (pictureArr.length > 4) break;
      pictureArr.push(await item.getAttribute('src'));
    }
  }
  return pictureArr;
};
