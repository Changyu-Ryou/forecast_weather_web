import styled from '@emotion/styled';
import { Layout } from './Layout';
import { Ref } from 'react';

import { LayoutRefProps } from './Layout/components/ContentsLayout';
import { AppScreen as AppBar } from '@stackflow/plugin-basic-ui';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export type AppScreenProps = Parameters<typeof AppBar>[0] & {
  children: React.ReactNode;
  accessoryBar?: React.ReactNode;
  onPull?: () => void;
  layoutRef?: Ref<LayoutRefProps>;
  noAppBar?: boolean;
};

export const AppScreen = ({
  children,
  appBar,
  accessoryBar,
  onPull,
  layoutRef,
  noAppBar = false,
  ...props
}: AppScreenProps) => {
  return (
    <AppBar
      {...props}
      appBar={
        noAppBar
          ? undefined
          : {
              borderSize: '0',

              closeButton: {
                renderIcon: () => <ArrowBackIosNewIcon sx={{ fontSize: '24px', color: 'black' }} />,
              },
              backButton: {
                renderIcon: () => <ArrowBackIosNewIcon sx={{ fontSize: '24px', color: 'black' }} />,
              },
              ...appBar,

              title: appBar?.title && <TitleWrapper>{appBar.title}</TitleWrapper>,
            }
      }
    >
      <Layout ref={layoutRef} accessoryBar={accessoryBar}>
        {children}
      </Layout>
    </AppBar>
  );
};

const TitleWrapper = styled.div`
  max-width: 15rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif !important;
`;
