// when a square is clicked, the innerText should becomse an 'X' or an 'O'
document.querySelector(".squares").addEventListener("click", e => {
  buttonClick(e.target);
});

// change innerText to 'X', 'O', or '-'
const buttonClick = val => {
  if (val.innerText === "-") {
    val.innerText = "X";
  } else if (val.innerText === "X") {
    val.innerText = "O";
  } else {
    val.innerText = "-";
  }
};
