import styled from '@emotion/styled';
import React from 'react';
import { useEffect } from 'react';
import { useControls } from 'react-zoom-pan-pinch';

import Markers from '../Markers/MarkersList';

type Props = {
  src: string;
  setResetHandler: (handler: () => void) => void;
};

const MapInnerContents = ({ src, setResetHandler }: Props) => {
  const { resetTransform } = useControls();

  useEffect(() => {
    setResetHandler(resetTransform);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContetenWrapper
      onClick={(e) => {
        // //x y 좌표를 구해서
        // const x = e.nativeEvent.offsetX;
        // const y = e.nativeEvent.offsetY;
        // console.log(x, y);
        // copyToClipboard(`{
        //       location: "sky",
        //       name: "",
        //       position:{x: ${x}, y: ${y},}
        //     },`);
      }}
    >
      <Markers />
      <img alt={'map-image'} src={src} />
    </ContetenWrapper>
  );
};

export default React.memo(MapInnerContents);

const ContetenWrapper = styled.div`
  position: relative;
`;
