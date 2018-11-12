// Create password and hide it
const passwords = [
  "software developer",
  "developer",
  "coding",
  "loop",
  "documentation",
  "type script",
  "visual studio code",
  "box shadow",
  "problems",
  "selection",
  "hangman man",
  "React",
  "inspector",
  "linux mint",
  "comments",
  "front end",
  "back end",
  "full stack",
  "programming languages",
  "javascript"
];
let index = Math.floor(Math.random() * passwords.length);
let password = passwords[index].toUpperCase();
const currentPassword = () => {
  document.querySelector(".password span").textContent = hidePassword;
};
window.onload = currentPassword;
let hidePassword = "";
const hide = () => {
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === " ") {
      hidePassword += " ";
    } else {
      hidePassword += "-";
    }
  }
};
hide();
// Create alphabet
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "x",
  "y",
  "v",
  "w",
  "z"
];
const alphabet = document.querySelector(".letters");
const createAlphabet = () => {
  for (let i = 0; i < letters.length; i++) {
    const span = document.createElement("span");
    alphabet.appendChild(span).textContent = letters[i].toUpperCase();
    span.dataset.key = letters[i];
  }
};
createAlphabet();
const basicDisplay = () => {
  numberOfLifes = 5;
  wrongLetters.length = 0;
  showWrongLetter();
  lifes.innerText = numberOfLifes;
  index = Math.floor(Math.random() * passwords.length);
  password = passwords[index].toUpperCase();
  hidePassword = "";
  hide();
  currentPassword();
};
// Logic of a game,
const span = [...document.querySelectorAll("span[data-key]")];
let guessLetter = "";
const wins = document.querySelector(".wins span");
let numberOfWins = 0;
wins.innerText = numberOfWins;
const lifes = document.querySelector(".lifes span");
const wrongLetters = [];
const spanWrongLetter = document.querySelector(".wrongLetters span");
const showWrongLetter = () => {
  spanWrongLetter.innerText = wrongLetters;
};
let numberOfLifes = 5;
lifes.innerText = numberOfLifes;
let winFlag = false;
const clearHangman = () => {
  document.querySelectorAll(".hangman div").forEach(function(div) {
    div.style.display = "none";
  });
};
// this function takes a letter(click on) and if we guess word "-" will be replaced, if not hangman will be print on page and we loose life
span.forEach(function(dataElement) {
  dataElement.addEventListener("click", function() {
    guessLetter = dataElement.dataset.key;
    for (let i = 0; i < password.length; i++) {
      if (guessLetter.toUpperCase() === password.charAt(i)) {
        hidePassword = [...hidePassword];
        hidePassword[i] = guessLetter.toUpperCase();
        hidePassword = hidePassword.join("");
        currentPassword();
        if (password === hidePassword) {
          numberOfWins++;
          wins.innerText = numberOfWins;
          winFlag = !winFlag;
        }
      }
    }
    //push wrong letter to array and display it on screen
    if (!password.includes(guessLetter.toUpperCase())) {
      wrongLetters.push(guessLetter.toUpperCase());
      showWrongLetter();
      numberOfLifes--;
      lifes.innerText = numberOfLifes;
      if (wrongLetters.length === 1) {
        document.querySelector(".fourLifes").style.display = "block";
      } else if (wrongLetters.length === 2) {
        document.querySelector(".threeLifes").style.display = "block";
      } else if (wrongLetters.length === 3) {
        document.querySelector(".twoLifes").style.display = "block";
      } else if (wrongLetters.length === 4) {
        document.querySelector(".oneLife").style.display = "block";
      } else if (wrongLetters.length === 5) {
        document.querySelector(".gameOver").style.display = "block";
        document.querySelectorAll(".hangman div").forEach(function(div) {
          div.style.display = "block";
        });
      }
      if (numberOfLifes === 0) {
        alert(`:((((
        Sorry 
        You loose 
        Want to try again?? :)`);
        basicDisplay();
        clearHangman();
      }
    } else if (winFlag) {
      basicDisplay();
      winFlag = !winFlag;
      clearHangman();
    }
  });
});
//reset button for reset all display of game
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
  numberOfWins = 0;
  wins.innerText = numberOfWins;
  basicDisplay();
  winFlag = false;
  clearHangman();
});
