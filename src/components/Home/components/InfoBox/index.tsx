import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import YoutubeWrapper from './YoutubeWrapper';

function InfoBox() {
  const { watch } = useFormContext();
  const selectedItemValue = watch('selectedItem');

  return selectedItemValue ? (
    <Wrapper>
      <YoutubeWrapper index={selectedItemValue?.index} youtubeUrl={selectedItemValue?.youtubeUrl} />
      <ContentsWrapper>
        <Title>{selectedItemValue.title}</Title>
        <SubTitle>{selectedItemValue.address}</SubTitle>
        <SubTitle>{selectedItemValue.phone}</SubTitle>
        <SubTitle>{selectedItemValue.menus.join(', ')}</SubTitle>
      </ContentsWrapper>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 60px);
  max-width: 400px;
  height: auto;
  min-height: 100px;
  border-radius: 15px;
  background-color: white;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  border: 3px solid #f2f2f2;
  box-sizing: border-box;

  border-radius: 15px;
  overflow: hidden;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 13px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;

  width: 100%;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default InfoBox;
