import styled from '@emotion/styled';
import { LineType } from '../constant/lines';

import StationIcon, { DefaultCircleWrapper, StationCircleIcon } from './StationIcon';

function StationItem(props: LineType & { onClick?: () => void }) {
  if (!props) return null;

  const { station_id, station_name, line_id, next_station, line_name, toilet, onClick } = props;

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
    return (
      <ItemWrapper onClick={onClick}>
        <StationIcon
          stationInfo={{ line_name, station_id, station_name, line_id, next_station, toilet }}
        />
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
  margin: 10px 5px;

  min-width: 100px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const StationName = styled.div<{ hasToilet?: boolean }>`
  position: relative;
  width: fit-content;
  font-size: 13px;
  font-weight: ${({ hasToilet }) => (hasToilet === true ? 700 : 200)};
  color: ${({ hasToilet }) => (hasToilet ? '#454545' : '#616161')};
  width: auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StationItem;
