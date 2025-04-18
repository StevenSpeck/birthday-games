let gameWon = false;
let board = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
let moves = 9;

//prior to setting up the svg of our faces, apply colors to checking for logic
//logic green=three in a row, red=lose 3 in a row, yellow=two in a row, black=lone
//could create similar maps to ones used to determine victory

function buttonPress(buttonId) {
  let spot = document.getElementById(buttonId);
  let turn = document.getElementById("O-to-go");
  let status = document.getElementById("status")
  if (!gameWon) {
    if (!spot.innerText) {
      moves -= 1;
      spot.innerText = (turn.checked ? "O" : "X");
      turn.checked = !turn.checked;
      status.innerText = (turn.checked ? "O" : "X") + " to move"
      board[buttonId] = spot.innerText;
      checkForWin()
    }
    else if (moves > 0) {
      status.innerText = "Try a different position. " + (turn.checked ? "O" : "X") + " to move"
    }
    if (moves === 0) {
      status.innerText = "No moves remaining";
      document.getElementById("restart").style.display = "block";
    }
  }
  else {
    status.innerText = "Game is already won.  Restart?";
    document.getElementById("restart").style.display = "block";
  }
}

function checkForWin() {
  const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (i=0; i<winningCombos.length; i++) {
    if (board[winningCombos[i][0]] !== -1 && board[winningCombos[i][0]] === board[winningCombos[i][1]] && board[winningCombos[i][1]] === board[winningCombos[i][2]]) {
      let turn = document.getElementById("O-to-go");
      document.getElementById("status").innerText = (turn.checked ? "X" : "O") + " has won!";
      gameWon = true;
      document.getElementById("restart").style.display = "block";
    }
  }
}

function restart() {
  board = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
  gameWon = false;
  moves = 9;
  let cells = document.getElementsByClassName("cell");
  for (i=0;i<cells.length;i++) {
    cells[i].innerText = ""
  }
  document.getElementById("restart").style.display = "none";
}