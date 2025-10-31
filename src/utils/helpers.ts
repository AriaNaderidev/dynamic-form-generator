const usedNumbers = new Set<number>();

export const getUniqueRandomNumber = (): number => {
  let randomNum: number;

  do {
    randomNum = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  } while (usedNumbers.has(randomNum));

  usedNumbers.add(randomNum);
  return randomNum;
};
