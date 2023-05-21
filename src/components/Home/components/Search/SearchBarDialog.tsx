import styled from '@emotion/styled';
import { Modal, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useMemo } from 'react';
import useFormContextHook from '../../../../hooks/useFormContextHook';
import Shrines from '../../constants/Shrines';
import { useControls } from 'react-zoom-pan-pinch';
import { useFlow } from '../../../../stackflow';

export function SearchBarDialog() {
  const { setValue, watch } = useFormContextHook();
  const openSearchModal = watch('openSearchBar') ?? false;
  const { zoomToElement } = useControls();
  const { push } = useFlow();

  const handleClose = () => {
    setValue('openSearchBar', false);
  };

  const handleListItemClick = (value: any) => {
    if (!value) return;

    setValue('mapType', value.location);
    setTimeout(() => {
      const item = document.getElementsByClassName(`${value.name}`);
      if (item.length !== 0) {
        zoomToElement(item?.[0] as HTMLDivElement, 1, 1000);
      }
      push('BottomSheet/ShrineBottomSheet', {
        shrineName: value.name,
      });
    }, 100);
    handleClose();
  };

  const shrines = useMemo(() => Shrines, []);

  return (
    <Modal onClose={handleClose} open={openSearchModal}>
      <ModalWrapper>
        <Autocomplete
          openOnFocus
          autoSelect
          autoHighlight
          options={shrines}
          sx={{ zIndex: 1000, fontSize: '13px' }}
          renderInput={(params) => <TextField label="이름 검색" {...params} autoFocus />}
          getOptionLabel={(option) => option.koName + option?.name ?? ''}
          renderOption={(props, option) => (
            <OptionWrapper
              {...props}
              key={option?.position.x + '-' + option?.position.y + '-' + option?.name}
              onClick={() => handleListItemClick(option)}
            >
              <KoName>{option?.koName}</KoName>
              <FullName>{option?.name}</FullName>
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

const OptionWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const KoName = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
`;

const FullName = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  color: #9c9c9c;
`;
