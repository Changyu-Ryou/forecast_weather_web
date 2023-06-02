import { ReactElement, useEffect } from 'react';
import useGetNativeEventBridge from './hooks/useGetNativeEventBridge';
import './utils/firebase';
import './styles/bottomsheet.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from './stackflow';
import { storage } from './hooks/useStorage';

function App(): ReactElement {
  useGetNativeEventBridge();

  // 앱 시작일 저장 - 앱 시작일 기준으로 몇주차인지 계산하기 위함
  const mapType = storage('mapType').get();
  const visited = storage('visited').get();
  const visitedCaves = storage('visitedCaves').get();
  const visitedKorok = storage('visitedKoroks').get();
  const viewFilter = storage('viewFilter').get();
  const contentsFilter = storage('contentsFilter').get();
  const closedNoticeBanner = storage('closedNoticeBanner').get();

  useEffect(() => {
    //앱을 처음 시작하는 경우 defaultMessage를 저장
    if (!mapType) {
      storage('mapType').set('surface');
    }
    if (!visited) {
      storage('visited').set([]);
    }
    if (!viewFilter) {
      storage('viewFilter').set('all');
    }
    if (!visitedCaves) {
      storage('visitedCaves').set([]);
    }
    if (!visitedKorok) {
      storage('visitedKoroks').set([]);
    }
    if (!contentsFilter) {
      storage('contentsFilter').set(['shrine']);
    }
    if (!closedNoticeBanner) {
      console.log('no closedNoticeBanner');
      storage('closedNoticeBanner').set([]);
    }
    console.log('closedNoticeBanner', closedNoticeBanner);
  }, [
    closedNoticeBanner,
    contentsFilter,
    mapType,
    viewFilter,
    visited,
    visitedCaves,
    visitedKorok,
  ]);

  const formMathod = useForm({
    defaultValues: {
      mapType,
      visited,
      visitedCaves,
      visitedKorok,
      viewFilter,
      contentsFilter,
      closedNoticeBanner,
    },
  });

  return (
    <FormProvider {...formMathod}>
      <Stack />
    </FormProvider>
  );
}

export default App;
