import React, { ReactElement } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { LINE_COLOR_HEX, LINE_NAME_LIST } from './constant/lines';
import styled from '@emotion/styled';
interface Props {
  selectedLine: string | undefined;
}

function IconInfo({ selectedLine }: Props): ReactElement {
  return (
    <IconInfoWrapper>
      <TextWrapper>
        <StarRoundedIcon
          id={`station_id_example`}
          style={{
            width: `15px`,
            height: `15px`,
            color:
              LINE_COLOR_HEX[LINE_NAME_LIST.findIndex((el) => el.line_name === selectedLine) + 1],
            fontSize: `15px`,
            lineHeight: `15px`,
          }}
        />
        개찰구 내 화장실
      </TextWrapper>
      <TextWrapper>
        <StarsRoundedIcon
          id={`statio__id_example2`}
          style={{
            width: `15px`,
            height: `15px`,
            color:
              LINE_COLOR_HEX[LINE_NAME_LIST.findIndex((el) => el.line_name === selectedLine) + 1],
            fontSize: `15px`,
            lineHeight: `15px`,
          }}
        />
        승강장 내 화장실
      </TextWrapper>
    </IconInfoWrapper>
  );
}

const IconInfoWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const TextWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  gap: 3px;
`;
export default IconInfo;
