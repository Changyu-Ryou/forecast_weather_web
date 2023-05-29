import styled from '@emotion/styled';
import ContentsFilter from './ContentsFilter';

import MapTypeFilter from './MapTypeFilter';
import ViewFilter from './ViewFilter';

export interface DrawerProps {
  onClose: () => void;
}

const DrawerMenu = ({ onClose }: DrawerProps) => {
  return (
    <DrawerWrapper>
      <MenuTitle>Menu</MenuTitle>
      <MapTypeFilter onClose={onClose} />
      <ViewFilter onClose={onClose} />
      <ContentsFilter onClose={onClose} />
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

export const Item = styled.div<{ selected?: boolean }>`
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
  &:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const GroupWrappr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;

  //not last child
  & div:not(:first-of-type) {
    padding-left: 22px;
  }
`;

export const GroupTitle = styled.div`
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
