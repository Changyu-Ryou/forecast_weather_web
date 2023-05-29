import React, { useEffect } from 'react';
import { CaveType } from '../../../constants/Caves';
import { MARKER_SIZE } from './CaveMarkersList';
import { KeepScale, useControls } from 'react-zoom-pan-pinch';
import styled from '@emotion/styled';
import { receive } from '@stackflow/compat-await-push';

import DefaultMarker from '../../../../../assets/Image/cave_marker_default.png';
import VisitedMarker from '../../../../../assets/Image/cave_marker_visited.png';
import { useFlow } from '../../../../../stackflow';
import useFormContextHook from '../../../../../hooks/useFormContextHook';

type ItemProps = {
  cave: CaveType;
};

const CaveMarkerItem = ({ cave }: ItemProps) => {
  const { name, position } = cave;

  const [isSelected, setIsSelected] = React.useState(false);

  const { push } = useFlow();
  const ref = React.useRef<HTMLDivElement>(null);
  const { zoomToElement } = useControls();
  const { watch } = useFormContextHook();

  const visitedValue: string[] = watch('visitedCaves', []) ?? [];
  const visitedCheckName = name + JSON.stringify(position);
  const isVisited = visitedValue?.includes(visitedCheckName || '');

  const itemClickHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('itemClickHandler', name, position);
    zoomToElement(e.target as HTMLDivElement, 0.9, 1000);
    setIsSelected(true);
    await receive(
      push('BottomSheet/CaveBottomSheet', {
        caveName: encodeURIComponent(name),
        position: JSON.stringify(position),
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

export default CaveMarkerItem;

const MarkerIcon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  z-index: 1000;
`;
