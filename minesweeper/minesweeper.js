document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { cells: [
{row: 0, col: 0, isMine: false, hidden: true},
{row: 0, col: 1, isMine: false, hidden: true},
{row: 0, col: 2, isMine: false, hidden: true},
{row: 1, col: 0, isMine: true, hidden: true},
{row: 1, col: 1, isMine: false, hidden: true},
{row: 1, col: 2, isMine: true, hidden: true},
{row: 2, col: 0, isMine: true, hidden: true},
{row: 2, col: 1, isMine: true, hidden: true},
{row: 2, col: 2, isMine: false, hidden: true},
]
};

function createBoard(num) {
for(var i = 0; i < num; i++) {
for(var a = 0; a < num; a++) {
board.cells.push({
row: i,
col: a,
isMine: Math.random()>0.80,
hidden: true
})
}
}
}

function startGame () {
  for (var i = 0; i < board.cells.length; i++){
    board.cells[i]["surroundingMines"] = countSurroundingMines(board.cells[i]);
  }
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);


  lib.initBoard()
  var reset = document.getElementById('reset');
   reset.addEventListener('click', function(evt) { location.reload() })
}


function checkForWin () {
  for (var i = 0; i < board.cells.length; i++){
      if (board.cells[i].isMine === true && board.cells[i].isMarked !== true){
        return;
      }
      if (board.cells[i].isMine === false && board.cells[i].hidden === true){
        return;
      }
    }

//On click sound//
function play(){
      var audio = document.getElementById("audio");
      audio.play();
                }

lib.displayMessage('You win!')

      var audioWin = document.getElementById("win");
      audioWin.play();
}


//lib.getSurroundingCells
function countSurroundingMines (cell) {
  count = 0;
var surroundingCells = getSurroundingCells(cell.row, cell.col);
for(var i = 0; i < surroundingCells.length; i++){
  if (surroundingCells[i].isMine === true){
    count++;
  }
}
return count;
}
