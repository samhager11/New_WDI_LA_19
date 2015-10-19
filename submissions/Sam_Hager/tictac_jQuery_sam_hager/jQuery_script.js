//Javascript source page for tictactoe - TRYINGAGAIN.html


window.onload = playTac;
//makes play button available to be clicked in order to play
var counter = 0;
//counter will track whose move it is based on divisbility by 2 (x will go on even turns, o will go on odd turns)
var isWinner=undefined;
//variable to hold winner before board is reset. If this variable has a value, will prevent newMove function from running
var winCounterX = [];
//array to hold number of wins for X
var winCounterO = [];
//array to hold number of wins for o
var $playButton = $("#playButton");
//variable to hold play button and set event listener on click
var $clearBoard = $("#clearBoard")
//variable to hold play button and set event listener on click

var $gameBoard = $(".my-box");
//creates array of $gameBoard boxes based on selecting all of the "my-box" classes

var $winBoxX = $('#winBoxX');
//variable to select the win counter for X

var $winBoxO = $('#winBoxO');
//variable to select the win counter for O



var x = 'x-move';
var o = 'o-move';
//variables created to store the x and o move classes used in the getWinner win logic



//Function sets click event listener on the playButton and runs newMove function when clicked
//Also makes wipeBoard function available and alerts user to press playButton to play
function playTac(){
  $playButton.on("click", newMove);
  alert('Press Play Tac button to begin - X goes first');
  wipeBoard();
}

function newMove(){
    $gameBoard.each(function(){
      $(this).on('click', fillSpace);
    }
    )
}




  function fillSpace(){
    console.log('newMove working');

    if(counter%2===0 && isWinner===undefined){
      if(this.className==='my-box'){
      this.className='x-move';
      getWinner();

      counter++;
      } else {
        alert("Territory occupied - conquer another")
      }
    } else if(counter%2!==0 && isWinner===undefined) {
      if(this.className==='my-box'){
      this.className='o-move';
      getWinner();
      counter++;
        } else {
          alert("Territory occupied - conquer another")
        }
      }
    }




  function wipeBoard(){
    $clearBoard.on("click", function(){
      $gameBoard.each(function(){
        $(this).removeClass('x-move o-move')
        $(this).addClass('my-box')
      })
      isWinner = undefined;
      if (counter%2===0){
        alert('X goes first');
      } else if(counter%2!==0){
        alert('O goes first');
      }
      })
    }



    function getWinner(){
      if($gameBoard[0].className===x && $gameBoard[1].className===x && $gameBoard[2].className===x ||
         $gameBoard[3].className===x && $gameBoard[4].className===x && $gameBoard[5].className===x ||
         $gameBoard[6].className===x && $gameBoard[7].className===x && $gameBoard[8].className===x ||
         $gameBoard[0].className===x && $gameBoard[3].className===x && $gameBoard[6].className===x ||
         $gameBoard[1].className===x && $gameBoard[4].className===x && $gameBoard[7].className===x ||
         $gameBoard[2].className===x && $gameBoard[5].className===x && $gameBoard[8].className===x ||
         $gameBoard[0].className===x && $gameBoard[4].className===x && $gameBoard[8].className===x ||
         $gameBoard[2].className===x && $gameBoard[4].className===x && $gameBoard[6].className===x)
         {
        alert("X is the Winner! - Press Reset to play again");
        counter = 0;
        isWinner = 'X';
        winCounterX.push('X');
        var numWinsX = winCounterX.length;
        $winBoxX.text(numWinsX);
        console.log('Get winner is running');

      }
       else if($gameBoard[0].className===o && $gameBoard[1].className===o && $gameBoard[2].className===o ||
         $gameBoard[3].className===o && $gameBoard[4].className===o && $gameBoard[5].className===o ||
         $gameBoard[6].className===o && $gameBoard[7].className===o && $gameBoard[8].className===o ||
         $gameBoard[0].className===o && $gameBoard[3].className===o && $gameBoard[6].className===o ||
         $gameBoard[1].className===o && $gameBoard[4].className===o && $gameBoard[7].className===o ||
         $gameBoard[2].className===o && $gameBoard[5].className===o && $gameBoard[8].className===o ||
         $gameBoard[0].className===o && $gameBoard[4].className===o && $gameBoard[8].className===o ||
         $gameBoard[2].className===o && $gameBoard[4].className===o && $gameBoard[6].className===o)
       {
        alert("O is the Winner! - Press Reset to play again");
        counter = 1;
        isWinner = 'O';
        winCounterO.push('O');
        var numWinsO = winCounterO.length;
        $winBoxO.text(numWinsO);
        console.log('Get winner is running');
      }
       else if($gameBoard[0].className!=='my-box' && $gameBoard[1].className!=='my-box' && $gameBoard[2].className!=='my-box'
              && $gameBoard[3].className!=='my-box' && $gameBoard[4].className!=='my-box' && $gameBoard[5].className!=='my-box'
              && $gameBoard[6].className!=='my-box' && $gameBoard[7].className!=='my-box' && $gameBoard[8].className!=='my-box'){
                alert("Nobody wins - Press Reset to play again");
              }
      }
