import { useEffect } from 'react';

function useGetNativeEventBridge() {
  const nativeEventHandler = (e: any) => {
    alert(e.data);
  };
  useEffect(() => {
    console.log('[[run bridge interface]]');
    // RN에서 웹으로 데이터를 전송했을때 message이벤트가 실행됩니다.
    document.addEventListener('message', nativeEventHandler);
    return () => document.removeEventListener('message', nativeEventHandler);
  }, []);

  return null;
}

export default useGetNativeEventBridge;
