// 몇번의 월요일이 지났는지 체크하는 함수
export function getPadssedMondayCount(startDate: string) {
  const now: Date = new Date();
  const startTime: Date = new Date(parseInt(startDate));

  // 시작 이후로 몇 일이 지났는지 계산
  const diffDays: number = Math.floor(
    (now.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24)
  );

  // 시작 이후부터 지나온 월요일의 수 계산
  const dayOfWeek: number = (startTime.getDay() + diffDays) % 7;
  const mondayCount: number = Math.floor((diffDays - dayOfWeek + 1) / 7);

  return mondayCount;
}

export function isMondayToday() {
  const now = new Date();
  const dayOfWeek = now.getDay();

  if (dayOfWeek === 1) {
    // 현재 요일이 월요일인 경우 true 반환
    return true;
  } else {
    // 현재 요일이 월요일이 아닌 경우 false 반환
    return false;
  }
}
