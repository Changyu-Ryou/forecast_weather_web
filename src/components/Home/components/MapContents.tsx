import React, { useMemo } from 'react';

import { TransformWrapper, TransformComponent, KeepScale } from 'react-zoom-pan-pinch';

import { normalizeArgs } from '../utils/normarlize';
import styled from '@emotion/styled';

import { copyToClipboard } from '../../../utils/link';
import useResizeMap from '../hooks/useResizeMap';
import { MapController } from './MapController';
import useFormContextHook from '../../../hooks/useFormContextHook';

import SkyMap from '../../../assets/maps/sky_map.png';
import SurfaceMap from '../../../assets/maps/surface_map.png';
import DepthsMap from '../../../assets/maps/depths_map.png';

import Markers from './Markers/MarkersList';
import { SearchBarDialog } from './Search/SearchBarDialog';
import VisitedCounter from './VisitedCounter';

const alt = 'example';
const zoomFactor = 15;

export const MapContents: React.FC<any> = () => {
  const { watch } = useFormContextHook();
  const mapTypeValue = watch('mapType');

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

  const { setContainer, imageScale, containerHeight, containerWidth } = useResizeMap({ src });

  const renderContents = useMemo(() => {
    return (
      <ContetenWrapper
        onClick={(e) => {
          // //x y 좌표를 구해서
          // const x = e.nativeEvent.offsetX;
          // const y = e.nativeEvent.offsetY;
          // copyToClipboard(`{
          //       location: "sky",
          //       name: "",
          //       position:{x: ${x}, y: ${y},}
          //     },`);
        }}
      >
        <Markers />
        <img alt={alt} src={src} />
      </ContetenWrapper>
    );
  }, [src]);

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
          pinch={{ step: 0.1, disabled: true }}
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
            {renderContents}
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

const ContetenWrapper = styled.div`
  position: relative;
`;

const ControllerWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  z-index: 999;
`;
