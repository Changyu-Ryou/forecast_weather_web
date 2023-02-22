import styled from '@emotion/styled';
import { ReactElement } from 'react';

function NavigationBar(): ReactElement {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>유튜브 맛zip</Title>
      </TitleWrapper>
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  width: 100%;
  height: 46px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 46px;

  margin-left: 10px;
`;

const MoreInfoButtonWrapper = styled.div`
  position: absolute;
  top: 0.6875rem;
  right: 0.6875rem;
`;

const ModalWrapper = styled.div`
  width: 80%;
  height: 70%;
  background: white;
  padding: 1.4rem 0;
  border-radius: 5px;
  position: relative;
`;
const Contetns = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 1.4rem;
`;

const Li = styled.li`
  font-size: 14px;
  line-height: 17px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  /* width: 40px;
  height: 40px; */
  background: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
