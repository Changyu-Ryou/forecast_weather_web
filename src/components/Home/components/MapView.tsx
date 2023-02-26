import { ReactElement, useMemo, useRef, useState } from 'react';
import { Map, MarkerClusterer, useInjectKakaoMapApi } from 'react-kakao-maps-sdk';
import data from '../../../constants/data_geo.json';
import useMapCenter, { GangnamPositon } from '../hooks/useMapCenter';
import InfoBox from './InfoBox';
import MapMarkerItem from './Markers';
//https://react-kakao-maps-sdk.jaeseokim.dev/

function MapView(): ReactElement {
  const [position, setPosition] = useState(GangnamPositon);
  console.log('pr', process.env);
  const { loading, error } = useInjectKakaoMapApi({
    appkey: process.env?.REACT_APP_KAKAO_MAP_API as string, // 발급 받은 APPKEY
    libraries: ['services', 'clusterer'], // 사용하고자 하는 라이브러리
  });
  const mapRef = useRef<kakao.maps.Map>(null);

  useMapCenter({ mapRef, loading, error: !!error });

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
      onDragEnd={(map) => {
        setPosition({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }}
    >
      <MarkerClusterer
        averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel={8} // 클러스터 할 최소 지도 레벨
      >
        {data.map((item) => {
          return (
            <MapMarkerItem
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
