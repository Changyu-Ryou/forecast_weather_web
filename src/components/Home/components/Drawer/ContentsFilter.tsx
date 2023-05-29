import React from 'react';
import { DrawerProps, GroupTitle, GroupWrappr, Item } from '.';
import useFormContextHook from '../../../../hooks/useFormContextHook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from '@emotion/styled';
import Shrine from '../../../../assets/Image/shrine_marker_default.png';
import Cave from '../../../../assets/Image/cave_marker_default.png';

import CheckIcon from '@mui/icons-material/Check';

const ContentsFilter = ({ onClose }: DrawerProps) => {
  const { watch, setValue } = useFormContextHook();
  const contentsFilter = watch('contentsFilter', ['shrine']) ?? ['shrine'];

  const changeViewFilter = (value: string) => {
    const isIncludes = contentsFilter.includes(value);
    if (isIncludes) {
      const filterd = contentsFilter.filter((v: string) => v !== value);
      setValue('contentsFilter', filterd);
      return;
    }

    const filterd = [...contentsFilter, value];
    setValue('contentsFilter', filterd);
    return;
  };

  return (
    <GroupWrappr>
      <GroupTitle>
        <VisibilityIcon sx={{ fontSize: '17px' }} />
        컨텐츠
      </GroupTitle>

      <Item
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeViewFilter('shrine');
        }}
        selected={contentsFilter.includes('shrine')}
      >
        <LabelWrapper>
          <Label htmlFor="shrine">
            <Image src={Shrine} />
            사당
          </Label>
          {contentsFilter.includes('shrine') && <CheckIcon sx={{ fontSize: '17px' }} />}
        </LabelWrapper>
      </Item>
      <Item
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          changeViewFilter('cave');
        }}
        selected={contentsFilter.includes('cave')}
      >
        <LabelWrapper>
          <Label htmlFor="cave">
            <Image src={Cave} />
            동굴
          </Label>
          {contentsFilter.includes('cave') && <CheckIcon sx={{ fontSize: '17px' }} />}
        </LabelWrapper>
      </Item>
    </GroupWrappr>
  );
};

export default ContentsFilter;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
