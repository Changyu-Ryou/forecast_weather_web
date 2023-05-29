import { useMemo } from 'react';
import Shrines from '../../../constants/Shrines';

import useFormContextHook from '../../../../../hooks/useFormContextHook';

import MarkerItem from './ShrineMarkerItem';

export const MARKER_SIZE = 20;

const ShrinesMarkersList = () => {
  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType') ?? 'surface';
  const viewFilter = watch('viewFilter') ?? 'all';
  const visitedShrines = watch('visited', []) ?? [];

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

  return (
    <>
      {filteredMarkers?.map((item, index) => {
        return <MarkerItem key={index} shrine={item} />;
      }) ?? null}
    </>
  );
};

export default ShrinesMarkersList;
