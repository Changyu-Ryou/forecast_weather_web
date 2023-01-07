import styled from '@emotion/styled';
import React, { ReactElement, useState } from 'react';
import FAB from './FAB';
import LineNameList from './LineNameList';
import StationList from './StationList';
import { SearchBarDialog } from './SearchBarDialog';
import StationInfoBottomSheet from './StationInfoBottomSheet';
import { LineType } from './constant/lines';

function MetroTab(): ReactElement {
  const [selectedLine, setSelectedLine] = useState<string | undefined>('1호선');
  const [openSearchModal, setOpenSearchModal] = React.useState(false);
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = useState<LineType>(undefined);

  return (
    <Wrapper>
      <LineNameList stateHandler={[selectedLine, setSelectedLine]} />
      <StationList
        lineName={selectedLine}
        openDetailBottomSheetHandler={[openDetailBottomSheet, setOpenDetailBottomSheet]}
      />

      <StationInfoBottomSheet
        openDetailBottomSheetHandler={[openDetailBottomSheet, setOpenDetailBottomSheet]}
      />
      <SearchBarDialog
        openSearchBarHandler={[openSearchModal, setOpenSearchModal]}
        openDetailBottomSheetHandler={[openDetailBottomSheet, setOpenDetailBottomSheet]}
      />
      <FAB openSearchBarHandler={[openSearchModal, setOpenSearchModal]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  .MuiPaper-root {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    background: black !important;
  }
`;

export default MetroTab;
