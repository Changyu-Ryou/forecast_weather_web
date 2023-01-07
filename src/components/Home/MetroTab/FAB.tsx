import Fab from '@mui/material/Fab';
import { ReactElement } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

type Props = {
  openSearchBarHandler: [boolean, (open: boolean) => void];
};

function FAB({ openSearchBarHandler }: Props): ReactElement {
  const [open, setOpen] = openSearchBarHandler;

  return (
    <FixedWrapper>
      <Fab color="success" aria-label="search" onClick={() => setOpen(true)}>
        <SearchIcon />
      </Fab>
    </FixedWrapper>
  );
}

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 72px;
  right: 1rem;
`;

export default FAB;
