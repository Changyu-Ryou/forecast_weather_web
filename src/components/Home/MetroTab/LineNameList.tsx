import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { Spacing } from '../../common/Spacing';
import { LINE_COLOR_HEX, LINE_NAME_LIST } from './constant/lines';

type Props = {
  stateHandler: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];
};

function LineNameList({ stateHandler }: Props): ReactElement {
  const [selectedLine, setSelectedLine] = stateHandler;

  const checked = (line_name: string) => selectedLine === line_name;

  const fontColor = (line_name: string) => {
    if (checked(line_name)) {
      return 'white';
    }
    return LINE_COLOR_HEX[LINE_NAME_LIST.findIndex((el) => el.line_name === selectedLine) + 1];
  };

  const backgroundColor = (line_name: string) => {
    if (checked(line_name)) {
      return LINE_COLOR_HEX[LINE_NAME_LIST.findIndex((el) => el.line_name === selectedLine) + 1];
    }
    return 'white';
  };

  return (
    <>
      <Spacing height={5} />
      <Wrapper>
        {LINE_NAME_LIST.map((line) => {
          return (
            <Button
              fullWidth
              key={line.line_name}
              variant={selectedLine === line.line_name ? 'contained' : 'outlined'}
              color="success"
              size="small"
              style={{
                minWidth: 'fit-content',
                color: fontColor(line.line_name),
                borderColor: fontColor(line.line_name),
                background: backgroundColor(line.line_name),
                height: '30px',
              }}
              onClick={(e) => {
                setSelectedLine(line.line_name);
                (e.target as HTMLButtonElement).scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'center',
                });
              }}
            >
              {line.line_name}
            </Button>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.625rem;
  min-height: 50px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  padding: 0 20px 0 20px;
  box-sizing: border-box;

  /* flex: 1; */
`;

export default LineNameList;
