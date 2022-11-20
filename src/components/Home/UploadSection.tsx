import styled from '@emotion/styled';
import React, { ChangeEvent, ReactElement, useEffect, useMemo, useState } from 'react';
import Linkify from 'react-linkify';

import UploadIcon from '../../assets/upload_icon.svg';
import ImageIcon from '../../assets/image_icon.svg';
import QrScanner from 'qr-scanner';
import CircularProgress from '../../assets/CircularProgress';
import { copyToClipboard } from '../../utils/link';

type DateType = {
  isLoading: boolean;
  successUpload: boolean;
  fileData: undefined | string;
  filePath: undefined | string;
};

const INITIAL_STATE: DateType = {
  isLoading: false,
  successUpload: false,
  fileData: undefined,
  filePath: undefined,
};

function UploadSection(): ReactElement {
  const [data, setData] = useState(INITIAL_STATE);

  const scanFromImageHandler = async (evnet: ChangeEvent<HTMLInputElement>) => {
    setData(INITIAL_STATE);

    const file = evnet?.target?.files?.[0];
    if (file === undefined) {
      setData(INITIAL_STATE);
      alert('이미지를 가져오지 못했습니다.');
      return;
    }

    setData({ ...INITIAL_STATE, isLoading: true, filePath: URL.createObjectURL(file) });

    try {
      const result = await QrScanner.scanImage(file, { returnDetailedScanResult: true });
      setData((prev: DateType) => {
        if (prev === undefined)
          return {
            ...INITIAL_STATE,
            isLoading: true,
            fileData: result.data,
            filePath: URL.createObjectURL(file),
          };
        return {
          ...prev,
          isLoading: true,
          fileData: result.data,
          filePath: URL.createObjectURL(file),
        };
      });
    } catch (e) {
      setData(INITIAL_STATE);
      alert('이미지에서 QR코드를 찾지 못했습니다.');
      return;
    }
    evnet.target.value = '';
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (data.isLoading) {
      timer = setTimeout(() => {
        setData((prev: DateType) => {
          if (prev === undefined)
            return {
              ...INITIAL_STATE,
              isLoading: false,
            };
          return {
            ...prev,
            isLoading: false,
          };
        });
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [data.isLoading]);

  const renderImageSection = useMemo(() => {
    if (data.isLoading) return <CircularProgress />;
    if (data.fileData === undefined) return <ImageIconImg src={ImageIcon} />;
    return <PreviewImage src={data.filePath} />;
  }, [data.fileData, data.filePath, data.isLoading]);

  const renderUploadButton = useMemo(() => {
    if (data.isLoading) return <CircularProgress color="white" />;
    if (data.fileData === undefined) return <p>이미지 업로드</p>;
    return <p>다른 QR코드 보기</p>;
  }, [data.fileData, data.isLoading]);

  const copyDataHandler = () => {
    if (!data.fileData) {
      alert('에러가 발생했어요.');
      return;
    }
    copyToClipboard(data.fileData);
    alert('클립보드에 복사되었습니다.\n원하는 곳에 붙여넣기 해주세요.');
  };

  return (
    <Wrapper>
      <Main htmlFor="input-image">
        <ImagePreviewSection>{renderImageSection}</ImagePreviewSection>
        {!data.isLoading && data.fileData !== undefined && (
          <Result
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Linkify>{data.fileData}</Linkify>

            <CopyButtonWrapper>
              <CopyButton onClick={copyDataHandler}>Copy</CopyButton>
            </CopyButtonWrapper>
          </Result>
        )}
        <UploadButton>
          <UploadIconImg src={UploadIcon} />
          {renderUploadButton}
          <input
            type="file"
            id="input-image"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={scanFromImageHandler}
          />
        </UploadButton>
      </Main>
      <Footer>사진 속 QR코드의 정보를 분석해서 알려드려요</Footer>
    </Wrapper>
  );
}

export default UploadSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  max-width: 18.75rem;
  margin-top: 2.875rem;

  border-radius: 1.25rem;
  box-shadow: 0 0 2.5rem rgb(0 0 0 / 10%);
`;

const Main = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 32px;
`;

const ImagePreviewSection = styled.div`
  margin: 3rem 6.25rem 2.1875rem 6.25rem;
`;

const ImageIconImg = styled.img`
  width: 5rem;
`;

const PreviewImage = styled.img`
  width: 5rem;

  border-radius: 1.25rem;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;

  background-color: #0f70e6;
  border-color: #0f70e6;
  color: #fff;
  border-radius: 6.1875rem;
  font-size: 1.0625rem;
  line-height: 1.5;

  font-weight: 700;
`;
const UploadIconImg = styled.img`
  width: 1.25rem;
`;

const Result = styled.div`
  width: 100%;
  padding: 16px 0 32px 0;
  word-break: break-all;
`;

const Footer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  color: #747474;
  font-size: 12.8px;
  font-weight: 400;
`;

const CopyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
`;

const CopyButton = styled.div`
  width: fit-content;
  border: 0.0625rem solid #dee2e6;
  color: #747474;
  text-align: center;
  font-size: 80%;
  font-weight: 400;
  padding: 4px;
  border-radius: 4px;
`;
