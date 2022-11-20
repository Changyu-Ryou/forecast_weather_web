import styled from '@emotion/styled';
import { ReactElement } from 'react';

import NavigationBar from './NavigationBar';
import UploadSection from './UploadSection';

function Home(): ReactElement {
  return (
    <>
      <NavigationBar />
      <View>
        <Title>
          QR코드가 포함된
          <br />
          이미지를 업로드하세요.
        </Title>
        <UploadSection />
      </View>
    </>
  );
}

export default Home;

const View = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0 50px 0;

  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 46px;
  color: #454545;
  text-align: center;
`;
