import styled from '@emotion/styled';
import React, { ReactElement, useEffect } from 'react';
import FrontFace from '../../../assets/FrontFace.png';
import Hand from '../../../assets/Hand.png';
import Finger from '../../../assets/Finger.png';
import Title from '../../common/Title';
import { Spacing } from '../../common/Spacing';

function MassageTab(): ReactElement {
  const [expanded1, setExpanded1] = React.useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded1(true);
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Wrapper>
      <Spacing height={20} />
      <Title style={{ lineHeight: '50px', fontSize: '26px' }}>진정 지압</Title>
      <SubTitle>마지막까지 긴장을 놓지 마세요</SubTitle>
      <Spacing height={20} />
      <Description>
        <h1>급하신가요..?</h1>
        <Spacing height={5} />
        {/* <br /> */}
        아래 3곳을 자극해 진정시켜보세요.
      </Description>
      <Spacing height={20} />
      <Description>
        <h1>인중혈</h1>
        <Spacing height={5} />

        <span>
          인중혈은 코와 윗입술 사이의 오목한 지점을 말하는 것으로, 엄지나 검지로 혈을 누르면서
          문질러 주면, 뇌의 각성에 탁월한 효과가 있습니다.
        </span>
        <Spacing />
        <ImageWrapper>
          <Image src={FrontFace} />
        </ImageWrapper>
      </Description>
      <Spacing height={20} />
      <Description>
        <h1>장문혈</h1>
        <Spacing height={5} />

        <span>
          새끼손가락 쪽 손목부위로, 대략 손목에서 팔꿈치 방향으로 9~10cm 떨어져 있는 혈입니다.
          <br />
          <br />
          화장실이 급할 때 5초 정도 반대편 엄지손가락으로 지그시 눌러주고, 3초정도 시간을 두고 다시
          5초 정도를 눌러줍니다. 이를 10회에서 15회 정도 반복해주면 급했던 용변이 상당히 완화되는
          효과가 있습니다.
        </span>
        <Spacing />
        <ImageWrapper>
          <Image src={Hand} />
        </ImageWrapper>
      </Description>
      <Spacing height={20} />
      <Description>
        <h1>상양혈</h1>
        <Spacing height={5} />

        <span>
          검지에 위치한 혈자리로, 검지손톱의 엄지 쪽 방향 뿌리각 조금 옆에 위치하고 있는 혈자리
          입니다.
          <br />
          <br />
          상양혈은 열을 내려주는 혈자리로, 급똥에 대한 변의를 누그러뜨리는 효과도 있지만 장의 상태가
          나빠 설사를 할 때, 감기에 걸려 열이 나거나 목이 부었을 때 상양혈을 자극해주거나 피를
          빼내주면 효과가 좋습니다.
        </span>
        <Spacing />
        <ImageWrapper>
          <Image src={Finger} />
        </ImageWrapper>
      </Description>

      <Spacing height={20} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 20px 20px 20px;
  background-color: #eff1f2;
`;

const SubTitle = styled(Title)`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
`;

const Description = styled.div`
  padding: 0 25px 25px 25px;
  width: 100%;
  line-height: 22px;
  color: #4b4b4f;
  position: relative;

  border-radius: 20px;
  background: #ffffff;
  box-shadow: 8px 8px 16px #ebebeb, -8px -8px 16px #ffffff;

  /* overflow: hidden; */

  h1 {
    width: 100%;
    background-color: white;
    font-size: 20px;
    font-weight: 700;
    /* margin-bottom: 10px; */
    position: sticky;
    top: 0;
    padding: 20px 0 10px 0;

    backdrop-filter: blur(2px) saturate(149%);
    -webkit-backdrop-filter: blur(2px) saturate(149%);
    background-color: rgba(255, 255, 255, 0.6);
  }
  span {
    font-size: 16px;
    font-weight: 300;
    color: #4b4b4f;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Image = styled.img`
  /* width: 100%; */
  max-height: 200px;
`;

export default MassageTab;
