import { ReactElement } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';
import 'react-spring-bottom-sheet/dist/style.css';
import './styles/bottomsheet.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from './stackflow';
import { storage } from './hooks/useStorage';

function App(): ReactElement {
  useGetNativeEventBridge();

  const showedSwipeUpOnboard = storage('showedSwipeUpOnboard').get() || false;
  const clickedLike = storage('clickedLike').get() || false;
  const clickedMyPageTooltip = storage('clickedMyPageTooltip').get() || false;
  const storedQuotes = storage('storedQuotes').get() || [];
  const storedCards = storage('storedCards').get() || [];
  const userData = storage('userData').get() || {};

  const formMathod = useForm({
    defaultValues: {
      clickedLike,
      clickedMyPageTooltip,
      storedQuotes,
      storedCards,
      userData,
      showedSwipeUpOnboard,
    },
  });

  return (
    <FormProvider {...formMathod}>
      <Stack />
    </FormProvider>
  );
}

export default App;
