import { ReactElement, useMemo } from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import RestaurantMarkers from './RestaurantMarkers';

import ssgData from '../../../../constants/ssg_all_data.json';
import zzyangData from '../../../../constants/zzyang_all_data.json';
import bigfaceData from '../../../../constants/bigface_all_data.json';
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

    return [...ssgData, ...zzyangData, ...bigfaceData];
  }, [filterValue?.value]);

  return (
    <>
      {restaurantList.map((item) => {
        return (
          <RestaurantMarkers
            key={item.type + ' ' + item.index}
            position={{ lat: parseFloat(item.y), lng: parseFloat(item.x) }}
            item={item}
          />
        );
      })}
    </>
  );
}

export default RestaurantList;
