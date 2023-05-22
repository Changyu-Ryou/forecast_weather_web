import React, { useEffect } from 'react';
import { ShirneType } from '../../constants/Shrines';
import { MARKER_SIZE } from './MarkersList';
import { KeepScale, useControls } from 'react-zoom-pan-pinch';
import styled from '@emotion/styled';
import { receive } from '@stackflow/compat-await-push';

import DefaultMarker from '../../../../assets/Image/shrine_marker_default.png';
import DisabledMarker from '../../../../assets/Image/shrin_marker_disabled.png';
import VisitedMarker from '../../../../assets/Image/shrine_marker_visited.png';
import { useFlow } from '../../../../stackflow';
import useFormContextHook from '../../../../hooks/useFormContextHook';

type ItemProps = {
  shrine: ShirneType;
};

const MarkerItem = ({ shrine }: ItemProps) => {
  const { name, position } = shrine;

  const [isSelected, setIsSelected] = React.useState(false);

  const { push } = useFlow();
  const ref = React.useRef<HTMLDivElement>(null);
  const { zoomToElement } = useControls();
  const { setValue, watch } = useFormContextHook();

  const visitedValue: string[] = watch('visited', []) ?? [];
  const isVisited = visitedValue?.includes(shrine.name || '');

  const itemClickHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    zoomToElement(e.target as HTMLDivElement, 0.9, 1000);
    setIsSelected(true);
    await receive(
      push('BottomSheet/ShrineBottomSheet', {
        shrineName: name,
      })
    );
    setIsSelected(false);
  };

  return (
    <div
      ref={ref}
      onClick={itemClickHandler}
      className={name}
      style={{
        transform: isSelected ? 'scale(1.4)' : 'scale(1)',
        position: 'absolute',
        top: position.y - MARKER_SIZE,
        left: position.x - MARKER_SIZE / 2,
        zIndex: 2,
      }}
    >
      <KeepScale>
        <MarkerIcon src={isVisited ? VisitedMarker : DefaultMarker} size={MARKER_SIZE} />
      </KeepScale>
    </div>
  );
};

export default MarkerItem;

const MarkerIcon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  z-index: 1000;
`;
