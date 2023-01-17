import styled from '@emotion/styled';
import { ReactElement } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function NavigationBar(): ReactElement {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>해외결제 청구금액 계산</Title>
      </TitleWrapper>
      <MoreInfoButtonWrapper>
        <InfoOutlinedIcon />
      </MoreInfoButtonWrapper>
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
