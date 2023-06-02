import { useMemo } from 'react';

import useFormContextHook from '../../../../../hooks/useFormContextHook';

import { Caves } from '../../../constants/Caves';
import CaveMarkerItem from './CaveMarkerItem';

export const MARKER_SIZE = 20;

const CaveMarkersList = () => {
  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType') ?? 'surface';
  const viewFilter = watch('viewFilter') ?? 'all';
  const visitedCaves = watch('visitedCaves') ?? [];

  const filteredCavesMarkers = useMemo(() => {
    return Caves.filter((item) => {
      const visitedCheckName = item.name + JSON.stringify(item.position);
      if (viewFilter === 'all') return item.location === mapTypeValue;
      if (viewFilter === 'visitedOnly')
        return item.location === mapTypeValue && visitedCaves?.includes(visitedCheckName);
      if (viewFilter === 'notVisitedOnly')
        return item.location === mapTypeValue && !visitedCaves?.includes(visitedCheckName);
      return item.location === mapTypeValue;
    });
  }, [mapTypeValue, viewFilter, visitedCaves]);

  return filteredCavesMarkers ? (
    <>
      {filteredCavesMarkers.map((item, index) => {
        return <CaveMarkerItem key={index} cave={item} />;
      })}
    </>
  ) : null;
};

export default CaveMarkersList;
