import { useActivity } from '@stackflow/react';
import React, { useCallback, useEffect, useState } from 'react';

type CallbackHandler = {
  elementId: string;
  callback: (e: MouseEvent) => void;
};

export interface VisualViewPortFocusInputProps {
  wrapperRef?: React.RefObject<HTMLDivElement>;
  callbackHandler?: CallbackHandler[];
}

const KEYBOARD_OPEN_DELAY = 700;

function useVisualViewPortFocusInput({
  wrapperRef,
  callbackHandler,
}: VisualViewPortFocusInputProps) {
  const { isTop, isActive } = useActivity();
  const isTopAndActive = isTop && isActive;
  const [isOnKeyboard, setIsOnKeyboard] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleResize = () => {
    setTimeout(() => {
      if (!window.visualViewport) return;
      setIsOnKeyboard(window.innerHeight > window.visualViewport.height);
      setKeyboardHeight(window.innerHeight - window.visualViewport.height);
    });
  };

  const scrollToInput = useCallback(
    (e: MouseEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        // input/textarea focus 이벤트 발생 시 scrollIntoView

        // 1 => custom callback이 있으면 custom callback 실행
        const customCallback = callbackHandler?.find(
          ({ elementId }) => elementId === (e.target as HTMLElement)?.id
        ) as CallbackHandler;
        if (customCallback) {
          setTimeout(() => {
            customCallback.callback(e);
          }, KEYBOARD_OPEN_DELAY);
          return;
        }

        // 2=> custom callback이 없으면 기본 scrollIntoView 실행
        const el = e.target;
        setTimeout(() => {
          el.parentElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }, KEYBOARD_OPEN_DELAY);
      }
    },
    [callbackHandler]
  );

  useEffect(() => {
    if (!wrapperRef) return;
    if (isTopAndActive && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      wrapperRef.current?.addEventListener('click', scrollToInput);
      handleResize();
    }

    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      wrapperRef.current?.removeEventListener('click', scrollToInput);
    };
  }, [callbackHandler, isTopAndActive, wrapperRef, scrollToInput]);

  return { isOnKeyboard, keyboardHeight };
}

export default useVisualViewPortFocusInput;
