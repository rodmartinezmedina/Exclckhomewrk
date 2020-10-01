type maxSubarraySumType = (input: Array<number>, num: number) => number;

const maxSubArraySum: maxSubarraySumType = (input, num) => {
  let currMax: number = 0;

  for (let i = 0; i < num; i++) {
    currMax += input[i];
  }
  let maxTillNow: number = currMax;

  for (let j = num; j < input.length; j++) {
    currMax += input[j] - input[j - num];
    maxTillNow = Math.max(currMax, maxTillNow);
  }
  return maxTillNow;
};
