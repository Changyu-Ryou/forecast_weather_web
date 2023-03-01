import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

const MY_LOCATION_PIN_IMAGE_URL =
  'https://blog.kakaocdn.net/dn/lfAl1/btr1yAMhhrv/KorUy8Nb6H1z37fdyAaIgk/img.png';

const CurrentLocationMarkers = () => {
  const map = useMap();

  const { watch } = useFormContext();
  const currentLocationValue = watch('currentLocation');

  return currentLocationValue ? (
    <MapMarker
      position={currentLocationValue} // 마커를 표시할 위치
      onClick={(marker: kakao.maps.Marker) => {
        const lat = marker.getPosition().getLat();
        const lng = marker.getPosition().getLng();
        const moveLatLon = new kakao.maps.LatLng(lat, lng);
        map.panTo(moveLatLon);
      }}
      image={{
        src: MY_LOCATION_PIN_IMAGE_URL, // 마커이미지의 주소입니다
        size: { width: 30, height: 30 }, // 마커이미지의 크기입니다
        options: {
          offset: { x: 15, y: 30 }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        },
      }}
    />
  ) : null;
};

export default CurrentLocationMarkers;
