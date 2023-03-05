import styled from '@emotion/styled';
import React, { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Spacing } from '../../../common/Spacing';
import { ItemType } from '../Markers/RestaurantMarkers';

import PinIcon from '../../../../assets/Icon/pin.png';
import PhoneCallIcon from '../../../../assets/Icon/phone-call.png';
import { motion } from 'framer-motion';
import AccessoryBar from './AccessoryBar';

function AdditionalInfoSection(): ReactElement {
  const { watch } = useFormContext();
  const selectedItemValue: ItemType | undefined = watch('selectedItem');
  const infoBoxHeightValue = watch('infoBoxHeight');
  const show = useMemo(() => {
    return infoBoxHeightValue === '100%';
  }, [infoBoxHeightValue]);

  return (
    <motion.div
      initial={{ opacity: 0, height: '0px' }}
      animate={show ? { opacity: 1, height: '100%' } : { opacity: 0, height: '0px' }}
      transition={{
        duration: 0.2,
      }}
    >
      <AdditionalInfoWrapper>
        {selectedItemValue?.address && (
          <SubTitle>
            <img className="image" src={PinIcon} alt="image" />
            {selectedItemValue?.address}
          </SubTitle>
        )}
        {selectedItemValue?.phone && (
          <SubTitle>
            <img className="image" src={PhoneCallIcon} alt="image" />
            {selectedItemValue?.phone}
          </SubTitle>
        )}
        <Spacing height={20} />
        <Divider />
        <Spacing height={20} />
        <MenuWrapper>
          {selectedItemValue?.menus && (
            <>
              <div className="title">메뉴</div>
              <Spacing height={7} />
              <div className="subtitle">{selectedItemValue?.menus.join(', ')}</div>
              <Spacing height={20} />
            </>
          )}
          {selectedItemValue?.pictures && (
            <>
              <div className="title">사진</div>
              <Spacing height={7} />
              <ImagesWrapper>
                {selectedItemValue?.pictures.map((image, index) => {
                  return <img className={'place_image'} src={image} key={image} />;
                })}
              </ImagesWrapper>
            </>
          )}
        </MenuWrapper>
        <Spacing height={10} />
        <AccessoryBar />
      </AdditionalInfoWrapper>
    </motion.div>
  );
}

export default AdditionalInfoSection;

const AdditionalInfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  transition: 'all 2s ease-in-out';
  will-change: height, opacity;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #3f3f3d;

  width: 100%;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .image {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

const Divider = styled.div`
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  border-bottom: 1px solid #d4d4d4;
`;

const MenuWrapper = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;

  .title {
    font-weight: 600;
  }

  .subtitle {
    color: #6a6a6a;
  }
`;

const ImagesWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;

  .place_image {
    height: 100px;
    width: auto;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
