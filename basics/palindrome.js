const string1 = 'nayan';
const string2 = 'Na;@Y-aN';

const isPalindrome = (str) => {
  let string = str
      .replace(/[^\w]/gi, "") // To replace all non-words characters
      .toLowerCase(); // To make all characters lower case
  return string == string.split('').reverse().join('');
}


isPalindrome(string1); // true
isPalindrome(string2); // true