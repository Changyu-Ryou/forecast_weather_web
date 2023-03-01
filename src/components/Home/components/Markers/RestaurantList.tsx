import React, { ReactElement } from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import RestaurantMarkers from './RestaurantMarkers';
import data from '../../../../constants/data_geo.json';

function RestaurantList(): ReactElement {
  return (
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
  );
}

export default RestaurantList;
