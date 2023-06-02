import React from 'react';
import { KorokType } from '../../../constants/Koroks';
import { MARKER_SIZE } from './KorokMarkersList';
import { KeepScale, useControls } from 'react-zoom-pan-pinch';
import styled from '@emotion/styled';
import { receive } from '@stackflow/compat-await-push';

import DefaultMarker from '../../../../../assets/Image/korok_marker_default.png';
import VisitedMarker from '../../../../../assets/Image/korok_marker_visited.png';
import { useFlow } from '../../../../../stackflow';
import useFormContextHook from '../../../../../hooks/useFormContextHook';

type ItemProps = {
  korok: KorokType;
};

const KorokMarkerItem = ({ korok }: ItemProps) => {
  const { name, position } = korok;

  const [isSelected, setIsSelected] = React.useState(false);

  const { push } = useFlow();
  const ref = React.useRef<HTMLDivElement>(null);
  const { zoomToElement } = useControls();
  const { watch } = useFormContextHook();

  const visitedValue: string[] = watch('visitedKoroks') ?? [];
  const visitedCheckName = name + JSON.stringify(position);
  const isVisited = visitedValue?.includes(visitedCheckName || '');

  const itemClickHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    zoomToElement(e.target as HTMLDivElement, 0.9, 1000);
    setIsSelected(true);
    await receive(
      push('BottomSheet/KorokBottomSheet', {
        korokName: encodeURIComponent(name ?? ''),
        position: JSON.stringify(position),
      })
    );
    setIsSelected(false);
  };

  return (
    <div
      ref={ref}
      className={name}
      style={{
        transform: isSelected
          ? 'scale(1.4) translate(-50%, -50%)'
          : 'scale(1) translate(-50%, -50%)',
        position: 'absolute',
        top: position.y,
        left: position.x,

        zIndex: 2,
        border: name === '1335' ? '5px solid red' : 'none',
      }}
    >
      <KeepScale onClick={itemClickHandler}>
        <MarkerIcon src={isVisited ? VisitedMarker : DefaultMarker} size={MARKER_SIZE} />
      </KeepScale>
    </div>
  );
};

export default KorokMarkerItem;

const MarkerIcon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  z-index: 1000;
`;
