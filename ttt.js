// game starts with Player X

// current turn
const currentTurn = document.querySelector(".current-turn");

// when a square is clicked, the innerText should becomse an 'X' or an 'O'
// add event delegation to squares
document.querySelector(".squares").addEventListener("click", e => {
  squareClick(e.target);
});

// when player clicks an empty square it changes to their token
const squareClick = val => {
  if (val.innerText === "-") {
    val.innerText = currentTurn.innerText === "Player O" ? "O" : "X";
    changePlayer(currentTurn);
  }
};

const changePlayer = val => {
  val.innerText === "Player X"
    ? (currentTurn.innerText = "Player O")
    : (currentTurn.innerText = "Player X");
};

// reset game
document.querySelector(".reset-btn").addEventListener("click", e => {
  clearBoard();
});

const clearBoard = () => {
  const board = document.querySelectorAll(".square");
  board.forEach(square => {
    square.innerHTML = "-";
  });
};

