import { ReactElement, useEffect } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';
import 'react-spring-bottom-sheet/dist/style.css';
import './styles/bottomsheet.css';
import { useForm } from 'react-hook-form';
import { Stack } from './stackflow';

function App(): ReactElement {
  useGetNativeEventBridge();

  const formMathods = useForm({});

  return <Stack />;
}

export default App;
