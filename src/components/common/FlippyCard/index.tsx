import styled from '@emotion/styled';
import React, { ReactElement, useRef } from 'react';
import './flippyCard.css';

interface Props {
  imageUrl: string;
}

function FlippyCard({ imageUrl }: Props): ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerCardRef = useRef<HTMLDivElement>(null);
  const innerCardBackfaceRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const calculateAngle = function (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: HTMLDivElement
  ) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
    if (
      !innerCardRef.current ||
      !cardRef.current ||
      !innerCardBackfaceRef.current ||
      !glareRef.current
    )
      return;
    const parent = cardRef.current as HTMLElement;
    if (parent.getAttribute('data-filter-color') !== null) {
      dropShadowColor = parent.getAttribute('data-filter-color') as string;
    }

    parent.classList.add('animated');
    // Get the x position of the users mouse, relative to the button itself
    const x = Math.abs(
      item.getBoundingClientRect().x - ((e as any).clientX ?? (e as any)?.touches?.[0].clientX)
    );
    // Get the y position relative to the button
    const y = Math.abs(
      item.getBoundingClientRect().y - ((e as any).clientY ?? (e as any)?.touches?.[0].clientY)
    );

    // Calculate half the width and height
    const halfWidth = item.getBoundingClientRect().width / 2;
    const halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    const calcAngleX = (x - halfWidth) / 6;
    const calcAngleY = (y - halfHeight) / 14;

    const gX = (1 - x / (halfWidth * 2)) * 100;
    const gY = (1 - y / (halfHeight * 2)) * 100;

    glareRef.current.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`;
    item.style.perspective = `${halfWidth * 6}px`;

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    innerCardBackfaceRef.current.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

    if (parent.getAttribute('data-custom-perspective') !== null) {
      parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`;
    }

    // Reapply this to the shadow, with different dividers
    const calcShadowX = (x - halfWidth) / 3;
    const calcShadowY = (y - halfHeight) / 6;

    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
  };

  return (
    <div
      className="card blastoise"
      ref={cardRef}
      onTouchMove={(e) => {
        if (!innerCardRef.current) return;
        calculateAngle(e, innerCardRef.current);
      }}
      onTouchStart={(e) => {
        if (!innerCardRef.current) return;
        calculateAngle(e, innerCardRef.current);
      }}
      onTouchEnd={(e) => {
        if (!innerCardRef.current) return;
        calculateAngle(e, innerCardRef.current);
      }}
      onMouseEnter={(e) => {
        if (!innerCardRef.current) return;
        calculateAngle(e, innerCardRef.current);
      }}
      onMouseMove={(e) => {
        if (!innerCardRef.current) return;
        calculateAngle(e, innerCardRef.current);
      }}
      onMouseLeave={(e) => {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
        if (!innerCardRef.current || !cardRef.current || !innerCardBackfaceRef.current) return;
        const item = cardRef.current as HTMLElement;
        if (cardRef.current.getAttribute('data-filter-color') !== null) {
          dropShadowColor = item.getAttribute('data-filter-color') as string;
        }
        item.classList.remove('animated');
        innerCardRef.current.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        innerCardBackfaceRef.current.style.transform = `rotateY(0deg) rotateX(0deg) scale(1.01) translateZ(-4px)`;
        innerCardRef.current.style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
      }}
    >
      <span className="inner-card-backface" ref={innerCardBackfaceRef}>
        <span className="image">
          <span
            className="unflip"
            onClick={() => {
              cardRef.current?.classList.remove('flipped');
            }}
          >
            Unflip
          </span>
        </span>
      </span>
      <span className="inner-card" ref={innerCardRef}>
        <span
          className="flip"
          onClick={() => {
            cardRef.current?.classList.add('flipped');
          }}
        >
          Flip
        </span>
        <span className="glare" ref={glareRef} />
      </span>
    </div>
  );
}

const Card = styled.div``;

export default FlippyCard;
