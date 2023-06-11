import { ReactElement, useEffect } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';

import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from './stackflow';
import { storage } from './hooks/useStorage';

function App(): ReactElement {
  useGetNativeEventBridge();

  // init storage
  const mapType = storage('mapType').get();

  useEffect(() => {
    //앱을 처음 시작하는 경우 defaultMessage를 저장
    if (!mapType) {
      storage('mapType').set('surface');
    }
  }, [mapType]);

  const formMathod = useForm({
    defaultValues: {
      mapType,
    },
  });

  return (
    <FormProvider {...formMathod}>
      <Stack />
    </FormProvider>
  );
}

export default App;
