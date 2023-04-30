import styled from '@emotion/styled';
import React from 'react';
import { useFlow } from '../../../stackflow';

interface Props {
  onClose: () => void;
}

const DrawerMenu = ({ onClose }: Props) => {
  const { push } = useFlow();
  return (
    <DrawerWrapper>
      <MenuTitle>Menu</MenuTitle>
      <Item
        onClick={() => {
          onClose();
          push('BirthDayBottomSheet', {});
        }}
      >
        생일 날짜 변경
      </Item>
      <Item
        onClick={() => {
          onClose();
          window.open('https://m.dhlottery.co.kr/gameResult.do?method=byWin', '_blank');
        }}
      >
        최근 당첨번호 확인
      </Item>
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

const Item = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 24px;
  color: white;
  font-weight: 500;
  padding: 7px 15px;

  //not last child
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  //is first child
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
