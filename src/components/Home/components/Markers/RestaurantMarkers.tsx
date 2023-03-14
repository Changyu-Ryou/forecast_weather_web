import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import {
  BIGFACE_DEFAULT_PIN,
  BIGFACE_SELECTED_PIN,
  DEFAULT_PIN,
  KIMSAWON_DEFAULT_PIN,
  KIMSAWON_SELECTED_PIN,
  SELECTED_PIN,
  SSG_DEFAULT_PIN,
  SSG_SELECTED_PIN,
  ZZYANG_DEFAULT_PIN,
  ZZYANG_SELECTED_PIN,
} from './markerPinImage';

export type ItemType = {
  type: string;
  index: number;
  youtubeUrl?: string;
  naverUrl?: string;
  title: string;
  category: string;
  address?: string;
  phone?: string;
  menus?: string[];
  pictures?: string[];
  x: string;
  y: string;
  naver_map_url?: string;
  kakao_detail_url?: string;
  naver_review_score?: string;
  naver_visitor_review_count?: string;
  naver_blog_review_count?: string;
  kakao_score?: string;
  naver_review_count?: string;
  kakao_review_count?: string;
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

const RestaurantMarkers = ({ position, item }: Props) => {
  const map = useMap();

  const { setValue, watch } = useFormContext();
  const selectedItemValue = watch('selectedItem');

  const markerImage = getMargerImage(item, selectedItemValue?.index ?? -1);

  const markerImageUrl = useMemo(() => {
    const isSelected =
      selectedItemValue?.index === item.index &&
      selectedItemValue?.type === item.type &&
      selectedItemValue.title === item.title;

    if (item.type === 'zzyang') {
      return isSelected ? ZZYANG_SELECTED_PIN : ZZYANG_DEFAULT_PIN;
    }
    if (item.type === 'ssg') {
      return isSelected ? SSG_SELECTED_PIN : SSG_DEFAULT_PIN;
    }
    if (item.type === 'bigface') {
      return isSelected ? BIGFACE_SELECTED_PIN : BIGFACE_DEFAULT_PIN;
    }
    if (item.type === 'kim_sawon') {
      return isSelected ? KIMSAWON_SELECTED_PIN : KIMSAWON_DEFAULT_PIN;
    }
    return isSelected ? SELECTED_PIN : DEFAULT_PIN;
  }, [item.index, item.type, selectedItemValue?.index, selectedItemValue?.type]);

  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={(marker: kakao.maps.Marker) => {
        // map level에 따라 마커 위치 위로 올리기
        // 하단 Info box가 가릴수도 있기 때문
        const mapLevel = map.getLevel();
        const calcLat = () => {
          switch (mapLevel) {
            case 1:
              return 0.0003;
            case 2:
              return 0.0005;
            case 3:
              return 0.001;
            case 4:
              return 0.002;
            case 5:
              return 0.004;
            case 6:
              return 0.008;
            case 7:
              return 0.015;
            case 8:
              return 0.03;
            case 9:
              return 0.06;
            case 10:
              return 0.1;
            case 11:
              return 0.2;
            case 12:
              return 0.4;
            case 13:
              return 0.8;
            case 14:
              return 1.6;
            default:
              return 0.0045;
          }
        };
        const lat = marker.getPosition().getLat() - calcLat();
        const lng = marker.getPosition().getLng();
        const moveLatLon = new kakao.maps.LatLng(lat, lng);
        map.panTo(moveLatLon);

        setValue('selectedItem', item);
      }}
      image={{
        ...markerImage,
        src: markerImageUrl,
      }}
      zIndex={markerImage?.options.zIndex}
    />
  );
};

const getMargerImage = (item: ItemType, selectedItemValue: number) => {
  const isSelected = selectedItemValue === item.index;

  const size = isSelected ? { width: 55, height: 55 } : { width: 35, height: 35 };
  const offset = isSelected ? { x: 0, y: 55 } : { x: 0, y: 35 };

  return {
    size: size, // 마커이미지의 크기입니다
    options: {
      offset, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      zIndex: isSelected ? 999 : 1,
    },
  };
};

export default RestaurantMarkers;
