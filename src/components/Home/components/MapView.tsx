import React, { ReactElement } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
//https://react-kakao-maps-sdk.jaeseokim.dev/

function MapView(): ReactElement {
  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '100%' }}>
      <MapMarker
        position={{ lat: 33.55635, lng: 126.795841 }}
        image={{
          src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
          size: {
            width: 64,
            height: 69,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 27,
              y: 69,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
      />
    </Map>
  );
}

export default MapView;
