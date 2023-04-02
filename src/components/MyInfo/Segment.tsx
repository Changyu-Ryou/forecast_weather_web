import styled from '@emotion/styled';
import React from 'react';

type Props = {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

export const Segment = ({ selectedTab, setSelectedTab }: Props) => {
  const items = ['한마디', '카드'];

  const SegmentButton = items.map((d, i) => {
    return (
      <SecmentItem key={i} onClick={() => setSelectedTab(i)}>
        <input
          type="radio"
          id={`item-${i + 1}`}
          name="item"
          value={`item-${i + 1}`}
          defaultChecked={selectedTab === i}
        />
        <SegmentBtn className="segment-button" htmlFor={`item-${i + 1}`}>
          {d}
        </SegmentBtn>
      </SecmentItem>
    );
  });

  return <SegmentWrapper className="segment"> {SegmentButton} </SegmentWrapper>;
};

const SegmentWrapper = styled.div`
  width: 100%;
  display: inline-flex;

  padding: 4px;
  gap: 4px;
  background: #f3f3f4;
  border-radius: 12px;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + .segment-button {
    background: #ffffff;
    border-radius: 8px;
    color: #1f2023;
  }
`;

const SecmentItem = styled.div`
  width: 50%;
  text-align: center;
`;

const SegmentBtn = styled.label`
  display: block;

  border-right: 1px solid deepskyblue;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.01em;

  color: #8b919c;

  &:last-child {
    border-right: none;
  }
`;
