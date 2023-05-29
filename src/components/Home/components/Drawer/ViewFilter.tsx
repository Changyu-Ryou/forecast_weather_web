import React from 'react';
import { DrawerProps, GroupTitle, GroupWrappr, Item } from '.';
import useFormContextHook from '../../../../hooks/useFormContextHook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const ViewFilter = ({ onClose }: DrawerProps) => {
  const { watch, setValue } = useFormContextHook();
  const viewFilter = watch('viewFilter') ?? 'all';

  const changeViewFilter = (value: string) => {
    setValue('viewFilter', value);
  };

  return (
    <GroupWrappr>
      <GroupTitle>
        <VisibilityIcon sx={{ fontSize: '17px' }} />
        보기 필터
      </GroupTitle>
      <Item onClick={() => changeViewFilter('all')} selected={viewFilter === 'all'}>
        {viewFilter === 'all' ? (
          <RadioButtonCheckedIcon sx={{ fontSize: '14px' }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ fontSize: '14px' }} />
        )}
        <label htmlFor="all">전체</label>
      </Item>
      <Item
        onClick={() => changeViewFilter('notVisitedOnly')}
        selected={viewFilter === 'notVisitedOnly'}
      >
        {viewFilter === 'notVisitedOnly' ? (
          <RadioButtonCheckedIcon sx={{ fontSize: '14px' }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ fontSize: '14px' }} />
        )}
        <label htmlFor="notVisitedOnly">미방문 지역만</label>
      </Item>
      <Item onClick={() => changeViewFilter('visitedOnly')} selected={viewFilter === 'visitedOnly'}>
        {viewFilter === 'visitedOnly' ? (
          <RadioButtonCheckedIcon sx={{ fontSize: '14px' }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ fontSize: '14px' }} />
        )}
        <label htmlFor="visitedOnly">방문 지역만</label>
      </Item>
    </GroupWrappr>
  );
};

export default ViewFilter;
