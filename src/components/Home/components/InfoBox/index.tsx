import styled from '@emotion/styled';

import { useEffect, useMemo, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import { Spacing } from '../../../common/Spacing';
import useInfoBoxExpander from '../../hooks/useInfoBoxExpander';
import YoutubeWrapper from './YoutubeWrapper';
import NaverMapIcon from '../../../../assets/Icon/naver_map_icon.png';
import KakaoMapIcon from '../../../../assets/Icon/kakao_map_icon.png';

import { ItemType } from '../Markers/RestaurantMarkers';
import DefaultPlaceInfoSection from './DefaultPlaceInfoSection';
import AdditionalInfoSection from './AdditionalInfoSection';
import AccessoryBar from './AccessoryBar';
import Skelton from './Skelton';

function InfoBox() {
  const { watch, setValue } = useFormContext();
  const selectedItemValue: ItemType | undefined = watch('selectedItem');

  const sheetRef = useRef<BottomSheetRef>(null);
  const innerContentsRef = useRef<HTMLDivElement>(null);
  const { blockingBackground } = useInfoBoxExpander(sheetRef);
  const closeHandler = () => {
    setValue('infoBoxHeight', undefined);
    setValue('selectedItem', undefined);
  };

  return (
    <BottomSheet
      open={selectedItemValue?.index !== undefined}
      ref={sheetRef}
      initialFocusRef={innerContentsRef}
      blocking={blockingBackground}
      onDismiss={closeHandler}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        const bottomSheetHeader = (e.target as HTMLElement)?.getAttribute('data-rsbs-header');
        if (!bottomSheetHeader) return;
        setValue('infoBoxHeight', '100%');
      }}
      onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {
        const bottomSheetHeader = (e.target as HTMLElement)?.getAttribute('data-rsbs-header');
        if (!bottomSheetHeader) return;
        const yTouchPos = e?.touches[0]?.clientY;
        if (yTouchPos > (window.innerHeight / 3) * 2) {
          setValue('infoBoxHeight', '100%');
        } else {
          setValue('infoBoxHeight', undefined);
        }
      }}
      onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => {
        const timer = setTimeout(() => {
          const bottomSheetHeader = (e.target as HTMLElement)?.getAttribute('data-rsbs-header');
          if (!bottomSheetHeader) return;
          const target = e.target as HTMLElement;
          const targetOffsetTop = target.getBoundingClientRect().top;
          if (window.innerHeight - targetOffsetTop > (window.innerHeight / 3) * 2) {
            setValue('infoBoxHeight', '100%');
          } else {
            setValue('infoBoxHeight', undefined);
          }
        }, 500);

        return () => clearTimeout(timer);
      }}
      defaultSnap={({ minHeight }) => minHeight}
      snapPoints={({ maxHeight, minHeight }) => [
        Math.min(minHeight, (window.innerHeight / 5) * 3),
        maxHeight - maxHeight / 10,
      ]}
      onSpringEnd={(event) => {
        // console.log('event', event);
        // 위로 확장 드래깅 이벤트 발생 검출
        if (
          (event.type === 'RESIZE' && event.source === 'element') ||
          (event.type === 'SNAP' && event.source === 'dragging')
        ) {
          if ((sheetRef.current?.height ?? 0) > (window.innerHeight / 3) * 2)
            setValue('infoBoxHeight', '100%');
          else {
            setValue('infoBoxHeight', undefined);
          }
        }
      }}
      onSpringStart={(event) => {
        if (event.type === 'SNAP' && event.source === 'dragging') {
          setValue('infoBoxHeight', undefined);
        }
      }}
    >
      {selectedItemValue ? (
        <Wrapper onTouchMove={(e) => e.stopPropagation()}>
          <Spacing height={10} />
          <YoutubeWrapper
            index={selectedItemValue?.index}
            youtubeUrl={selectedItemValue?.youtubeUrl}
          />
          <Spacing height={14} />
          <ContentsWrapper>
            {/* 바텀시트 기본으로 보여주는 정보 = <DefaultPlaceInfoSection/> */}
            <DefaultPlaceInfoSection />
            <Spacing height={14} />

            {/* infoBox 확장시에 나오는 추가정보들 */}
            <AdditionalInfoSection />
          </ContentsWrapper>
          {/* infoBox 확장시에 나오는 지도 이동 버튼 */}
          <AccessoryBar />
        </Wrapper>
      ) : (
        <Skelton />
      )}
    </BottomSheet>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  height: auto;
  min-height: 100px;

  background-color: white;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-bottom: none;

  box-sizing: border-box;
  overflow: hidden;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 15px 15px 15px;
`;

export default InfoBox;
