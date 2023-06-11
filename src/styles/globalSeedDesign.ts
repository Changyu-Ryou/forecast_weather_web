(function () {
  const el = document.documentElement;
  el.dataset.seed = '';

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  if (prefersLight.matches) {
    if ('addEventListener' in prefersLight) {
      prefersLight.addEventListener('change', apply);
    } else if ('addListener' in prefersLight) {
      (prefersLight as any)?.addListener(apply);
    }
  } else if (prefersDark.matches) {
    if ('addEventListener' in prefersDark) {
      prefersDark.addEventListener('change', apply);
    } else if ('addListener' in prefersDark) {
      (prefersLight as any)?.addListener(apply);
    }
  }

  function apply() {
    console.log('hello', prefersDark.matches);
    el.dataset.seedScaleColor = prefersDark.matches ? 'dark' : 'light';
  }

  apply();
})();

export default {};
