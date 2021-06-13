/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;

  if (words[0].length > words[1].length) {
    return longest(words.slice(0, 1))
  }
  return longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length < 1) return '';

  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 1) return true;
  if (str[0] !== str[str.length - 1]) return false
  return isPalindrome(str.slice(1, str.length - 1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = '', idx = 0) {
  if (str.length === newStr.length) return newStr;
  newStr += str[str.length - 1 - idx]
  return revString(str, newStr, idx + 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if(left > right) return -1;
  let middle = Math.floor((right+left)/2);
  if(arr[middle] === val) return middle;
  if(arr[middle] > val) return binarySearch(arr, val, left, middle-1);
  return binarySearch(arr, val, middle+1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
