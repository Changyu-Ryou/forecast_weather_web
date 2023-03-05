import styled from '@emotion/styled';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ItemType } from '../Markers/RestaurantMarkers';
import NaverLogoIcon from '../../../../assets/Icon/naver_logo_icon.png';
import KakaoMapIcon from '../../../../assets/Icon/kakao_map_icon.png';
import { openKakaoMap, openNaverMap } from '../../../../utils/deeplink';

function AccessoryBar() {
  const { watch } = useFormContext();
  const selectedItemValue: ItemType | undefined = watch('selectedItem');
  const infoBoxHeightValue = watch('infoBoxHeight');
  const show = useMemo(() => {
    return (
      infoBoxHeightValue === '100%' &&
      (selectedItemValue?.naver_map_url || selectedItemValue?.kakao_detail_url)
    );
  }, [infoBoxHeightValue, selectedItemValue?.kakao_detail_url, selectedItemValue?.naver_map_url]);
  return show ? (
    <ButtonWrapper>
      {selectedItemValue?.naver_map_url !== undefined && (
        <button
          className="naver"
          onClick={() => openNaverMap(selectedItemValue?.naver_map_url ?? '')}
        >
          <img src={NaverLogoIcon} />
          네이버 지도
        </button>
      )}
      {selectedItemValue?.kakao_detail_url && (
        <button
          className="kakao"
          onClick={() => openKakaoMap(selectedItemValue?.kakao_detail_url ?? '')}
        >
          <img src={KakaoMapIcon} />
          카카오맵
        </button>
      )}
    </ButtonWrapper>
  ) : null;
}

export default AccessoryBar;

const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;

  padding: 10px 0 0;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 5px;

  button {
    color: white;
    font-weight: 900;
    font-size: 14px;

    padding: 10px;
    flex: 1;

    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.naver {
      background-color: #0385ff;
      padding-right: 13px;

      img {
        width: 13px;
        height: 13px;
        margin-right: 5px;
        border-radius: 3px;
      }
    }

    &.kakao {
      background-color: #fae100;
      color: #381b1d;
      padding-right: 14px;
      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }
`;
