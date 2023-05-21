import styled from '@emotion/styled';
import React from 'react';
import { useFlow } from '../../../stackflow';
import useFormContextHook from '../../../hooks/useFormContextHook';
import MapIcon from '@mui/icons-material/Map';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props {
  onClose: () => void;
}

const DrawerMenu = ({ onClose }: Props) => {
  const { push } = useFlow();
  const { watch, setValue } = useFormContextHook();
  const viewFilter = watch('viewFilter') ?? 'all';
  const mapType = watch('mapType') ?? 'sky';

  const changeViewFilter = (value: string) => {
    setValue('viewFilter', value);
  };

  const changeMapType = (value: string) => {
    setValue('mapType', value);
    onClose();
  };

  return (
    <DrawerWrapper>
      <MenuTitle>Menu</MenuTitle>
      <GroupWrappr>
        <GroupTitle>
          <MapIcon sx={{ fontSize: '17px' }} />
          지도
        </GroupTitle>
        <Item onClick={() => changeMapType('sky')} selected={mapType === 'sky'}>
          Sky(하늘)
        </Item>
        <Item onClick={() => changeMapType('surface')} selected={mapType === 'surface'}>
          Surface(지상)
        </Item>
        <Item onClick={() => changeMapType('depths')} selected={mapType === 'depths'}>
          Depths(지하)
        </Item>
      </GroupWrappr>
      <GroupWrappr>
        <GroupTitle>
          <VisibilityIcon sx={{ fontSize: '17px' }} />
          보기 필터
        </GroupTitle>
        <Item onClick={() => changeViewFilter('all')} selected={viewFilter === 'all'}>
          <input
            type="radio"
            name="viewFilter"
            id="all"
            value="all"
            checked={viewFilter === 'all'}
          />
          <label htmlFor="all">전체</label>
        </Item>
        <Item
          onClick={() => changeViewFilter('notVisitedOnly')}
          selected={viewFilter === 'notVisitedOnly'}
        >
          <input
            type="radio"
            name="viewFilter"
            id="notVisitedOnly"
            value="notVisitedOnly"
            checked={viewFilter === 'notVisitedOnly'}
          />
          <label htmlFor="notVisitedOnly">미방문 사당만</label>
        </Item>
        <Item
          onClick={() => changeViewFilter('visitedOnly')}
          selected={viewFilter === 'visitedOnly'}
        >
          <input
            type="radio"
            name="viewFilter"
            id="visitedOnly"
            value="visitedOnly"
            checked={viewFilter === 'visitedOnly'}
          />
          <label htmlFor="visitedOnly">방문 사당만</label>
        </Item>
      </GroupWrappr>
    </DrawerWrapper>
  );
};

export default DrawerMenu;

const DrawerWrapper = styled.div`
  min-width: calc(100vw * 0.5);
  max-width: calc(100vw * 0.8);
  width: auto;
  height: 100%;
  background-color: #343541;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 0 15px;
`;

const Item = styled.div<{ selected?: boolean }>`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  color: ${({ selected }) => (selected ? 'rgb(52, 192, 230)' : 'white')};
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
  padding: 7px 15px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  //not last child
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  //is first child
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const GroupWrappr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;

  //not last child
  & div:not(:first-child) {
    padding-left: 22px;
  }
`;

const GroupTitle = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: white;
  font-weight: 900;
  padding: 7px 15px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
