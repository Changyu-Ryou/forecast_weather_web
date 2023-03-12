import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Map, useInjectKakaoMapApi } from 'react-kakao-maps-sdk';

import useInitMapCenter, { CureentPositionType, GangnamPositon } from '../hooks/useMapCenter';
import InfoBox from './InfoBox';
import MyLocationController from './mapController/MyLocationController';
import ZoomController from './mapController/ZoomController';
import MarkerListFilter from './MarkerListFilter';
import CurrentLocationMarkers from './Markers/CurrentLocationMarkers';
import RestaurantList from './Markers/RestaurantList';
//https://react-kakao-maps-sdk.jaeseokim.dev/

function MapView(): ReactElement {
  const [position, setPosition] = useState(GangnamPositon);
  const { loading, error } = useInjectKakaoMapApi({
    appkey: process.env?.REACT_APP_KAKAO_MAP_API as string, // 발급 받은 APPKEY
    libraries: ['services', 'clusterer'], // 사용하고자 하는 라이브러리
  });
  const mapRef = useRef<kakao.maps.Map>(null);
  const { setValue, watch } = useFormContext();

  const currentLocationValue = watch('currentLocation');

  const setCurrentLocationIconHandler = (position: CureentPositionType) => {
    if (!position) return;
    setValue('currentLocation', position);
  };

  useInitMapCenter({
    mapRef,
    loading,
    error: !!error,
    setCurrentLocationIconHandler,
    currentPosition: currentLocationValue,
  });

  const message = useMemo(() => {
    if (error) return '에러가 발생했어요. 재시작 해주세요.';
    return 'loading...';
  }, [error]);

  // Native로 부터 bridge를 통해 location 좌표를 가져옴
  useEffect(() => {
    const currentLocationHandler = (event: any) => {
      setValue("currentLocation",{
        lat: Math.abs(Number(event.detail.lat)),
        lng: Math.abs(Number(event.detail.lng)),
      });
      setPosition({
        lat: Math.abs(Number(event.detail.lat)),
        lng: Math.abs(Number(event.detail.lng)),
      })
    };
    (window as any).addEventListener('getLocation', currentLocationHandler);
    return () => {
      (window as any).removeEventListener('getLocation', currentLocationHandler);
    };
  }, []);

  return !loading ? (
    <Map
      center={position}
      style={{ width: '100%', height: '100%', zIndex: 1 }}
      level={5}
      ref={mapRef}
      onClick={() => {
        setValue('infoBoxHeight', undefined);
        setValue('selectedItem', undefined);
      }}
      onDragEnd={(map) => {
        setPosition({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }}
    >
      {/* 지도 컨트롤러 */}
      <MyLocationController />
      <ZoomController />

      {/* 음식점 필터 */}
      <MarkerListFilter />

      {/* 현재 위치 마커 */}
      <CurrentLocationMarkers />

      {/* 음식점 마커 */}
      <RestaurantList />

      <InfoBox />
    </Map>
  ) : (
    <div>{message}</div>
  );
}

export default MapView;
