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

const titleCased = () => {

  const result = tutorials.map(title => {
    // first it's iterating through the array
    let splitWords = title.split(" ")
    // split each title in word array
    return capitalized(splitWords);
    // as it does that it sends it to the capitalized function
  })


  function capitalized(wordArray) {
    // iterating through each word
    // as it's doing that it's capilizing the first letter in each word and saves it into capital title
    // let firstLetter = word[0]

    let capitalTitle = wordArray.map(word => word.replace(word[0], word[0].toUpperCase()))
    // joins the capital title array into sentences again
    return capitalTitle.join(" ")
  }

  // the last step is to return the joined result array which has the solution
  return result;
}


// const titleCased  = () => {

//   const result = tutorials.map(title => {
//     let splitWords = title.split(" ")
//     return capitalized(splitWords);
//   })

//   function capitalized(wordArray) { 
//     let newArray = wordArray.map(word => word.replace(word[0]),word[0].toUpperCase())
//     return result;
//   }
// }













// const titleCased = (tutortials) => {
//   const lowerCase = tutorials.map(function(title) {
//     return title.toLowerCase()
//   })
//   const wordSeperate = lowerCase.map(function(title) {
//     return title.split(' ')
//   })
//   const letterSeperate = wordSeperate.map(function(word) {
//     for (let i = 0; i < word.length; i++) {
//       return word[i][0].toUpperCase() + word[i][i]
//     }})

//   return letterSeperate;
//   }