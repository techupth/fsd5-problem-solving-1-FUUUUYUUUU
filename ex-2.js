//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let cleantext = "";
  let lastIndex;
  s = s.toLowerCase();

  for (let i of s) {
    if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
      cleantext += i;
    }
  }

  lastIndex = cleantext.length - 1;
  console.log(cleantext);

  for (i = 0; i < lastIndex / 2; i++) {
    if (cleantext[i] != cleantext[lastIndex - i]) {
      return false;
    }
  }

  return true;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
