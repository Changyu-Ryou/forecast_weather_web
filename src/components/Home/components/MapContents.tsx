import React, { useMemo } from 'react';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import styled from '@emotion/styled';

import useResizeMap from '../hooks/useResizeMap';
import { MapController } from './MapController';
import useFormContextHook from '../../../hooks/useFormContextHook';

import { SearchBarDialog } from './Search/SearchBarDialog';
import VisitedCounter from './VisitedCounter';

import SkyMap from '../../../assets/maps/sky_map.png';
import SurfaceMap from '../../../assets/maps/surface_map.png';
import DepthsMap from '../../../assets/maps/depths_map.png';
import MapInnerContents from './MapInnerContents';

const zoomFactor = 15;

export const MapContents: React.FC<any> = () => {
  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType');
  const [resetHandler, setResetHandler] = React.useState<() => void>(() => {});

  const src = useMemo(() => {
    switch (mapTypeValue) {
      case 'sky':
        return SkyMap;
      case 'surface':
        return SurfaceMap;
      case 'depths':
        return DepthsMap;
      default:
        return SurfaceMap;
    }
  }, [mapTypeValue]);

  const { setContainer, imageScale, containerHeight, containerWidth } = useResizeMap({
    src,
    resetHandler,
  });

  return (
    <Wrapper ref={(el: HTMLDivElement | null) => setContainer(el)}>
      <VisitedCounter />
      {imageScale > 0 && (
        <TransformWrapper
          key={`${containerWidth}x${containerHeight}`}
          initialScale={imageScale}
          minScale={imageScale}
          maxScale={imageScale * zoomFactor}
          wheel={{ step: 0.01 }}
          pinch={{ step: 0.01 }}
          centerOnInit
        >
          <SearchBarDialog />
          <ControllerWrapper>
            <MapController />
          </ControllerWrapper>
          <TransformComponent
            wrapperStyle={{
              width: '100%',
              height: '100%',
            }}
          >
            <MapInnerContents src={src} setResetHandler={setResetHandler} />
          </TransformComponent>
        </TransformWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const ControllerWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  z-index: 999;
`;
