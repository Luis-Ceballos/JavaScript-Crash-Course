/* Try out each of the methods listed in the “Other Useful String Methods”
section. Make sure you test some edge cases, or situations where you call
them with unusual input values. For example, what happens if you give
the repeat method a count of 0? What about -1? */

// str.toLowerCase() ​  Returns a new string with all the uppercase characters in str converted to lowercase
// str.includes(otherStr) ​  Returns true if str includes the string given as the otherStr argument
// str.padStart(num, char) ​  Returns a new string that has at least num characters, and adds the char character as many times as needed to the start of the string if it ­ isn’t already num in length
// str.repeat(count) ​  Returns a new string with str repeated count times

let str1 = 'Hello, World!';
let str2 = 'My name is Louie';
let str3 = 'Im 24';
let str4 = 'I like pizza';


console.log(str1.toLowerCase());
console.log(str2.includes(str1)); // Should return false
console.log(str3.padStart(1, 'Im'));
console.log(str4.repeat(10));