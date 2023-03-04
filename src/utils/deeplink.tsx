export const openYoutube = (videoId: string) => {
  const desktopFallback = `https://youtube.com/watch?v=${videoId}`,
    mobileFallback = `https://youtube.com/watch?v=${videoId}`,
    app = `vnd.youtube://${videoId}`;

  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = app;
    window.setTimeout(function () {
      window.open(mobileFallback, '_blank');
    }, 250);
  } else {
    window.location.href = desktopFallback;
  }
};
