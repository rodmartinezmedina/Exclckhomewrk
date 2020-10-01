type averagePairType = (input: Array<number>, target: number) => boolean;

const averagePair: averagePairType = (input, target) => {
  let result: Array<number> = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if ((input[i] + input[j]) / 2 === target) {
        result.push(i);
      }
    }
  }
  return result.length > 0 ? true : false;
};
