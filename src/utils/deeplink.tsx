export const openYoutube = (videoId: string) => {
  const desktopFallback = `https://youtube.com/watch?v=${videoId}`,
    mobileFallback = `https://youtube.com/watch?v=${videoId}`,
    app = `vnd.youtube://${videoId}`;

  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = app;
    window.setTimeout(function () {
      window.location.href = mobileFallback;
    }, 25);
  } else {
    window.location.href = desktopFallback;
  }

  function killPopup() {
    window.removeEventListener('pagehide', killPopup);
  }

  window.addEventListener('pagehide', killPopup);
};
