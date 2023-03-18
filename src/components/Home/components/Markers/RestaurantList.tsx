import { ReactElement, useMemo } from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import RestaurantMarkers from './RestaurantMarkers';

import ssgData from '../../../../constants/ssg_all_data.json';
import zzyangData from '../../../../constants/zzyang_all_data.json';
import bigfaceData from '../../../../constants/bigface_all_data.json';
import kimsawonData from '../../../../constants/kim_sawon_all_data_geo.json';
import { useFormContext } from 'react-hook-form';

function RestaurantList(): ReactElement {
  const { watch } = useFormContext();
  const filterValue = watch('filter');

  const restaurantList = useMemo(() => {
    if (filterValue?.value === 'ssg') {
      return ssgData;
    }
    if (filterValue?.value === 'zzyang') {
      return zzyangData;
    }
    if (filterValue?.value === 'bigface') {
      return bigfaceData;
    }
    if (filterValue?.value === 'kim_sawon') {
      return kimsawonData;
    }

    return [...ssgData, ...zzyangData, ...bigfaceData, ...kimsawonData];
  }, [filterValue?.value]);

  return (
    <>
      {restaurantList.map((item) => {
        return (
          <RestaurantMarkers
            key={'marker_' + item.type + '_' + item.index + '_' + item.title}
            position={{ lat: parseFloat(item.y), lng: parseFloat(item.x) }}
            item={item}
          />
        );
      })}
    </>
  );
}

export default RestaurantList;
