import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import matzip_logo from '../../assets/Icon/matzip_logo.png';
import { Modal, Typography } from '@mui/material';
import { Spacing } from '../common/Spacing';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function NavigationBar(): ReactElement {
  const { setValue, watch } = useFormContext();

  const openModalValue = watch('openModal');

  return (
    <Wrapper>
      <TitleWrapper>
        <LogoImg src={matzip_logo} />
        <Title>맛zip</Title>
      </TitleWrapper>
      <MoreInfoButtonWrapper onClick={() => setValue('openModal', true)}>
        <InfoOutlinedIcon />
      </MoreInfoButtonWrapper>
      <Modal
        open={openModalValue ?? false}
        onClose={() => setValue('openModal', false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ModalWrapper>
          <Contetns>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontWeight: 900 }}
            >
              맛zip 안내
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Li>유튜브에 공개된 정보를 바탕으로 유튜버 별 맛집 지도를 확인할 수 있어요.</Li>
              <br />
              <Li>지도는 주기적으로 업데이트되어질 예정이에요.</Li>
              <br />
              <span style={{ fontSize: '13px' }}>최근 업데이트일: 2023-03-04</span>
            </Typography>

            <Spacing />

            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
              <b>버그 제보 및 제안은 아래 문의 버튼으로 해주시면 감사하겠습니다.</b>
              <KakaoBtnWrapper>
                <KakaoBtn
                  onClick={() => {
                    //window open new tab
                    window.open('https://open.kakao.com/o/sftClA9e', '_blank');
                  }}
                >
                  제안/제보
                </KakaoBtn>
              </KakaoBtnWrapper>
            </Typography>
          </Contetns>
          <ButtonWrapper onClick={() => setValue('openModal', false)}>
            <CancelRoundedIcon />
          </ButtonWrapper>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  width: 100%;
  height: 46px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
  -webkit-box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px -1px 21px -3px rgba(0, 0, 0, 0.56);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  height: 25px;
  margin-right: 5px;
`;

const Title = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 46px;
`;

const MoreInfoButtonWrapper = styled.div`
  position: absolute;
  top: 0.6875rem;
  right: 0.6875rem;
`;

const ModalWrapper = styled.div`
  width: 80%;
  /* height: 50%; */
  background: white;
  padding: 1.4rem 0;
  border-radius: 5px;
  position: relative;
`;
const Contetns = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 1.4rem;
`;

const Li = styled.li`
  font-size: 14px;
  line-height: 17px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  background: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KakaoBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const KakaoBtn = styled.div`
  padding: 4px 10px;
  background-color: #f7c700;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 800;
  color: #682f2f;
`;
