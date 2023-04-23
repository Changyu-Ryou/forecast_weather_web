import seedrandom from 'seedrandom';

export const generateBirthDayLottoNumbers = (birthdate: string) => {
  const today = new Date(); // 오늘 날짜를 구함
  const birth = new Date(birthdate); // 입력된 생일을 구함

  // 생일과 오늘 날짜 사이의 일 수를 계산
  const diffTime = Math.abs(today.getTime() - birth.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 1부터 45까지의 숫자를 저장한 배열을 생성
  const allNumbers = Array.from({ length: 45 }, (_, i) => i + 1);

  // 무작위로 섞은 후, 앞에서부터 6개를 선택하여 배열에 저장
  const random = seedrandom(diffDays.toString());
  const shuffledNumbers = allNumbers.sort(() => random() - 0.5);
  const numbers = shuffledNumbers.slice(0, 6);

  return numbers.sort((a, b) => a - b);
};

export function generateLottoNumbers() {
  // 1부터 45까지의 숫자를 저장한 배열을 생성
  const allNumbers = Array.from({ length: 45 }, (_, i) => i + 1);
  // 배열 요소를 무작위로 섞은 후, 앞에서부터 6개를 선택하여 배열에 저장
  const random = seedrandom(Math.random().toString());
  const shuffledNumbers = allNumbers.sort(() => random() - 0.5);
  const numbers = shuffledNumbers.slice(0, 6);

  return numbers.sort((a, b) => a - b);
}
