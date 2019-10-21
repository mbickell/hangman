

const words = [
  "cabbage",
];

word = words[0].split("");
let guesses = [];
while (guesses.length < word.length) {
  guesses.push("_")
}

document.onkeydown = (event) => {
  for (let index = 0; index < word.length; index++) {
    if (event.key === word[index]) {
      console.log(word[index]);
      guesses[index] = event.key;
      console.log(guesses);
      render();
    } else if (event.key !== word[index]) {
      drawArray[wrongGuesses]();
      wrongGuesses++
    }

  }

}

let inputField = document.getElementById("input");

const render = () => {
  for (let index = 0; index < word.length; index++) {
    inputField.innerHTML = `<span>${guesses}</span>`
  }
}

render();

