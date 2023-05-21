import { useActions } from '@stackflow/react';
import { useStepActions } from '@stackflow/react';
import { stackflow } from '@stackflow/react';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

import '@stackflow/plugin-basic-ui/index.css';
import { ROUTE_PATHS } from './routes';
import HomePage from '../components/Home';

import ShrineBottomSheet from '../components/ShrineBottomSheet';

const initStackflow = () => {
  return stackflow({
    transitionDuration: 350,
    activities: {
      HomePage,
      'BottomSheet/ShrineBottomSheet': ShrineBottomSheet,
    },
    plugins: [
      historySyncPlugin({
        routes: {
          HomePage: ROUTE_PATHS.HOME,
          'BottomSheet/ShrineBottomSheet': ROUTE_PATHS.BottomSheet.ShirineDetail,
        },
        fallbackActivity: () => {
          return 'HomePage';
        },
      }),
      basicRendererPlugin(),
      basicUIPlugin({ theme: 'cupertino' }),
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
