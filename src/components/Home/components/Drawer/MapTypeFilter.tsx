import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import { DrawerProps, GroupTitle, GroupWrappr, Item } from '.';
import useFormContextHook from '../../../../hooks/useFormContextHook';

const MapTypeFilter = ({ onClose }: DrawerProps) => {
  const { watch, setValue } = useFormContextHook();

  const mapType = watch('mapType') ?? 'surface';

  const changeMapType = (value: string) => {
    setValue('mapType', value);
    onClose();
  };

  return (
    <GroupWrappr>
      <GroupTitle>
        <MapIcon sx={{ fontSize: '17px' }} />
        지도
      </GroupTitle>
      <Item onClick={() => changeMapType('sky')} selected={mapType === 'sky'}>
        Sky(하늘)
      </Item>
      <Item onClick={() => changeMapType('surface')} selected={mapType === 'surface'}>
        Surface(지상)
      </Item>
      <Item onClick={() => changeMapType('depths')} selected={mapType === 'depths'}>
        Depths(지하)
      </Item>
    </GroupWrappr>
  );
};

export default MapTypeFilter;
