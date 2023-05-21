import React, { useEffect, useMemo } from 'react';
import Shrines from '../../constants/Shrines';
import useFormContextHook from '../../../../hooks/useFormContextHook';
import { useControls } from 'react-zoom-pan-pinch';

import MarkerItem from './MarkerItem';

export const MARKER_SIZE = 20;

const MarkersList = () => {
  const { resetTransform } = useControls();

  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType') ?? 'surface';
  const viewFilter = watch('viewFilter') ?? 'all';
  const visitedShrines = useMemo(() => {
    return watch('visited') ?? [];
  }, [watch]);

  const filteredMarkers = useMemo(() => {
    return Shrines.filter((item) => {
      if (viewFilter === 'all') return item.location === mapTypeValue;
      if (viewFilter === 'visitedOnly')
        return item.location === mapTypeValue && visitedShrines?.includes(item.name);
      if (viewFilter === 'notVisitedOnly')
        return item.location === mapTypeValue && !visitedShrines?.includes(item.name);
      return item.location === mapTypeValue;
    });
  }, [mapTypeValue, viewFilter, visitedShrines]);

  useEffect(() => {
    resetTransform();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapTypeValue, viewFilter]);

  return (
    <>
      {filteredMarkers?.map((item, index) => {
        return <MarkerItem key={index} shrine={item} />;
      })}
    </>
  );
};

export default MarkersList;
