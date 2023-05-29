import { ReactElement } from 'react';

import { MapContents } from './MapContents';
import { View } from '../../common/Layout';

function MainContents(): ReactElement {
  return (
    <View>
      <MapContents />
    </View>
  );
}

export default MainContents;
