import styled from '@emotion/styled';
import { ReactElement, useEffect, useRef } from 'react';

import useFormContextHook from '../../../hooks/useFormContextHook';

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
