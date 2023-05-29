import styled from '@emotion/styled';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import React, { useEffect, useMemo } from 'react';
import { useFlow } from '../../stackflow';
import { usePathParams } from '../../stackflow/hooks/usePathParams';
import { Spacing } from '../common/Spacing';

import { send } from '@stackflow/compat-await-push';
import { useActivity } from '@stackflow/react';

import DefaultMarker from '../../assets/Image/cave_marker_default.png';
import DisabledMarker from '../../assets/Image/cave_marker_visited.png';
import useFormContextHook from '../../hooks/useFormContextHook';
import useSendNativeEventBridge from '../../hooks/useSendNativeEventBridge';
import { Caves } from '../Home/constants/Caves';
import { useQueryParams } from '../../stackflow/hooks/useQueryParams';

const CaveBottomSheet = () => {
  const { pop } = useFlow();
  const { caveName } = usePathParams();
  const { position } = useQueryParams();
  const { setValue, watch } = useFormContextHook();
  const { sendToNative } = useSendNativeEventBridge();
  const decodeName = decodeURIComponent(caveName);

  const detail = useMemo(() => {
    const result = Caves.find((shrine) => {
      return shrine.name === decodeName && JSON.stringify(shrine.position) === position;
    });
    return result;
  }, [decodeName, position]);

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

  const visitedValue: string[] = watch('visitedCaves', []) ?? [];
  const visitedCheckName = detail?.name + JSON.stringify(detail?.position);
  const isVisited = visitedValue.includes(visitedCheckName || '');
  const visitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    if (!detail) return;

    // 저장시 이미 방문한 동굴인지 확인

    if (newValue === true) {
      const arr = [...visitedValue, visitedCheckName];

      if (arr.length % 3 === 0) {
        sendToNative('showInterstitialAd', {});
      }
      //중복 제거 및 체크
      const uniqueArr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      setValue('visitedCaves', uniqueArr);
    } else {
      const uniqueArr = visitedValue.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      setValue(
        'visitedCaves',
        uniqueArr.filter((value: string) => value !== visitedCheckName)
      );
    }
  };

  const renderCaveName = () => {
    if (detail?.koName) {
      return (
        <>
          <SubTitle>{detail.name}</SubTitle>
          <Spacing height={3} />
          <Title>{detail.koName}</Title>
        </>
      );
    }
    return <Title>{detail?.name ?? '동굴 (이름 없음)'}</Title>;
  };

  return detail ? (
    <BottomSheet onOutsideClick={handleClose}>
      <Wrapper>
        {renderCaveName()}
        <Spacing height={20} />
        <Description>🚧 동굴 이름은 한글화 중이에요</Description>
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

export default CaveBottomSheet;

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
