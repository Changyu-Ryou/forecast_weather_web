import { useEffect } from 'react';

import useFormContextHook from '../../../../hooks/useFormContextHook';
import { useControls } from 'react-zoom-pan-pinch';

import CaveMarkersList from './Cave/CaveMarkersList';
import ShrinesMarkersList from './Shirine/ShrineMarkersList';

export const MARKER_SIZE = 20;

const MarkersList = () => {
  const { resetTransform } = useControls();

  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType') ?? 'surface';
  const viewFilter = watch('viewFilter') ?? 'all';

  const contentFilter = watch('contentsFilter') ?? ['shrine'];

  useEffect(() => {
    resetTransform();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapTypeValue, viewFilter, contentFilter]);

  return (
    <>
      {contentFilter.includes('cave') && <CaveMarkersList />}
      {contentFilter.includes('shrine') && <ShrinesMarkersList />}
    </>
  );
};

export default MarkersList;
