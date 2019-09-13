// game starts with Player X

const board = document.querySelectorAll('.square');

const winCombinations = [
  [board.item(0), board.item(1), board.item(2)],
  [board.item(3), board.item(4), board.item(5)],
  [board.item(6), board.item(7), board.item(8)],
  [board.item(0), board.item(4), board.item(8)],
  [board.item(2), board.item(4), board.item(6)],
  [board.item(0), board.item(3), board.item(6)],
  [board.item(1), board.item(4), board.item(7)],
  [board.item(2), board.item(5), board.item(8)]
];

// current turn
const currentTurn = document.querySelector('.current-turn');

// add event delegation to squares
document.querySelector('.squares').addEventListener('click', e => {
  squareClick(e.target);
});

// when player clicks an empty square it changes to their token
const squareClick = val => {
  if (val.innerText === '-') {
    val.innerText = currentTurn.innerText === 'Player O' ? 'O' : 'X';
    changePlayer(currentTurn);
  }
};

// auto turn alternator
const changePlayer = val => {
  const winner = isThereAwinner();
  if (winner) {
    console.log('here');
  }
  val.innerText === 'Player X'
    ? (currentTurn.innerText = 'Player O')
    : (currentTurn.innerText = 'Player X');
};

// reset game
document.querySelector('.reset-btn').addEventListener('click', e => {
  clearBoard();
});

const clearBoard = () => {
  board.forEach(square => {
    square.innerHTML = '-';
  });
};

// identify the squares so that 3 in a row can be identified

const isThereAwinner = () => {
  winCombinations.forEach(combo => {
    if (
      combo[0].innerText == combo[1].innerText &&
      combo[1].innerText != '-' &&
      combo[1].innerText == combo[2].innerText
    ) {
      youWin();
    }
  });
  return false;
};

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-modal');
const modalMsg = document.querySelector('.modal-msg');

const youWin = () => {
  console.log('yahtzee');
  modalMsg.innerText = `${currentTurn.innerText} Wins!`;
  modal.style.display = 'flex';
};

modalClose.onclick = () => {
  modal.style.display = 'none';
  playAgain();
};

const playAgain = () => {
  clearBoard();
};
