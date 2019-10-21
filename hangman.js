const words = [
  "cabbage",
  "cholera",
  "shotgun",
  "etcetera",
  "hangman"
];
const generateRandomNumber = array => {
  return Math.floor(Math.random() * array.length);
}
// [...words[0]].map(character => console.log(character))
let wrongGuesses = 0;
word = words[generateRandomNumber(words)].split("");
guesses = [];
while(guesses.length < word.length) {
  guesses.push("_")
}
console.log(word)
console.log(guesses)



console.log(generateRandomNumber(words))