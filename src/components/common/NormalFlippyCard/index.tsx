import styled from '@emotion/styled';
import React, { ReactElement, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import { QuoteCardType } from '../../../assets/data';
import { Spacing } from '../Spacing';

interface Props {
  imageUrl: string;
  frontImage: string;
  spinFirst?: boolean;
  onClick?: () => void;
  blockFlip?: boolean;
  quote?: QuoteCardType;
}

function NormalFlippyCard({
  imageUrl,
  frontImage,
  onClick,
  quote,
  spinFirst = false,
  blockFlip = false,
}: Props): ReactElement {
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
      transition={{
        duration: 1,
      }}
      height={height}
      onClick={() => {
        if (blockFlip) return;
        cardRef.current?.classList.toggle('flipped');
        onClick?.();
      }}
    >
      <FrontImage className="inner-card" ref={innerCardRef} image={frontImage} />
      <BackFace className="inner-card-backface" ref={innerCardBackfaceRef}>
        {quote && (
          <Quotes>
            <p className="quote">{quote?.quote}</p>
            <Spacing height={20} />
            <p className="author">- {quote?.author} -</p>
          </Quotes>
        )}
        <BackImage className="image" image={imageUrl}></BackImage>
      </BackFace>
    </Card>
  );
}

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

  transition: all 0.6s ease-out;

  &.flipped {
    transform: rotateY(180deg);
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
  border-radius: 14px;
  background: linear-gradient(45deg, #0b0b2a, #0b0b2a);
  position: absolute;
  top: 0;
  color: white;
  padding: 2rem;
  box-sizing: border-box;
  transition: all 0.15s ease-out;
  will-change: transform, filter;
  left: 0;
  width: 100%;
  height: 100%;

  filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
  perspective-origin: 0 0;
  z-index: 0;
`;

const BackImage = styled.span<{ image: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 14px;
  height: 100%;
  transform: rotateY(180deg);
  background-image: url(${(props: { image: string }) => props.image});
`;

const FrontImage = styled.span`
  font-size: 2rem;
  color: white;
  padding: 1rem 2rem;
  line-height: 3rem;
  will-change: transform, filter;
  float: none;
  background: black;
  background-size: calc(100% + 6px) auto;
  background-position: -3px -3px;
  margin: 0;
  transition: all 0.15s ease-out;
  height: auto;
  border-radius: 14px;
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
  color: white;
  z-index: 9999;

  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 14px;
  height: 100%;

  .quote {
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    text-align: center;
    letter-spacing: -0.01em;
    /* color: #1F2023; */
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
