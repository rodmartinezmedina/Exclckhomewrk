### Exercise – Full-stack Engineer

### Candidate: Rodrigo Martinez Medina

https://www.linkedin.com/in/rodrigo-martinez-medina/

rodmartinezmedina@gmail.com



#### Exercice 1: Highest Occurrence

Write a function called `highestOccurrence`. Given an array of `string` and/or `number`, this function should return the array item with the highest frequency. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type highestOccurrence = (input: Array<string | number>) => Array<string | number>;
```

Example:

```ts
highestOccurrence(['a', 'a', 2, 2, 2, 'a', 4]);
// ['a', 2]
```

**<u>Response in JS:</u>** 

```js
function highestOcurrence (arr) { 
      let itemsCount = {}; 
      let highOccNum = 0;
      let resultArr = [];

      arr.forEach(ele => {
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

      // return itemsCount
      return resultArr;
    }
```



#### Exercice 2: Maximum Sub Array Sum

Write a function called `maxSubarraySum` which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type maxSubarraySum = (input: Array<number>, num: number) => number;
```

Example:

```ts
maxSubarraySum([4,2,1,6,2], 4)
// 13
maxSubarraySum([], 4)
// null
```

**<u>Response in JS:</u>**

```js
const maxSubArraySum = (input, num) => {

  let currMax = 0;
	for (let i = 0; i < num; i++) {
		currMax += input[i];
	}
	let maxTillNow = currMax;

	for (let j = num; j < input.length; j++) {
		currMax += (input[j] - input[j - num]);
		maxTillNow = Math.max(currMax, maxTillNow);
	}
	return maxTillNow; 
}
```



#### Exercice 3: Average Pair

Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. The time complexity of the solution should be inferior or equal to O(n).

Signature:

```ts
type averagePair = (input: Array<number>, target: number) => boolean;
```

Example:

```ts
averagePair([1,2,3], 2.5)
// true
averagePair([-1,0,3,4,5,6], 4.1)
// false
```

<u>**Response in JS:**</u>

```js
 const averagePair = function (input, target) { 
    let result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
         
            if ((input[i] + input[j]) / 2 === target) {
                result.push(i)
            }
        }
    }
    return result.length > 0 ? true: false;
}
```



#### Exercice 4: Contributors List

By using the [GitHub REST API](https://docs.github.com/en/rest) or the [GitHub GraphQL API](https://docs.github.com/en/graphql), build an application that allows a user to list the contributors of a given repository. No other requirement: show us your skills!