import { ReactElement, useEffect } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';
import 'react-spring-bottom-sheet/dist/style.css';
import './styles/bottomsheet.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from './stackflow';
import { storage } from './hooks/useStorage';

function App(): ReactElement {
  useGetNativeEventBridge();

  // 앱 시작일 저장 - 앱 시작일 기준으로 몇주차인지 계산하기 위함
  const startDate = storage('startDate').get();

  //온보딩용
  const showedSwipeUpOnboard = storage('showedSwipeUpOnboard').get() || false;
  const clickedLike = storage('clickedLike').get() || false;
  const clickedMyPageTooltip = storage('clickedMyPageTooltip').get() || false;

  // 로컬스토리지에 저장된 데이터
  const storedQuotes = storage('storedQuotes').get() || [];
  const slideIndex = storage('slideIndex').get();

  // 유저 데이터 전송용
  const userData = storage('userData').get() || {};
  //가입시 받는 첫번째 카드 수령여부
  const showFirstCard = storage('showFirstCard').get() || false;

  useEffect(() => {
    //앱을 처음 시작하는 경우 시작일을 저장
    if (!startDate) {
      storage('startDate').set(Date.now().toString());
    }
    if (!slideIndex) {
      storage('slideIndex').set(0);
    }
  }, []);

  const formMathod = useForm({
    defaultValues: {
      startDate,
      clickedLike,
      clickedMyPageTooltip,
      storedQuotes,
      slideIndex: parseInt(slideIndex) + 1,
      userData,
      showedSwipeUpOnboard,
      showFirstCard,
    },
  });

  return (
    <FormProvider {...formMathod}>
      <Stack />
    </FormProvider>
  );
}

export default App;
