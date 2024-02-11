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

function titleCase(str) {
  // Split the string into words
  let words = str.split(' ');

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  // Join the words back together with spaces
  return capitalizedWords.join(' ');
}

function titleCased() {
  // Map over each tutorial and convert it to title case
  return tutorials.map(titleCase);
}

const titledTutorials = titleCased();
console.log(titledTutorials);