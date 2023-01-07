import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { ReactElement } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import WcIcon from '@mui/icons-material/Wc';
import { TabHandlerProps } from '../../pages/Home';

function BottomNav({ tab, setTab }: TabHandlerProps): ReactElement {
  return (
    <BottomNavigation
      style={{ width: '100%' }}
      value={tab}
      onChange={(event, newValue) => {
        setTab(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label={
          <div>
            개찰구 내<br />
            화장실
          </div>
        }
        icon={<DirectionsTransitIcon />}
      />
      <BottomNavigationAction label="개방화장실" icon={<WcIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
