type highestOccurrenceType = (
  input: Array<string | number>
) => Array<string | number>;

const highestOcurrence: highestOccurrenceType = (arr) => {
  let itemsCount: any = {};
  let highOccNum: number = 0;
  let resultArr: Array<string | number> = [];

  arr.forEach((ele) => {
    if (!itemsCount[ele]) {
      itemsCount[ele] = 1;
    } else {
      itemsCount[ele]++;
    }

    if (itemsCount[ele] > highOccNum) {
      highOccNum = itemsCount[ele];
      resultArr = [ele];
    } else if (itemsCount[ele] === highOccNum) {
      resultArr.push(ele);
    }
  });

  return resultArr;
};
