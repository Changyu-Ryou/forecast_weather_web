import styled from '@emotion/styled';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import React, { useEffect, useMemo } from 'react';
import { useFlow } from '../../stackflow';
import { usePathParams } from '../../stackflow/hooks/usePathParams';
import { Spacing } from '../common/Spacing';
import Shrines from '../Home/constants/Shrines';
import { send } from '@stackflow/compat-await-push';
import { useActivity } from '@stackflow/react';

import DefaultMarker from '../../assets/Image/shrine_marker_default.png';
import DisabledMarker from '../../assets/Image/shrine_marker_visited.png';
import useFormContextHook from '../../hooks/useFormContextHook';
import useSendNativeEventBridge from '../../hooks/useSendNativeEventBridge';

const ShrineBottomSheet = () => {
  const { pop } = useFlow();
  const { shrineName } = usePathParams();
  const { setValue, watch } = useFormContextHook();
  const { sendToNative } = useSendNativeEventBridge();

  const detail = useMemo(() => {
    return Shrines.find((shrine) => shrine.name === shrineName);
  }, [shrineName]);

  useEffect(() => {
    //detail이 조회되지 않는 경우. Pop
    if (!detail) {
      pop();
    }
  }, [detail]);
  const { id } = useActivity();

  const handleClose = () => {
    send({
      activityId: id,
      data: {
        close: true,
      },
    });
  };

  const visitedValue: string[] = watch('visited') ?? [];
  const isVisited = visitedValue.includes(detail?.name || '');
  const visitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    if (!detail) return;

    if (newValue === true) {
      const arr = [...visitedValue, detail.name];

      if (arr.length % 5 === 0) {
        sendToNative('showInterstitialAd', {});
      }

      const uniqueArr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      setValue('visited', uniqueArr);
    } else {
      const uniqueArr = visitedValue.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      setValue(
        'visited',
        uniqueArr.filter((value: string) => value !== detail.name)
      );
    }
  };

  return detail ? (
    <BottomSheet onOutsideClick={handleClose}>
      <Wrapper>
        <SubTitle>{detail.fullEnName}</SubTitle>
        <Spacing height={3} />
        <Title>{detail.koName}</Title>
        <Spacing height={20} />
        <Description>곧 사당 정보 및 공략이 업데이트 될 예정이에요</Description>
        <Spacing height={20} />
        <ToggleWrapper>
          <input type="checkbox" id="toggle" hidden onChange={visitHandler} checked={isVisited} />
          <label htmlFor="toggle" className="toggleSwitch">
            <span className="toggleButton">
              <MarkerIcon src={isVisited ? DefaultMarker : DisabledMarker} size={20} />
            </span>
          </label>
        </ToggleWrapper>
      </Wrapper>
    </BottomSheet>
  ) : null;
};

export default ShrineBottomSheet;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggleSwitch {
    width: 80px;
    height: 34px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
    cursor: pointer;
  }

  .toggleSwitch .toggleButton {
    width: 40px;
    height: 26px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 15px;
    background: #baefff;
  }

  #toggle:checked ~ .toggleSwitch {
    background: #009ac7;
  }

  #toggle:checked ~ .toggleSwitch .toggleButton {
    left: calc(100% - 44px);

    background: #fff;
  }

  .toggleSwitch,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #942528;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
`;

const MarkerIcon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  z-index: 1000;
`;

const Description = styled.div`
  width: 100%;

  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #909090;
`;
