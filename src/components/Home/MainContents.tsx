import { ReactElement } from 'react';
import useFormContextHook from '../../hooks/useFormContextHook';

import { View } from '../common/Layout';
import QuotesCarousel from './QuotesList';
import SwipeUpOnboard from './SwipeUpOnboard';

function MainContents(): ReactElement {
  const { watch } = useFormContextHook();
  const showedSwipeUpOnboard = watch('showedSwipeUpOnboard');
  return (
    <View>
      <QuotesCarousel />
      {!showedSwipeUpOnboard && <SwipeUpOnboard />}
    </View>
  );
}

export default MainContents;
