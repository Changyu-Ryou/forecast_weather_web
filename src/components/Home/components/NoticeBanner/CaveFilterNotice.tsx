import styled from '@emotion/styled';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useFormContextHook from '../../../../hooks/useFormContextHook';

const CaveFilterNotice = () => {
  const { setValue, watch } = useFormContextHook();
  const closedNoticeBanner = watch('closedNoticeBanner', []) ?? [];

  const closeCaveFilterBannerHandler = () => {
    if (!closedNoticeBanner.includes('caveFilterNotice')) {
      setValue('closedNoticeBanner', [...closedNoticeBanner, 'caveFilterNotice']);
    }
  };

  return (
    <Wrapper
      onClick={() => {
        setValue('drawer', true);
        closeCaveFilterBannerHandler();
      }}
    >
      🌟 왼쪽 상단 메뉴에 <span>동굴 필터</span>가 추가되었어요.
      <CloseIcon sx={{ fontSize: '20px' }} className="close-btn" />
    </Wrapper>
  );
};

export default CaveFilterNotice;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343541;
  color: white;
  font-size: 13px;
  position: relative;

  span {
    margin-left: 5px;

    font-weight: 800;
    color: yellow;
  }

  .close-btn {
    position: absolute;

    right: 10px;

    margin: auto;
  }
`;
