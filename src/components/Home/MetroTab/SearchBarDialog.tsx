import styled from '@emotion/styled';
import { Modal, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useMemo } from 'react';
import { LineType, line_all_flat, LINE_COLOR_HEX } from './constant/lines';

export interface SimpleDialogProps {
  openSearchBarHandler: [boolean, (open: boolean) => void];
  openDetailBottomSheetHandler: [LineType, (open: LineType) => void];
}

export function SearchBarDialog({
  openSearchBarHandler,
  openDetailBottomSheetHandler,
}: SimpleDialogProps) {
  const [openSearchModal, setOpenSearchModal] = openSearchBarHandler;
  const [, setOpenDetailBottomSheet] = openDetailBottomSheetHandler;

  const handleClose = () => {
    setOpenSearchModal(false);
  };

  const handleListItemClick = (value: LineType) => {
    if (!value) return;
    setOpenSearchModal(false);
    setOpenDetailBottomSheet(value);
  };
  const stations = useMemo(() => line_all_flat, []);

  return (
    <Modal onClose={handleClose} open={openSearchModal}>
      <ModalWrapper>
        <Autocomplete
          openOnFocus
          autoSelect
          autoHighlight
          options={stations}
          sx={{ zIndex: 1000, fontSize: '13px' }}
          renderInput={(params) => (
            <TextField label="역 이름을 입력해주세요" {...params} autoFocus />
          )}
          getOptionLabel={(option) => option?.station_name ?? ''}
          renderOption={(props, option) => (
            <OptionWrapper
              {...props}
              key={option?.line_id + '-' + option?.station_id}
              onClick={() => handleListItemClick(option)}
            >
              <LineName lineId={option?.line_id}>{option?.line_name}</LineName>
              &nbsp;
              {option?.station_name}
            </OptionWrapper>
          )}
        />
      </ModalWrapper>
    </Modal>
  );
}

const ModalWrapper = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  background: white;
  /* padding: 100px; */
`;

const OptionWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LineName = styled.div<{ lineId?: number }>`
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: ${({ lineId }) => (lineId ? LINE_COLOR_HEX[lineId] : 'black')};
  padding: 3px 10px;
  border-radius: 15px;
`;
