const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// .charAt(index #) returns the character at a given position in a string
// .toUpperCase() converts all the characters of an inout string to uppercase
// .slice(start, end) slices a given string from specified "start" position until the specified "end" position

//combining all the above functions will capitalize the first word of an input string

// .split(" ") split the string into an array of strings
// .join(" ") join all the elements of the array back into a string

const titleCased = (input) => {
  return tutorials.map(eachLine => {
    const splitStrings = eachLine.split(' ');
    const capitalizedEachLine = 
      splitStrings.map(splitStrg => splitStrg.charAt(0).toUpperCase() + splitStrg.slice(1));
    const result = capitalizedEachLine.join(' ');
    return result;
  });
}

