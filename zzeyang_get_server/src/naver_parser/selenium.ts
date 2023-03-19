import { By, Builder, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { storeData } from './storeData';

export const runChrome = async () => {
  // headless로 크롬 드라이버 실행
  const driver: WebDriver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
      new chrome.Options()
        // .headless()
        .addArguments('--disable-gpu', 'window-size=1920x1080', 'lang=ko_KR')
    )
    .build();
  const userAgent = await driver.executeScript('return navigator.userAgent;');
  console.log('[UserAgent]', userAgent);
  return driver;
};
