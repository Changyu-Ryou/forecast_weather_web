import styled from '@emotion/styled';
import { useControls } from 'react-zoom-pan-pinch';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import useFormContextHook from '../../../hooks/useFormContextHook';

export const MapController: React.FC = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  const { setValue } = useFormContextHook();
  const openSearchBar = () => {
    setValue('openSearchBar', true);
  };
  return (
    <Wrapper>
      <SearchButton onClick={openSearchBar}>
        <SearchIcon sx={{ fontSize: '20px' }} />
      </SearchButton>
      <Button onClick={() => resetTransform(600)}>
        <RestartAltIcon sx={{ fontSize: '20px' }} />
      </Button>
      <ZoomButtonWrapper>
        <Button className="plus" onClick={() => zoomIn(0.2)}>
          <AddIcon sx={{ fontSize: '20px' }} />
        </Button>
        <Button className="minus" onClick={() => zoomOut(0.2)}>
          <RemoveIcon sx={{ fontSize: '20px' }} />
        </Button>
      </ZoomButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 5px;
`;

const Button = styled.div`
  padding: 5px 8px;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  &.plus {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #9c9c9c;
  }
  &.minus {
    border-radius: 0 0 4px 4px;
  }
`;

const ZoomButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0px;
`;

const SearchButton = styled(Button)`
  background-color: #009ac7;
  color: #ffffff;
  border-radius: 50%;
  padding: 10px;
`;
