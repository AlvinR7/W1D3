function countLetters(input) {
var input = input.split(" ").join("").split("");
var countList = {};

  for (var i = 0; i < input.length; i++) {
    letter = input[i];
    if (countList[letter] === 1) {
      countList[letter] ++;
    }
    else {
    countList[letter] = 1;
    }
  }
  return countList;
}

console.log(countLetters("lighthouse in the house"));


