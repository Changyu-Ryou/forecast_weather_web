import styled from '@emotion/styled';
import { ActivityComponentType } from '@stackflow/react';

import { AppScreen } from '../../stackflow/components';

import useFormContextHook from '../../hooks/useFormContextHook';

import { Drawer } from '@mui/material';
import DrawerMenu from './components/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { MSG } from '../../constants/text';

const HomePage: ActivityComponentType = () => {
  const { watch, setValue } = useFormContextHook();
  const setDrawer = (value: boolean) => {
    setValue('drawer', value);
  };
  const drawer = watch('drawer') ?? false;

  return (
    <AppScreen
      appBar={{
        border: false,
        // borderColor: 'rgba(255, 255, 255, 0.2)',
        // backgroundColor: '#40414F',
        // borderSize: '1px',
        title: <Title>{MSG.HOME.TITLE}</Title>,
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
        <div>mainn</div>
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
`;

const Title = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export default HomePage;
