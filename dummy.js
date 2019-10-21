const myStickman = document.getElementById("stickman");
const context = myStickman.getContext('2d');
canvas = function () {

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = black;
  context.lineWidth = 2;
};

const head = () => {
  // myStickman = document.getElementById("stickman");
  // context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {

  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

const frame1 = () => {
  draw(0, 150, 150, 150);
};

const frame2 = () => {
  draw(10, 0, 10, 600);
};

const frame3 = () => {
  draw(0, 5, 70, 5);
};

const frame4 = () => {
  draw(60, 5, 60, 15);
};

const torso = () => {
  draw(60, 36, 60, 70);
};

const rightArm = () => {
  draw(60, 46, 100, 50);
};

const leftArm = () => {
  draw(60, 46, 20, 50);
};

const rightLeg = () => {
  draw(60, 70, 100, 100);
};

const leftLeg = () => {
  draw(60, 70, 20, 100);
};

const drawArray = [head, torso, leftArm, rightArm, leftLeg, rightLeg];

frame1();
frame2();
frame3();
frame4();

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

let wrongGuesses = 0;
word = words[generateRandomNumber(words)].split("");
guesses = [];
while (guesses.length < word.length) {
  guesses.push("_")
}

document.onkeydown = (event) => {
  if (word.includes(event.key)) {
    for (let index = 0; index < word.length; index++) {
      if (event.key === word[index]) {
        console.log(word[index]);
        guesses[index] = event.key;
        console.log(guesses);
        render();
      }
    }
  } else {
    drawArray[wrongGuesses]();
    console.log(wrongGuesses)
    wrongGuesses++
  }
}


let inputField = document.getElementById("input");

const render = () => {
  for (let index = 0; index < word.length; index++) {
    inputField.innerHTML = `<span>${guesses}</span>`
  }
}

console.log(word)
console.log(guesses)
console.log(generateRandomNumber(words))

render();

