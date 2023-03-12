import { useEffect } from 'react';

function useGetNativeEventBridge() {
  const nativeEventHandler = (e: any) => {
    const parsedData = JSON.parse(e.data);
    if (parsedData.eventName === 'getLocation') {
      const event = new CustomEvent('getLocation', {
        ...parsedData.data,
        detail:{
          ...parsedData.data
        }
      });
      window.dispatchEvent(event);
    }
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
