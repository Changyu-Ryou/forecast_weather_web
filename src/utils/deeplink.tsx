export const openYoutube = (videoId: string) => {
  const mobileFallback = `https://youtube.com/watch?v=${videoId}`,
    app = `vnd.youtube://${videoId}`;

  window.setTimeout(function () {
    window.open(mobileFallback, '_blank');
  }, 25);
  window.location.href = app;
};

export const openNaverMap = (url: string) => {
  const URLObj = new URL(url);
  const urlSearchParams = new URLSearchParams(URLObj.search);
  const placeId = urlSearchParams.get('id');

  const mobileFallback = url,
    app = `nmap://place?id=${placeId}`;

  const openWebviewTimer = window.setTimeout(function () {
    window.open(mobileFallback, '_blank');
  }, 500);
  window.location.href = app;

  const hideHandler = () => {
    window.removeEventListener('blur', hideHandler);
    clearTimeout(openWebviewTimer);
  };

  window.addEventListener('blur', hideHandler);
};

export const openKakaoMap = (url: string) => {
  const URLObj = new URL(url);
  //get url path
  const urlPath = URLObj.pathname;
  const placeId = urlPath?.slice(1);

  const mobileFallback = url,
    app = `kakaomap://place?id=${placeId}`;

  const openWebviewTimer = window.setTimeout(function () {
    window.open(mobileFallback, '_blank');
  }, 500);
  window.location.href = app;

  const hideHandler = () => {
    window.removeEventListener('blur', hideHandler);
    clearTimeout(openWebviewTimer);
  };

  window.addEventListener('blur', hideHandler);
};
