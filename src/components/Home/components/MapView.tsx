import { ReactElement, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Map, MarkerClusterer, useInjectKakaoMapApi } from 'react-kakao-maps-sdk';
import data from '../../../constants/data_geo.json';
import useMapCenter, { CureentPositionType, GangnamPositon } from '../hooks/useMapCenter';
import InfoBox from './InfoBox';
import MyLocationController from './mapController/MyLocationController';
import ZoomController from './mapController/ZoomController';
import CurrentLocationMarkers from './Markers/CurrentLocationMarkers';
import RestaurantMarkers from './Markers/RestaurantMarkers';
//https://react-kakao-maps-sdk.jaeseokim.dev/

function MapView(): ReactElement {
  const [position, setPosition] = useState(GangnamPositon);
  const { loading, error } = useInjectKakaoMapApi({
    appkey: process.env?.REACT_APP_KAKAO_MAP_API as string, // 발급 받은 APPKEY
    libraries: ['services', 'clusterer'], // 사용하고자 하는 라이브러리
  });
  const mapRef = useRef<kakao.maps.Map>(null);
  const { setValue } = useFormContext();

  const setCurrentLocationIconHandler = (position: CureentPositionType) => {
    if (!position) return;
    setValue('currentLocation', position);
  };

  useMapCenter({ mapRef, loading, error: !!error, setCurrentLocationIconHandler });

  const message = useMemo(() => {
    if (error) return '에러가 발생했어요. 재시작 해주세요.';
    return 'loading...';
  }, [error]);

  return !loading ? (
    <Map
      center={position}
      style={{ width: '100%', height: '100%' }}
      level={5}
      ref={mapRef}
      onClick={() => {
        setValue('selectedItem', undefined);
      }}
      onDragEnd={(map) => {
        setPosition({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }}
    >
      <MyLocationController />
      <ZoomController />
      <CurrentLocationMarkers />
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={8} // 클러스터 할 최소 지도 레벨
      >
        {data.map((item) => {
          return (
            <RestaurantMarkers
              key={item.index}
              position={{ lat: parseFloat(item.y), lng: parseFloat(item.x) }}
              item={item}
            />
          );
        })}
      </MarkerClusterer>
      <InfoBox />
    </Map>
  ) : (
    <div>{message}</div>
  );
}

export default MapView;
