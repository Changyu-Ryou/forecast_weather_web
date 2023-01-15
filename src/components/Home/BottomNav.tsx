import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ReactElement } from 'react';

import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import WcIcon from '@mui/icons-material/Wc';
import { TabHandlerProps } from '../../pages/Home';
import HealingIcon from '@mui/icons-material/Healing';
import useSendNativeEventBridge from '../../hooks/useSendNativeEventBridge';

function BottomNav({ tab, setTab }: TabHandlerProps): ReactElement {
  const { sendToNative } = useSendNativeEventBridge();
  return (
    <BottomNavigation
      style={{ width: '100%', borderTop: '1px solid #e0e0e0' }}
      value={tab}
      onChange={(event, newValue) => {
        sendToNative('tabChange', { data: newValue });
        setTab(newValue);
      }}
    >
      {/* <BottomNavigationAction label="Home" icon={<HomeIcon />} /> */}
      <BottomNavigationAction
        label={
          tab === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              승장강 내 <WcIcon style={{ marginLeft: '3px', fontSize: '16px' }} />
            </div>
          ) : (
            ''
          )
        }
        icon={<DirectionsTransitIcon />}
      />
      <BottomNavigationAction label="진정 지압" icon={<HealingIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
