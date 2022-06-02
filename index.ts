// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

16393;

3;
90;
300;
6000;
10000;

function mathProblem(number): number[] {
  let newNums = [];
  let num = 1;

  while (num < 12) {
    console.log('Hi');
  }
  return;
}

// mathProblem(16393);

function isPrefixString(s: string, words: string[]): boolean {
  let word = words.join('');
  let newWord = '';
  let length = s.length > words[0].length ? s.length : words[0].length;
  // console.log(length);
  for (let a = 0; a < length; a++) {
    newWord += word[a];
  }
  // console.log(newWord.localeCompare(s) === 0);
  if (newWord.localeCompare(s) !== 0) {
    return false;
  } else {
    return true;
  }
}

function isPrefixString2(s: string, words: string[]): boolean {
  let count = 0;
  let res = false;

  if (words.join('').startsWith(s)) {
    for (let i = 0; i < words.length; i++) {
      console.log('DDD-', words[i].length);
      count += words[i].length;

      // if (count === s.length) {
      //   res = true;
      //   i = words.length;
      // }
    }
  }
  return res;
}

isPrefixString2('iloveleetcode', ['i', 'love', 'leetcode', 'apples']);

console.log(isPrefixString('aaaa', ['aa', 'aaa', 'leetcode', 'apples']));
function whatIsInAName<T>(collection: T[], source: T): T[] {
  const arr = [];
  console.log(collection.length);

  for (let a in collection) {
    // console.log(collection[a]);
  }

  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);

function romanToInt(str: string): number {
  let result: number[] = [];
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let a = 0; a < str.length; a++) {
    let value = 0;
    for (let romanNumber in romans) {
      if (str[a] === romanNumber) {
        // console.log(str[a] === 'I' && str[a + 1] === 'V');
        if (str[a] === 'I' && str[a + 1] === 'V') {
          // value = romans[romanNumber] - 1;
          console.log(romans[romanNumber], 'innie');
        }
      }
    }
    // console.log(value);
  }
  // console.log(result);

  return;
}

// romanToInt('MCMXCIV');

function makeSumOfArr(arr: number[]): number {
  let newNum = 0;

  for (let a = 0; a < arr.length; a++) {
    newNum = newNum + arr[a];
  }
  // console.log(newNum);
  return newNum;
}

// makeSumOfArr([1000, 900, 90, 4]);

// function diffArray(arr1: number[], arr2: number[]) {
//   let newArr = arr1.concat(arr2).sort();
//   let newArr2 = [];

//   for (let a = 0; a < newArr.length; a++) {
//     if (newArr[a] === newArr[a + 1]) {
//       newArr.splice(newArr[a])
//     } else {

//     }
//   }

//   console.log(newArr2);
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// console.log(factorialize(7));

// function factorialize(num: number) {
//   if (num < 0) return -1;
//   if (num === 1) return 1;
//   if (num > 1) {
//     return num * factorialize(num - 1);
//   }
//   return num;
// }

// // console.log(factorialize(6));

// function findLongestWordLength(str: string): number {
//   let strArr = str.split(' ');
//   let preStringLength;
//   for (let i = 0; i < strArr.length; i++) {
//     let currentStr = strArr[i];
//     // console.log(currentStr);
//   }
//   // console.log(strArr);
//   return str.length;
// }

// findLongestWordLength('The quick brown fox jumped over the lazy dog');
