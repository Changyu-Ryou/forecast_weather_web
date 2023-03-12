import styled from '@emotion/styled';
import React, { ReactElement, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const FilterList = [
  {
    name: '전체',
    value: 'all',
    id: 0,
  },
  {
    name: '쯔양',
    value: 'zzyang',
    id: 1,
  },
  {
    name: '성시경',
    value: 'ssg',
    id: 2,
  },
  {
    name: '빅페이스',
    value: 'bigface',
    id: 3,
  },
];

function MarkerListFilter(): ReactElement {
  const { watch, setValue } = useFormContext();
  const filterValue = watch('filter');

  useEffect(() => {
    setValue('filter', FilterList[0]);
  }, []);

  return (
    <Wrapper>
      {FilterList.map((item) => {
        return (
          <Item
            key={item.id}
            selected={filterValue?.id === item.id}
            onClick={(e) => {
              setValue('filter', item);
              const target = e.target as HTMLElement;
              target?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }}
          >
            {item.name}
          </Item>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  left: 10px;
  top: 10px;
  gap: 10px;

  width: calc(100% - 110px);
  height: auto;
  overflow-x: auto;

  z-index: 1;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Item = styled.div<{ selected: boolean }>`
  flex-shrink: 0;
  padding: 10px 14px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  ${({ selected }) => {
    if (selected) {
      return `
        background-color: #3b70ff;
        color: white;
        font-weight: 900;
      `;
    }
    return `
      border: none;
      color: #000;
      font-weight: 500;
      
    `;
  }};

  font-size: 15px;
  box-sizing: border-box;
`;

export default MarkerListFilter;
