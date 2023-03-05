import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

export type ItemType = {
  type: string;
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
  naver_map_url?: string | undefined;
  kakao_detail_url?: string;
  naver_score?: string;
  visitor_review_count?: number | string;
  blog_review_count?: number | string;
  kakao_score?: string;
  naver_review_count?: string;
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

const ZZYANG_DEFAULT_PIN =
  'https://blog.kakaocdn.net/dn/b6Iosn/btr1UTyWR4d/6y6u9r77uw9Z6peorshgWK/img.png';
const ZZYANG_SELECTED_PIN =
  'https://blog.kakaocdn.net/dn/cC96uI/btr1Xxvw9F2/Yjl2IGnrrw6ka203eKo5p1/img.png';

const SSG_DEFAULT_PIN =
  'https://blog.kakaocdn.net/dn/b4dq03/btr1USUl9qD/2kwb9Ibu3skzqhLTfowokk/img.png';
const SSG_SELECTED_PIN =
  'https://blog.kakaocdn.net/dn/DaX2J/btr1XQuUhZs/wuopTcUtjWDKTJWHYzvy41/img.png';

const RestaurantMarkers = ({ position, item }: Props) => {
  const map = useMap();

  const { setValue, watch } = useFormContext();
  const selectedItemValue = watch('selectedItem');

  const markerImage = getMargerImage(item, selectedItemValue?.index ?? -1);

  const markerImageUrl = useMemo(() => {
    const isSelected = selectedItemValue?.index === item.index;
    if (item.type === 'zzyang') {
      return isSelected ? ZZYANG_SELECTED_PIN : ZZYANG_DEFAULT_PIN;
    }
    if (item.type === 'ssg') {
      return isSelected ? SSG_SELECTED_PIN : SSG_DEFAULT_PIN;
    }
    return isSelected ? SELECTED_PIN : DEFAULT_PIN;
  }, [item.index, item.type, selectedItemValue?.index]);

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
