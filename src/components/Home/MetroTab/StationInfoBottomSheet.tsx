import styled from '@emotion/styled';
import { SpaceBar } from '@mui/icons-material';
import { Divider, Drawer } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { Spacing } from '../../common/Spacing';
import { LineType, LINE_COLOR_HEX } from './constant/lines';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';

interface Props {
  openDetailBottomSheetHandler: [LineType, (open: LineType) => void];
}

function StationInfoBottomSheet({ openDetailBottomSheetHandler }: Props): ReactElement {
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = openDetailBottomSheetHandler;
  if (!openDetailBottomSheet) return <></>;

  const { station_id, station_name, line_id, next_station, toilet } = openDetailBottomSheet;

  const toiletDisplayText = () => {
    if (!toilet) return '개찰구 밖에 화장실이 있습니다.';
    if (toilet === 'GATE') return '개찰구 안에 화장실이 있습니다.';
    if (toilet === 'PLATFORM') return '승강장 쪽에 화장실이 있습니다.';
  };

  const renderIcon = () => {
    if (toilet === 'GATE')
      return (
        <StarRoundedIcon
          id={`station_id_${station_id}`}
          style={{
            width: '15px',
            height: '15px',
            color: LINE_COLOR_HEX[line_id],
          }}
        />
      );
    if (toilet === 'PLATFORM')
      return (
        <StarsRoundedIcon
          id={`station_id_${station_id}`}
          style={{
            width: '15px',
            height: '15px',
            color: LINE_COLOR_HEX[line_id],
          }}
        />
      );
    return null;
  };

  return (
    <Drawer
      anchor={'bottom'}
      open={!!openDetailBottomSheet}
      onClose={() => setOpenDetailBottomSheet(undefined)}
    >
      <Wrapper>
        <HeaderInfo lineId={openDetailBottomSheet.line_id}>
          <p id="line-name">{openDetailBottomSheet.line_name}</p>
          <p id="station-name">{openDetailBottomSheet.station_name} 역</p>
        </HeaderInfo>
        <Spacing />
        <Divider />
        <Spacing />
        <DetailInfo>
          {renderIcon()}
          {toiletDisplayText()}
        </DetailInfo>
      </Wrapper>
    </Drawer>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  padding: 20px;
  box-sizing: border-box;
`;

const HeaderInfo = styled.div<{ lineId: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  #line-name {
    padding: 3px;
    background-color: ${({ lineId }) => LINE_COLOR_HEX[lineId]};
    border-radius: 5px;
    font-size: 13px;
    color: white;
    margin-bottom: 5px;
  }

  #station-name {
    font-size: 20px;
    color: black;
    font-weight: 700;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export default StationInfoBottomSheet;
