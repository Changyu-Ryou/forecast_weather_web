import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

function HomeTab(): ReactElement {
  return (
    <Wrapper>
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <ContentsWrapper>
        <TitleWrapper>
          조금만
          <br />
          참으세요!
        </TitleWrapper>
        <SubTitle>무엇보다 심리적 안정이 중요합니다.</SubTitle>
      </ContentsWrapper>
      <FooterWrapper>
        <p>👇🏻하단 메뉴들을 확인해보세요👇🏻</p>
      </FooterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .shape-blob {
    background: #ed1250;
    height: 100px;
    width: 100px;
    border-radius: 30% 50% 20% 40%;
    animation: transform 2s ease-in-out infinite both alternate,
      movement_one 4s ease-in-out infinite both;
    opacity: 0.7;
    position: absolute;
    left: 70%;
    top: 50%;
  }
  .shape-blob.one {
    background: #56cbb9;
    height: 250px;
    width: 250px;
    left: 20%;
    top: 10%;
    transform: rotate(-180deg);
    animation: transform 5s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
  }

  .shape-blob.two {
    background: #fdd25d;
    height: 170px;
    width: 170px;
    left: 0%;
    top: 50%;
    transform: rotate(-180deg);
    animation: transform 3s ease-in-out infinite both alternate,
      movement_two 6s ease-in-out infinite both;
  }

  @keyframes transform {
    0%,
    100% {
      border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
    }
    20% {
      border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
    }
    40% {
      border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
    }
    60% {
      border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
    }
    80% {
      border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
    }
  }

  @keyframes movement_one {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: translate(0, 0) rotateY(10deg) scale(1.2);
    }
  }

  @keyframes movement_two {
    0%,
    500% {
      transform: none;
    }
    50% {
      transform: translate(0, 0) rotate(-200deg) scale(1.2);
    }
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 50px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  transform: translate(0, 0);

  p {
    font-size: 13px;
    font-weight: 300;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  padding: 30px 10px 20px 30px;
  transform: translate(0, 0);
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  padding: 0 10px 0 30px;
  transform: translate(0, 0);
`;

export default HomeTab;
