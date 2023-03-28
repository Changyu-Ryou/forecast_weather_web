import { useActions } from '@stackflow/react';
import { useStepActions } from '@stackflow/react';
import { stackflow } from '@stackflow/react';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

import '@stackflow/plugin-basic-ui/index.css';
import { ROUTE_PATHS } from './routes';
import HomePage from '../pages/HomePage';
import OnBoardPage from '../pages/OnBoardPage';
import OnBoardGoalPage from '../pages/OnBoardGoalPage';
import NotFoundPage from '../pages/NotFound';
import MyPage from '../pages/MyPage';

const initStackflow = () => {
  return stackflow({
    transitionDuration: 350,
    activities: {
      HomePage,
      OnBoardPage,
      OnBoardGoalPage,
      NotFoundPage,
      MyPage,
    },
    plugins: [
      historySyncPlugin({
        routes: {
          HomePage: ROUTE_PATHS.HOME,
          MyPage: ROUTE_PATHS.MY,
          OnBoardPage: ROUTE_PATHS.ON_BOARD,
          OnBoardGoalPage: ROUTE_PATHS.ON_BOARD_INPUT,
          NotFoundPage: ROUTE_PATHS.NOT_FOUND,
        },
        fallbackActivity: () => 'NotFoundPage',
      }),
      basicRendererPlugin(),
      basicUIPlugin({ theme: 'android' }),
    ],
  });
};

const {
  Stack,
  activities,
  useFlow: useOriginFlow,
  useStepFlow: useOriginStepFlow,
} = initStackflow();

export type TypeActivities = typeof activities;
export type TypeActivityNames = keyof TypeActivities;
export type TypeUseFlow = typeof useOriginFlow;
export type TypeUseStepFlow = typeof useOriginStepFlow;

const useFlow: TypeUseFlow = () => useActions<TypeActivities>();
const useStepFlow: TypeUseStepFlow = (activityName: TypeActivityNames) =>
  useStepActions(activityName as never);

export { Stack, activities, useFlow, useStepFlow };
