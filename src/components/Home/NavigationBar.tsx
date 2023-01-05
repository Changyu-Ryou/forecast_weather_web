import styled from '@emotion/styled';
import { ReactElement } from 'react';
import QrIcon from '../../assets/qr_icon.svg';

function NavigationBar(): ReactElement {
  return (
    <Wrapper>
      <TitleWrapper>
        <IconImage src={QrIcon} />
        <Title>Quick Access</Title>
      </TitleWrapper>
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  -webkit-box-shadow: 0px -14px 42px -7px rgba(0, 0, 0, 0.74);
  box-shadow: 0px -14px 42px -7px rgba(0, 0, 0, 0.74);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconImage = styled.img``;

const Title = styled.h1`
  color: #747474;
  font-weight: 700;
  font-size: 22px;
  font-weight: 700;
  line-height: 46px;

  margin-left: 10px;
`;
