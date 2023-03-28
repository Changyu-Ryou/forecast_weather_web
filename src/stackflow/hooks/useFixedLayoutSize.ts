import { useCallback, useEffect } from 'react';
import useKeyboardSize from './useKeyboardSize';

function useFixedLayoutSize() {
  const { keyboardHeight, visualViewportOffsetTop, isKeyboardOn } = useKeyboardSize();

  const handleFixedTopAndBottom = useCallback(
    (AppScreenEl: HTMLElement, { topOnly }: { topOnly?: boolean }) => {
      AppScreenEl.style.top = `${visualViewportOffsetTop}px`;
      if (topOnly) return;
      AppScreenEl.style.bottom = isKeyboardOn
        ? `${keyboardHeight - visualViewportOffsetTop}px`
        : '0px';
    },
    [isKeyboardOn, keyboardHeight, visualViewportOffsetTop]
  );

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      const child = root.children[0] ?? [];
      const AppScreen = child as HTMLElement;

      // const AppScreen = child.children[child.children?.length - 1] as HTMLElement;
      if (AppScreen) {
        AppScreen.style.height = 'auto';
        AppScreen.style.position = 'fixed';

        AppScreen.style.top = `0`;
        AppScreen.style.bottom = `0`;
        AppScreen.style.left = `0`;
        AppScreen.style.right = `0`;

        AppScreen.style.willChange = 'top, bottom, height';

        handleFixedTopAndBottom(AppScreen as HTMLElement, { topOnly: true });
        // visualViewport.offsetTop이 늦게 반영되어 0이 되는 경우가 있어 재보정하는 타이머를 추가함.
        const Timer = setTimeout(() => {
          handleFixedTopAndBottom(AppScreen as HTMLElement, {});
        }, 200);
        return () => {
          clearTimeout(Timer);
          if (AppScreen) {
            AppScreen.style.top = `0`;
            AppScreen.style.bottom = `0`;
          }
        };
      }
    }
  }, [keyboardHeight, visualViewportOffsetTop]);

  return undefined;
}

export default useFixedLayoutSize;
