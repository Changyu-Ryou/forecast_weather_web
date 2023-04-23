import { ReactElement, useEffect } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';
import 'react-spring-bottom-sheet/dist/style.css';
import './styles/bottomsheet.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from './stackflow';
import { storage } from './hooks/useStorage';
import { DEFAULT_TALKS } from './constants/messages';

function App(): ReactElement {
  useGetNativeEventBridge();

  // 앱 시작일 저장 - 앱 시작일 기준으로 몇주차인지 계산하기 위함
  const talks = storage('talks').get() || DEFAULT_TALKS;
  const birthday = storage('birthday').get();

  useEffect(() => {
    //앱을 처음 시작하는 경우 defaultMessage를 저장
    if (!talks) {
      storage('talks').set(DEFAULT_TALKS);
    }
  }, []);

  const formMathod = useForm({
    defaultValues: {
      talks,
      birthday,
      typing: true,
    },
  });

  return (
    <FormProvider {...formMathod}>
      <Stack />
    </FormProvider>
  );
}

export default App;
