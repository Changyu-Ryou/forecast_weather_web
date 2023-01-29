import styled from '@emotion/styled';
import { ReactElement } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Modal, Typography } from '@mui/material';
import { Spacing } from '../common/Spacing';
import { useFormContext } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function NavigationBar(): ReactElement {
  const { setValue, watch } = useFormContext();

  const openModalValue = watch('openModal');

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>해외결제 청구금액 계산</Title>
      </TitleWrapper>
      <MoreInfoButtonWrapper onClick={() => setValue('openModal', true)}>
        <InfoOutlinedIcon />
      </MoreInfoButtonWrapper>
      <Modal
        open={openModalValue}
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
              계산기 사용 안내
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Li>
                위 계산 결과는 <b>실제 결과와 다를 수 있습니다.</b>
              </Li>
              <br />
              <Li>위 계산기는 참고용으로 법적인 효력이 없습니다.</Li>
              <br />
              <Li>계산에 따른 결제, 청구, 납입 등의 책임은 전적으로 사용자에게 있습니다.</Li>
              <br />
            </Typography>

            <Spacing />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontWeight: 900 }}
            >
              해외결제 청구금액 계산 원리
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Li>
                <b>원화 청구금액 = 해외 이용금액(원화) + 해외 서비스 수수료 해외 이용금액(원화)</b>
              </Li>
              <br />
              <Li>
                해외 이용금액(원화) = 미화환산금액 X 접수일자 1회차 전신환매도율(신한은행 송금 보낼
                때 환율)
              </Li>
              <Li>
                미화환산금액은 해외 현지통화 이용금액을 국제브랜드사가 정한 환율에 의해 미화로
                환산된 금액입니다.
              </Li>
              <Li>미화환산금액에는 국제브랜드수수료가 포함되어 있습니다.</Li>
              <br />
              <Li>
                (국제브랜드수수료 : 비자/마스터/유어스 : 1%, 아멕스/S& : 1.4%, JCB/UPI : 없음)
              </Li>
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

const Title = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 46px;

  margin-left: 10px;
`;

const MoreInfoButtonWrapper = styled.div`
  position: absolute;
  top: 0.6875rem;
  right: 0.6875rem;
`;

const ModalWrapper = styled.div`
  width: 80%;
  height: 70%;
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
  /* width: 40px;
  height: 40px; */
  background: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
