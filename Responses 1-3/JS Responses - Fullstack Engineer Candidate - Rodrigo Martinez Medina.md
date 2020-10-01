### Exercise – Full-stack Engineer

### Candidate: Rodrigo Martinez Medina

https://www.linkedin.com/in/rodrigo-martinez-medina/

rodmartinezmedina@gmail.com

#### Exercice 1: Highest Occurrence

**Example**

```ts
highestOccurrence(["a", "a", 2, 2, 2, "a", 4]);
// ['a', 2]
```

**<u>Solution: </u>**

```js
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
```

#### Exercice 2: Maximum Sub Array Sum

**Example**

```ts
maxSubarraySum([4, 2, 1, 6, 2], 4);
// 13
maxSubarraySum([], 4);
// null
```

**<u>Solution: </u>**

```js
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
```

#### Exercice 3: Average Pair

**Example:**

```ts
averagePair([1, 2, 3], 2.5);
// true
averagePair([-1, 0, 3, 4, 5, 6], 4.1);
// false
```

<u>**Solution: **</u>

```js
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
```

#### Exercice 4: Contributors List

[GitHub REST API]

An application that allows a user to list the contributors of a given repository.

No other requirement: show us your skills!
