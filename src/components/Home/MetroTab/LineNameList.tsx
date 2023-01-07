import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { LINE_NAME_LIST } from './constant/lines';

type Props = {
  stateHandler: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];
};

function LineNameList({ stateHandler }: Props): ReactElement {
  const [selectedLine, setSelectedLine] = stateHandler;

  return (
    <Wrapper>
      {LINE_NAME_LIST.map((line) => {
        return (
          <Button
            fullWidth
            key={line.line_name}
            variant={selectedLine === line.line_name ? 'contained' : 'outlined'}
            color="success"
            size="small"
            style={{ minWidth: 'fit-content' }}
            onClick={(e) => {
              // setSelectedLine(undefined);
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

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  padding: 1rem;
  box-sizing: border-box;
`;

export default LineNameList;
