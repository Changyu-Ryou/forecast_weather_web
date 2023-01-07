import styled from '@emotion/styled';
import { ReactElement } from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function NavigationBar(): ReactElement {
  return (
    <Wrapper>
      <TitleWrapper>
        <DirectionsRunIcon
          fontSize="medium"
          style={{ color: 'white', borderRadius: '50%', background: '#2e7d32', padding: '4px' }}
        />
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

const Title = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  font-weight: 700;
  line-height: 46px;

  margin-left: 10px;
`;
