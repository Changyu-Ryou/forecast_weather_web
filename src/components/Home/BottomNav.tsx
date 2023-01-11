import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { ReactElement } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import WcIcon from '@mui/icons-material/Wc';
import { TabHandlerProps } from '../../pages/Home';
import HealingIcon from '@mui/icons-material/Healing';

function BottomNav({ tab, setTab }: TabHandlerProps): ReactElement {
  return (
    <BottomNavigation
      style={{ width: '100%', borderTop: '1px solid #e0e0e0' }}
      value={tab}
      onChange={(event, newValue) => {
        setTab(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label={
          tab === 1 ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              승장강 내 <WcIcon style={{ marginLeft: '3px', fontSize: '16px' }} />
            </div>
          ) : (
            ''
          )
        }
        icon={<DirectionsTransitIcon />}
      />
      <BottomNavigationAction label="지연 혈자리" icon={<HealingIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
