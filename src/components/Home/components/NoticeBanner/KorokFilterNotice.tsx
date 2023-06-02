import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';
import useFormContextHook from '../../../../hooks/useFormContextHook';

const KorokFilterNotice = () => {
  const { setValue, watch } = useFormContextHook();
  const closedNoticeBanner = watch('closedNoticeBanner') ?? [];

  const closeKorokFilterBannerHandler = () => {
    if (!closedNoticeBanner.includes('korokFilterNotice')) {
      setValue('closedNoticeBanner', [...closedNoticeBanner, 'korokFilterNotice']);
    }
  };

  return (
    <Wrapper
      onClick={() => {
        setValue('drawer', true);
        closeKorokFilterBannerHandler();
      }}
    >
      🌟 왼쪽 상단 메뉴에 <span>코로그 필터</span>가 추가되었어요.
      <CloseIcon sx={{ fontSize: '20px' }} className="close-btn" />
    </Wrapper>
  );
};

export default KorokFilterNotice;

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
    color: darkorange;
  }

  .close-btn {
    position: absolute;

    right: 10px;

    margin: auto;
  }
`;
