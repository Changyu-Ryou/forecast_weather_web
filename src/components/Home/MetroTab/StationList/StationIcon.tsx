import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import styled from '@emotion/styled';
import { LineType, LINE_COLOR_HEX } from '../constant/lines';

type Props = {
  stationInfo?: LineType;
  size?: number;
};

function StationIcon({ stationInfo, size = 25 }: Props) {
  if (!stationInfo) return null;

  const { station_id, station_name, line_id, next_station, toilet } = stationInfo;

  const renderIcon = () => {
    if (toilet === 'GATE')
      return (
        <StarRoundedIcon
          id={`station_id_${station_id}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            color: LINE_COLOR_HEX[line_id],
            fontSize: `${size}px`,
            lineHeight: `${size}px`,
          }}
        />
      );
    if (toilet === 'PLATFORM')
      return (
        <StarsRoundedIcon
          id={`station_id_${station_id}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            color: 'orange',
            fontSize: `${size}px`,
            lineHeight: `${size}px`,
          }}
        />
      );

    return (
      <DefaultCircleWrapper>
        <StationCircleIcon id={`station_id_${station_id}`} />
      </DefaultCircleWrapper>
    );
  };

  return renderIcon();
}

export const DefaultCircleWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StationCircleIcon = styled.div<{ id?: string }>`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;

  background: ${({ id }) => (id ? '#e2e2e2' : 'none')};
  opacity: ${({ id }) => (id ? 1 : 0)};
`;
export default StationIcon;
