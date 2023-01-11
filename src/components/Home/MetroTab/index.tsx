import styled from '@emotion/styled';
import React, { ReactElement, useState } from 'react';
import FAB from './FAB';
import LineNameList from './LineNameList';
import StationList from './StationList/StationList';
import { SearchBarDialog } from './SearchBarDialog';
import StationInfoBottomSheet from './StationInfoBottomSheet';
import { LineType } from './constant/lines';
import { Spacing } from '../../common/Spacing';

import Title, { SubTitle } from '../../common/Title';
import WcIcon from '@mui/icons-material/Wc';
import IconInfo from './IconInfo';

function MetroTab(): ReactElement {
  const [selectedLine, setSelectedLine] = useState<string | undefined>('1호선');
  const [openSearchModal, setOpenSearchModal] = React.useState(false);
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = useState<LineType>(undefined);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title
          style={{ lineHeight: '50px', fontSize: '26px', display: 'flex', alignItems: 'center' }}
        >
          승강장 내 <WcIcon style={{ marginLeft: '10px' }} />
        </Title>
        <SubTitle style={{ fontSize: '14px', lineHeight: '20px' }}>
          개찰구를 나가지 않고 갈 수 있는 역을 확인하고,
          <br /> 빠르게 다녀오세요
        </SubTitle>
      </TitleWrapper>
      <HeaderWrapper>
        <IconInfo selectedLine={selectedLine} />
      </HeaderWrapper>
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

  position: unset;
  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .MuiPaper-root {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    background: black !important;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 10px 20px;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: white;
  padding: 5px 0 5px;
  /* padding-top: 20px; */
  z-index: 999;
`;
export default MetroTab;
