import styled from '@emotion/styled';
import { ActivityComponentType } from '@stackflow/react';

import MainContents from './components/MainContents';
import { AppScreen } from '../../stackflow/components';

import useFormContextHook from '../../hooks/useFormContextHook';

import MapIcon from '@mui/icons-material/Map';

import { useState } from 'react';
import { Drawer } from '@mui/material';
import DrawerMenu from './components/DrawerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { MSG } from '../../constants/text';

const HomePage: ActivityComponentType = () => {
  const { setValue } = useFormContextHook();
  const [drawer, setDrawer] = useState(false);

  const clearHandler = () => {
    setValue('typing', true);
  };

  return (
    <AppScreen
      appBar={{
        border: true,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: '#40414F',
        borderSize: '1px',
        title: <Title>{MSG.HOME.TITLE}</Title>,
        appendRight: () => (
          <MapIcon
            onClick={clearHandler}
            sx={{
              width: '20px',
              height: '20px',
              color: 'white',
            }}
          />
        ),
        backButton: {
          renderIcon: () => {
            return (
              <MenuIcon
                onClick={() => setDrawer(true)}
                sx={{
                  width: '20px',
                  height: '20px',
                  color: 'white',
                }}
              />
            );
          },
          onClick: () => {
            setDrawer(true);
          },
        },
        closeButton: {
          renderIcon: () => {
            return (
              <MenuIcon
                onClick={() => setDrawer(true)}
                sx={{
                  width: '20px',
                  height: '20px',
                  color: 'white',
                }}
              />
            );
          },
          onClick: () => {
            setDrawer(true);
          },
        },
      }}
    >
      <Wrapper>
        <MainContents />
        <Drawer anchor={'left'} open={drawer} onClose={() => setDrawer(false)}>
          <DrawerMenu onClose={() => setDrawer(false)} />
        </Drawer>
      </Wrapper>
    </AppScreen>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #343541;
`;

const Title = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

const MenuButton = styled.img`
  width: 10px;
  height: 10px;
`;

export default HomePage;
