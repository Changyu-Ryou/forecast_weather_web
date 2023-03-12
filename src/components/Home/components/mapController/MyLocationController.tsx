import React, { ReactElement } from 'react';
import { MyLocationRounded } from '@mui/icons-material';
import styled from '@emotion/styled';
import { CureentPositionType, moveToMyLocation } from '../../hooks/useMapCenter';
import { useMap } from 'react-kakao-maps-sdk';
import { useFormContext } from 'react-hook-form';
import useSendNativeEventBridge from '../../../../hooks/useSendNativeEventBridge';

function MyLocationController(): ReactElement {
  const map = useMap();
  const { setValue, watch } = useFormContext();
  const currentLocationValue: CureentPositionType = watch('currentLocation');
  const { sendToNative } = useSendNativeEventBridge();

  return (
    <Wrapper className="my-location">
      <Button
        onClick={async () => {
          if (currentLocationValue) {
            map.panTo(new kakao.maps.LatLng(currentLocationValue.lat, currentLocationValue.lng));
            return;
          }
          sendToNative('permissionLocation', {});

          // const result = await moveToMyLocation({
          //   mapEl: map,
          //   setCurrentLocationIconHandler,
          //   panToMyLocation: true,
          // });
          // if (!result) {
          //   alert('위치정보를 찾을 수 없습니다.' + currentLocationValue ?? '');
          // }
        }}
      >
        <MyLocationRounded style={{}} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 50px;
  z-index: 1;

  border-radius: 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export default MyLocationController;
