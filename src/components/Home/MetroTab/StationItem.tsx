import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { LineType, LINE_COLOR_HEX } from './constant/lines';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';

function StationItem(props: LineType & { onClick?: () => void }) {
  if (!props) return null;

  const { station_id, station_name, line_id, next_station, toilet, onClick } = props;

  if (line_id === 0) {
    return (
      <ItemWrapper>
        <DefaultCircleWrapper>
          <StationCircleIcon />
        </DefaultCircleWrapper>
        <StationName />
      </ItemWrapper>
    );
  }

  const renderCurrentStation = () => {
    const renderIcon = () => {
      if (!toilet)
        return (
          <DefaultCircleWrapper>
            <StationCircleIcon id={`station_id_${station_id}`} />
          </DefaultCircleWrapper>
        );
      if (toilet === 'GATE')
        return (
          <StarRoundedIcon
            id={`station_id_${station_id}`}
            style={{
              width: '25px',
              height: '25px',
              color: LINE_COLOR_HEX[line_id],
              fontSize: '25px',
              lineHeight: '25px',
            }}
          />
        );
      if (toilet === 'PLATFORM')
        return (
          <StarsRoundedIcon
            id={`station_id_${station_id}`}
            style={{
              width: '25px',
              height: '25px',
              color: 'orange',
              fontSize: '25px',
              lineHeight: '25px',
            }}
          />
        );
    };

    return (
      <ItemWrapper onClick={onClick}>
        {renderIcon()}
        <StationName hasToilet={!!toilet}>{station_name}</StationName>
      </ItemWrapper>
    );
  };

  return renderCurrentStation();
}

const ItemWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 20px 5px;

  min-width: 100px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const DefaultCircleWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationCircleIcon = styled.div<{ id?: string }>`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;

  background: ${({ id }) => (id ? '#e2e2e2' : 'none')};
  opacity: ${({ id }) => (id ? 1 : 0)};
`;

const StationName = styled.div<{ hasToilet?: boolean }>`
  position: relative;
  width: fit-content;
  font-size: 16px;
  font-weight: ${({ hasToilet }) => (hasToilet === true ? 700 : 200)};
  color: ${({ hasToilet }) => (hasToilet ? '#454545' : '#616161')};
  width: auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StationItem;
