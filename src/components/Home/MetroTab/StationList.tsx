import styled from '@emotion/styled';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import StationItem from './StationItem';
import Xarrow from 'react-xarrows';
import { LineType, LINE_COLOR_HEX } from './constant/lines';
import { line_1 } from './constant/line_1';
import { line_2 } from './constant/line_2';
import { line_3 } from './constant/line_3';
import { line_4 } from './constant/line_4';
import { line_5 } from './constant/line_5';
import { line_6 } from './constant/line_6';
import { line_7 } from './constant/line_7';
import { line_8 } from './constant/line_8';
import { line_9 } from './constant/line_9';
import { line_gonghang } from './constant/line_gonghang';
import { line_oohi } from './constant/line_oohi';
import { line_kyongei } from './constant/line_kyongei';
import { line_sooin } from './constant/line_sooin';
import { line_uijungboo } from './constant/line_uijungboo';
import { line_incheon } from './constant/line_incheon';
import { line_sinbundang } from './constant/line_sinbundang';

interface Props {
  lineName: string | undefined;
  openDetailBottomSheetHandler: [LineType, (open: LineType) => void];
}

function MetroInfoList({ lineName, openDetailBottomSheetHandler }: Props) {
  const [render, setRender] = useState<boolean>(true);
  const [openDetailBottomSheet, setOpenDetailBottomSheet] = openDetailBottomSheetHandler;

  const line = useMemo(() => {
    switch (lineName) {
      case '1호선':
        return line_1;
      case '2호선':
        return line_2;
      case '3호선':
        return line_3;
      case '4호선':
        return line_4;
      case '5호선':
        return line_5;
      case '6호선':
        return line_6;
      case '7호선':
        return line_7;
      case '8호선':
        return line_8;
      case '9호선':
        return line_9;
      case '공항철도':
        return line_gonghang;
      case '우이신설경전철':
        return line_oohi;
      case '경의중앙선':
        return line_kyongei;
      case '수인분당선':
        return line_sooin;
      case '신분당선':
        return line_sinbundang;
      case '의정부경전철':
        return line_uijungboo;
      case '인천1&2호선':
        return line_incheon;
      default:
        return undefined;
    }
  }, [lineName]);

  useLayoutEffect(() => {
    // arrow library의 버그로 인해, line이 바뀔 때마다 arrow를 다시 render해줘야 함
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1);
    return () => {
      setRender(false);
    };
  }, [lineName]);

  // line의 row items를 render하는 함수
  const renderRowItems = (row: LineType[], idx: number) => {
    return row.map((el, rowIdx) => {
      if (!el)
        return (
          <StationItem
            key={`empty-${idx}-${rowIdx}`}
            line_id={0}
            line_name={''}
            station_id={0}
            station_name={''}
            next_station={undefined}
          />
        );
      return (
        <StationItem
          key={el.station_id}
          {...el}
          onClick={() => {
            setOpenDetailBottomSheet(el);
          }}
        />
      );
    });
  };

  // line의 row item과 nextStation Item을 연결하는 함수
  const renderRowArrows = (row: (LineType | undefined)[], idx: number) => {
    return row.map((el, rowIdx) => {
      if (!el) return null;
      if (!el.next_station) return null;
      return el.next_station.map((nextStationId) => {
        return (
          <Xarrow
            key={`arrow-${idx}-${rowIdx}-${nextStationId}`}
            start={`station_id_${el.station_id}`}
            end={`station_id_${nextStationId}`}
            color={LINE_COLOR_HEX[el.line_id]}
            strokeWidth={4}
            path={'smooth'}
            showHead={false}
            showTail={false}
            headShape={'heart'}
            startAnchor={'bottom'}
            endAnchor={'top'}
          />
        );
      });
    });
  };

  return render ? (
    <Wrapper>
      {line?.map((row, idx) => {
        return (
          <ListWrapper key={idx + 1}>
            {renderRowItems(row, idx + 1)}
            {renderRowArrows(row, idx + 1)}
          </ListWrapper>
        );
      })}
    </Wrapper>
  ) : null;
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  overflow: auto;
  position: relative;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
`;

export default MetroInfoList;
