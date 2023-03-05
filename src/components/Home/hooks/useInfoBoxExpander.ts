import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BottomSheetRef } from 'react-spring-bottom-sheet';

const useInfoBoxExpander = (sheetRef: React.RefObject<BottomSheetRef>) => {
  const { watch } = useFormContext();
  const [blockingBackground, setBlockingBackground] = useState(false);

  const infoBoxHeightValue = watch('infoBoxHeight');

  useEffect(() => {
    if (infoBoxHeightValue === '100%') {
      sheetRef.current?.snapTo(({ snapPoints }) => Math.max(...snapPoints));
      setBlockingBackground(true);
      return;
    } else {
      setBlockingBackground(false);
    }
  }, [infoBoxHeightValue, sheetRef]);

  return { blockingBackground };
};

export default useInfoBoxExpander;
