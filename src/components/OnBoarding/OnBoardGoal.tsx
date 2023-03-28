import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { motion } from 'framer-motion';
import { ReactElement, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFlow } from '../../stackflow';
import { AppScreen } from '../../stackflow/components';
import { Button } from '../common/Button';
import { View } from '../common/Layout';
import { Spacing } from '../common/Spacing';

const transition = {
  duration: 0.5,
  delay: 0,
};

const textReveal = {
  initial: {
    y: '30%',
    opacity: 0,
    display: 'none',
  },
  open: {
    y: '0%',
    opacity: 1,
    display: 'flex',
  },
  close: {
    y: '30%',
    opacity: 0,
  },
};

const TEMPLATE_CHIP = [
  { id: 0, title: '운동하기' },
  { id: 1, title: '독서하기' },
  { id: 2, title: '취미생활' },
  { id: 3, title: '취업하기' },
  { id: 4, title: '취미생활' },
];

function OnBoardGoal(): ReactElement {
  const { replace, pop } = useFlow();
  const [selectedChip, setSelectedChip] = useState<number | null>(null);
  const { watch, setValue } = useForm({
    defaultValues: {
      goal: '',
    },
  });

  const resize = (event: any) => {
    if (!event?.target) return;
    (event.target as HTMLElement).style.height = '10px';
    (event.target as HTMLElement).style.height =
      12 + (event.target as HTMLElement).scrollHeight + 'px';
  };

  const goalValue = watch('goal');

  const isValid = useMemo(() => {
    if (goalValue?.length === 0) return false;
    return true;
  }, [goalValue]);

  const isRenderTemplateSection = useMemo(() => {
    if (goalValue?.length === 0) {
      setSelectedChip(null);
    }
    if (goalValue && goalValue.length !== 0) return false;
    return true;
  }, [goalValue]);

  return (
    <AppScreen
      appBar={{
        appendRight: () => {
          return (
            <SkipButton
              onClick={() => {
                pop();
                replace('HomePage', {}, { animate: true });
              }}
            >
              건너뛰기
            </SkipButton>
          );
        },
      }}
      accessoryBar={
        <BottomWrapper>
          <Button
            disabled={!isValid}
            onClick={() => {
              pop();
              replace('HomePage', {}, { animate: true });
            }}
          >
            명언 받기
          </Button>
        </BottomWrapper>
      }
    >
      <View>
        <Title animate={'open'} variants={textReveal} initial="initial" transition={transition}>
          어떤 목표를
          <br />
          이루고 싶나요?
        </Title>
        <Spacing />
        <TextareaWrapper>
          <Textarea
            autoFocus
            value={watch('goal')}
            onChange={(event) => setValue('goal', event.target.value)}
            className="autosize"
            onKeyDown={resize}
            onKeyUp={resize}
            placeholder="간단하게 적어주세요"
          />
        </TextareaWrapper>
        <Spacing height={16} />

        <TempleteWrapper
          animate={isRenderTemplateSection ? 'open' : 'close'}
          variants={textReveal}
          transition={transition}
        >
          <SubTitle>이런 목표는 어때요?</SubTitle>
          <ChipsWrapper>
            {TEMPLATE_CHIP.map((chip) => (
              <Chip
                key={chip.id}
                onClick={() => {
                  setSelectedChip(chip.id);
                  setValue('goal', chip.title);
                }}
                selected={selectedChip === chip.id}
              >
                {chip.title}
              </Chip>
            ))}
          </ChipsWrapper>
        </TempleteWrapper>
      </View>
    </AppScreen>
  );
}

const Title = styled(motion.div)`
  padding: 24px 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  color: #000000;

  overflow: hidden;
  flex-shrink: 0;
`;

const TextareaWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 26px;
  max-height: 78px;

  caret-color: #3c4fff;

  border: none;
  &:focus {
    outline: none;
  }
  resize: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;

  letter-spacing: -0.01em;

  &::placeholder {
    color: #bfbfc2;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
`;

const BottomWrapper = styled(Wrapper)`
  width: 100%;
  height: fit-content;
  padding: 0 20px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const TempleteWrapper = styled(Title)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;
`;
const SubTitle = styled(Title)`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  padding: 12px 0;
  letter-spacing: -0.01em;
  color: #000000;
`;

const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

const Chip = styled.div<{ selected: boolean }>`
  border: 1px solid #e3e5e8;
  border-radius: 32px;
  padding: 12px 16px;
  gap: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  letter-spacing: -0.01em;

  ${({ selected }) => {
    if (selected) {
      return css`
        background: #3c4fff;
        color: #ffffff;
      `;
    }
  }}
`;

const SkipButton = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-right: 0.5rem;

  letter-spacing: -0.01em;

  color: #666666;
`;

export default OnBoardGoal;
