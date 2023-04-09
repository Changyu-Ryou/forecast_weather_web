type EventObject = {
  id: number;
  eventName: RNToReactEventNames | ReactToRNEventNames;
  data: object;
};
// RN -> REACT
type RNToReactEventNames = 'pressButton' | 'newCard';
// REACT -> RN
type ReactToRNEventNames = 'tabChange' | 'showInterstitialAd' | 'permissionLocation';

function useSendNativeEventBridge() {
  const sendToNative = (eventName: ReactToRNEventNames, data: object) => {
    const newWindow = window as any;
    if (newWindow.ReactNativeWebView) {
      const sendData: EventObject = {
        id: Math.floor(Math.random() * 1000) + 1,
        eventName: eventName,
        data: data,
      };
      // RN에서 데이터는 반드시 문자열로 받을 수 있기 때문에
      // JSON.stringify를 사용합니다.
      newWindow.ReactNativeWebView.postMessage(JSON.stringify(sendData));
    } else {
      console.log('[[not found ReactNativeWebView bridge]]');
    }
  };

  return { sendToNative };
}

export default useSendNativeEventBridge;

/** bridge 호출부 정리
 *
 * showInterstitialAd = 전면 광고 호출
 * permissionLocation = matzip용 위치정보 요청
 *
 *
 * */
