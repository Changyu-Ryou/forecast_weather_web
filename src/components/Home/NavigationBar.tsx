import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Modal, Typography } from '@mui/material';

function NavigationBar(): ReactElement {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>해외결제 청구금액 계산</Title>
      </TitleWrapper>
      <MoreInfoButtonWrapper onClick={() => setOpen(true)}>
        <InfoOutlinedIcon />
      </MoreInfoButtonWrapper>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ModalWrapper>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
  width: 50%;
  height: 50%;
  background: white;
`;
