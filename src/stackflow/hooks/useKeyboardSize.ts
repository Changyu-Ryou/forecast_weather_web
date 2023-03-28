import { useEffect, useMemo, useState } from 'react';

function useKeyboardSize(bridge?: any) {
  const [keyboardHeight, setKeyboardHeight] = useState(
    window.outerHeight - (window.visualViewport?.height ?? 0)
  );
  const [visualViewportOffsetTop, setVisualViewportOffsetTop] = useState(
    window.visualViewport?.offsetTop ?? 0
  );

  const bridgeStyleHandler = (scrollable: boolean) => {
    bridge?.styleCurrentRouter({
      router: {
        backSwipable: false,
        scrollable,
        navbar: false,
        enableSafeAreaInsets: false,
        IOS_ONLY_hideKeyboardAccessoryView: true,
      },
    });
  };

  const isKeyboardOn = useMemo(() => {
    return keyboardHeight > 10;
  }, [keyboardHeight]);

  useEffect(() => {
    let offsetTopTimer: number | undefined = undefined;
    const resizeHandler = () => {
      const keyboardHeight = window.outerHeight - (window.visualViewport?.height ?? 0);
      bridgeStyleHandler(keyboardHeight < 10);
      setKeyboardHeight(keyboardHeight);
      offsetTopTimer = window.setTimeout(() => {
        setVisualViewportOffsetTop(window.visualViewport?.offsetTop ?? 0);
      }, 150);

      return () => offsetTopTimer && clearTimeout(offsetTopTimer);
    };
    window.visualViewport?.addEventListener('resize', resizeHandler);
    window.visualViewport?.addEventListener('scroll', resizeHandler);
    return () => {
      window.visualViewport?.removeEventListener('resize', resizeHandler);
      window.visualViewport?.removeEventListener('scroll', resizeHandler);
    };
  }, []);

  return { keyboardHeight, visualViewportOffsetTop, isKeyboardOn };
}

export default useKeyboardSize;
