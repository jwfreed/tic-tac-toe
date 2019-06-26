// when a square is clicked, the innerText should becomse an 'X' or an 'O'
document.querySelector(".squares").addEventListener("click", e => {
  buttonClick(e.target);
});

// change innerText to 'X', 'O', or '-'
const buttonClick = val => {
  if (currentTurn.innerText === "Player O") {
    val.innerText = "O";
  } else if (currentTurn.innerText === "Player X") {
    val.innerText = "X";
  } else {
    val.innerText = "-";
  }
};

// game starts with Player X
// when player clicks an empty square it changes to their token
// need to track current player

// current turn
const currentTurn = document.querySelector(".current-turn");

const turnBtn = document
  .querySelector(".turn-btn")
  .addEventListener("click", e => {
    changePlayer(currentTurn);
  });

const changePlayer = val => {
  if (val.innerText === "Player X") {
    currentTurn.innerText = "Player O";
  } else {
    currentTurn.innerText = "Player X";
  }
};
