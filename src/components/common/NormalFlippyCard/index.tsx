import styled from '@emotion/styled';
import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import { QuoteType } from '../../../assets/data';
import { Spacing } from '../Spacing';
import backCardImage from '../../../assets/Image/card_back.png';

type Props = {
  frontImage: string;
  spinFirst?: boolean;
  onClick?: () => void;
  blockFlip?: boolean;
  quote?: QuoteType;
};

export type InnerRefProps = {
  getInnerRef: () => HTMLDivElement | null;
};

const NormalFlippyCard = forwardRef(
  ({ frontImage, onClick, quote, spinFirst = false, blockFlip = false }: Props, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<string | undefined>(undefined);
    const innerCardRef = useRef<HTMLDivElement>(null);
    const innerCardBackfaceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      //resize observer card
      const resize = () => {
        setHeight(cardRef.current?.clientWidth + 'px');
      };
      const resizeObserver = new ResizeObserver(resize);
      cardRef.current && resizeObserver.observe(cardRef.current!);
      return () => {
        cardRef.current && resizeObserver.unobserve(cardRef.current!);
      };
    }, []);

    // 외부에서 주입된 Ref에 대한 접근 메소드를 생성
    useImperativeHandle(ref, () => ({
      // 외부에서 내부 Ref에 접근할 수 있는 함수 정의
      getInnerRef() {
        return cardRef.current;
      },
    }));

    return (
      <Card
        className={`card ${spinFirst ? 'flipping' : ''}`}
        ref={cardRef}
        initial={{
          opacity: 0,
        }}
        variants={{
          open: {
            opacity: 1,
          },
          closed: {
            opacity: 0,
          },
        }}
        animate={height !== '100%' ? 'open' : 'closed'}
        height={height}
        onClick={() => {
          if (blockFlip) return;
          cardRef.current?.classList.toggle('flipped');
          onClick?.();
        }}
      >
        <FrontImage className="inner-card" ref={innerCardRef} image={frontImage ?? backCardImage} />

        <BackFace className="inner-card-backface" ref={innerCardBackfaceRef}>
          {quote && (
            <Quotes className="quote-wrapper">
              <p className="quote">{quote?.quote}</p>
              <Spacing height={20} />
              <p className="author">- {quote?.author} -</p>
            </Quotes>
          )}
          <BackImage className="image"></BackImage>
        </BackFace>
      </Card>
    );
  }
);

export default NormalFlippyCard;

const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Card = styled(motion.div)<{ height?: string }>`
  box-shadow: none;
  backface-visibility: visible;
  background: transparent;
  transform-style: preserve-3d;
  padding: 0;
  height: auto;

  width: 100%;
  flex-shrink: 0;
  height: ${({ height }) => `calc((${height ?? '100%'}) * (4 / 3))`};

  max-height: 25rem;
  float: left;

  border: none;
  letter-spacing: 1px;
  transform: rotateY(0deg);

  transition: transform 0.6s ease-out;

  &.flipped {
    transform: rotateY(180deg);

    .quote-wrapper {
      opacity: 1;
    }
  }

  &.flipping {
    animation-name: ${Spin};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 2;
    animation-direction: alternate;
  }
`;

const BackFace = styled.span`
  transform: rotateX(0) rotateY(0deg) scale(1) translateZ(-4px);
  border-radius: 24px;
  background: linear-gradient(45deg, #0b0b2a, #0b0b2a);
  position: absolute;
  top: 0;
  color: white;
  padding: 2rem;
  box-sizing: border-box;

  will-change: transform, filter;
  left: 0;
  width: 100%;
  height: 100%;

  filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
  perspective-origin: 0 0;
  z-index: 0;
`;

const BackImage = styled.span`
  background-color: #f3f3f4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 24px;
  height: 100%;
  transform: rotateY(180deg);
`;

const FrontImage = styled.span`
  font-size: 2rem;
  color: white;
  padding: 1rem 2rem;
  line-height: 3rem;
  will-change: transform, filter;
  float: none;
  background-size: calc(100% + 6px) auto;
  background-position: -3px -3px;
  margin: 0;

  height: auto;
  border-radius: 24px;
  box-sizing: border-box;
  overflow: hidden;
  display: block;
  margin: 0px auto;
  transform: rotateX(0deg) rotateY(0deg) scale(1);
  top: 0;
  height: 100%;
  filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
  font-weight: 500;
  perspective-origin: 0 0;
  letter-spacing: 0;

  background-image: url(${(props: { image: string }) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Quotes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1f2023;
  z-index: 9999;
  padding: 30px;

  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 24px;
  height: 100%;

  opacity: 0;
  transition: opacity 0.6s ease-out;

  .quote {
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    text-align: center;
    letter-spacing: -0.01em;
  }

  .author {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #6f7580;
  }
`;
