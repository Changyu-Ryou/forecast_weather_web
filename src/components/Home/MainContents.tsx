import styled from '@emotion/styled';
import { ReactElement } from 'react';
import MapView from './components/MapView';

function MainContents(): ReactElement {
  return (
    <View>
      <MapView />
    </View>
  );
}

const View = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
  background-color: #f5f5f5;
  /* z-index: 1; */
`;

export default MainContents;
