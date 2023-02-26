import { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

export type ItemType = {
  index: number;
  youtubeUrl?: string;
  naverUrl?: string;
  title: string;
  category: string;
  address?: string;
  phone?: string;
  menus: string[];
  pictures: string[];
  x: string;
  y: string;
};

type Props = {
  position:
    | {
        lat: number;
        lng: number;
      }
    | {
        x: number;
        y: number;
      };
  item: ItemType;
};

const DEFAULT_PIN = 'https://blog.kakaocdn.net/dn/uH2dr/btr0Gbn9PEJ/11fhgd9KleULM2b9WdzrB1/img.png';
const SELECTED_PIN =
  'https://blog.kakaocdn.net/dn/bkSbb7/btr01TMjM93/BWE3z9mQBDJZY5Zou197Ek/img.png';

const MapMarkerItem = ({ position, item, ...rest }: Props) => {
  const map = useMap();

  const { setValue, watch } = useFormContext();
  const selectedItemValue = watch('selectedItem');

  const markerImage = getMargerImage(selectedItemValue?.index ?? -1, item.index);

  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={(marker: kakao.maps.Marker) => {
        // map level에 따라 마커 위치 위로 올리기
        // 하단 Info box가 가릴수도 있기 때문
        const mapLevel = map.getLevel();
        const calcLat = mapLevel > 4 ? 0.003 : 0.0005;
        const lat = marker.getPosition().getLat() - calcLat;
        const lng = marker.getPosition().getLng();
        const moveLatLon = new kakao.maps.LatLng(lat, lng);
        console.log('lat', mapLevel, moveLatLon);
        map.panTo(moveLatLon);

        setValue('selectedItem', item);
      }}
      image={markerImage}
      zIndex={markerImage?.options.zIndex}
    ></MapMarker>
  );
};

const getMargerImage = (selectedItemValue: number, index: number) => {
  const isSelected = selectedItemValue === index;
  const markerImage = isSelected ? SELECTED_PIN : DEFAULT_PIN;

  const size = isSelected ? { width: 55, height: 55 } : { width: 35, height: 35 };
  const offset = isSelected ? { x: 0, y: 55 } : { x: 0, y: 35 };

  return {
    src: markerImage, // 마커이미지의 주소입니다
    size: size, // 마커이미지의 크기입니다
    options: {
      offset, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      zIndex: isSelected ? 999 : 1,
    },
  };
};

export default MapMarkerItem;
