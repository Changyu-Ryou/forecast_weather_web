import { TypeActivities } from '../index';
import { useStack } from '@stackflow/react';
import { useMemo } from 'react';

function useActiveActivities() {
  const { activities } = useStack();

  const activeActivities = useMemo(() => {
    return activities.filter((activity) => activity.transitionState.includes('enter-'));
  }, [activities]);

  const isExistSpecificActivities = (activityName: keyof TypeActivities) => {
    return activeActivities?.some(({ name }) => {
      if (name === activityName) return true;
      return false;
    });
  };

  const diffActivitiesFromCurrent = (activityName: keyof TypeActivities) => {
    const existActivityArr = activeActivities?.map(({ name }) => {
      if (name === activityName) return name;
      return undefined;
    });
    const ActivityIndex = existActivityArr.lastIndexOf(activityName);
    if (ActivityIndex !== -1) {
      return existActivityArr.length - ActivityIndex - 1; //index와 length 차이로 -1 해줌
    }
    return -1;
  };

  return { activeActivities, isExistSpecificActivities, diffActivitiesFromCurrent };
}

export default useActiveActivities;
