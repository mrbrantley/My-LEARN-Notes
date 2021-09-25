const firstVowIndex = (string) => {
  let vowels = 'aeiouAEIOU'
  for (i=0; i<string.length; i++) {
    for (j=0; j<vowels.length; j++) {
      if(string[i]===vowels[j]){
        return string.indexOf(string[i]);
      }
    }
  }
};

var currentWord = "learn"

console.log(firstVowIndex(currentWord))

var pigLatinTranslate = (currentWord)
if (firstVowIndex===0) {
  return string + "way"
} else if (firstVowIndex>0)
  return 