import { useMemo } from 'react';

import useFormContextHook from '../../../../../hooks/useFormContextHook';

import { Koroks } from '../../../constants/Koroks';
import KorokMarkerItem from './KorokMarkerItem';

export const MARKER_SIZE = 20;

const KorokMarkersList = () => {
  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType') ?? 'surface';
  const viewFilter = watch('viewFilter') ?? 'all';
  const visitedKoroks = watch('visitedKoroks') ?? [];

  const filteredKoroksMarkers = useMemo(() => {
    return Koroks.filter((item) => {
      const visitedCheckName = item.name + JSON.stringify(item.position);
      if (viewFilter === 'all') return item.location === mapTypeValue;
      if (viewFilter === 'visitedOnly')
        return item.location === mapTypeValue && visitedKoroks?.includes(visitedCheckName);
      if (viewFilter === 'notVisitedOnly')
        return item.location === mapTypeValue && !visitedKoroks?.includes(visitedCheckName);
      return item.location === mapTypeValue;
    });
  }, [mapTypeValue, viewFilter, visitedKoroks]);

  return filteredKoroksMarkers ? (
    <>
      {filteredKoroksMarkers.map((item, index) => {
        return <KorokMarkerItem key={index} korok={item} />;
      })}
    </>
  ) : null;
};

export default KorokMarkersList;
