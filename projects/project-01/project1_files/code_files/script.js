

//Define questions to be passed into Category object constructor. The index of each variable's array is used in the Category object constructor and should follow the syntax as var newQuestion = ['questionStatement','answerStatement',['falseAnswer1','falseAnswer2','faleseAnswer3']];

//Get it and Set it Category questions
var getItQuestion1 = ['Which jQuery method can get or set a specified attribute and its value?','.attr()',['.val()','.html()','.NSA()']];

var getItQuestion2 = ['Which jQuery method removes a specified attribute and its value?','.removeAttr()',['.bankrupt()','.changeAttr()','.loseMoney()']];

var getItQuestion3 = ['Which jQuery method adds a new value to the existing value of the class attribute?','.addClass()',['.movinOnUp()','.val()','.getMoney()']];

var getItQuestion4 = ['Which jQuery method allows you to retrieve the html content of a jQuery selection?','.html()',['.text()','.val()','.goldenRetriever()']];

//text
var getItQuestion5 = ['Which jQuery method allows you to give the same new text content to every element of a selection?','.text()',['.paint','.content()','.ditto()']];

//append
var getItQuestion6 = ['Which method would you use to insert specified content at the end of the selected elements?','.append()',['.pinIt()','.prepend()','.attach()']];
//replaceWith
var getItQuestion7 = ['Which jQuery method replaces every element in a selection with new content?','.replaceWith()',['.content()','.addContent()','.switchContent()']];
//remove
var getItQuestion8 = ['Which jQuery method adds a new value to the existing value of the class attribute?','.addClass()',['.payDay()','.val()','.upUrGame()']];



//Event Listener Category questions - not completed
var eventQuestion1 = ['Which jQuery method is used to handle events?','.on()',['.listen()','.eventListener()','.theBouncer()']];

var eventQuestion2 = ['What is the first parameter that .on() accepts?','event',['yourNameHere','attribute','point']];

var eventQuestion3 = ['What is the second parameter that .on() accepts?','code',['listener','fleek','element']];

var eventQuestion4 = ['Which event listener responds to a click trigger?','click',['thePopo','mouseon','gameProper']];

var eventQuestion5 = ['Which event will run when the browser is loaded?','ready',['waiting','popups','netflix']];

var eventQuestion6 = ['Which event will listen for (and bind an event on) a key being pressed down?','keypress',['tap','touch','sausage fingers']];

var eventQuestion7 = ['Which event object property returns the DOM element that initiated the event?','target',['data','type','Vin Diesel']];

var eventQuestion8 = ['How many beers has Tony had today?','All of them',['just one','zero','false']];

//Finding Elements Category questions - not completed
var findQuestion1 = ['Which jQuery method allows you to find the nearest ancestor (not just parent) that matches the selector?','.closest()',['.familyTree()','.stepCousin()','.ancestor()']];

var findQuestion2 = ['Which method will select the direct parent of a selection?','.parent()',['.rents()','.above()','.grounded()']];

var findQuestion3 = ['Which method will find all of the siblings of the current selection?','.siblings()',['.brothers()','.sisters()','.favoriteChild()']];

var findQuestion4 = ['Which method will grab the next sibling of the current element?','.next()',['.theWeakestLink()','.headlock()','.sibling()']];

var findQuestion5 = ['Which method lets you filter elements from a second selector?','.filter()',['.twoTimer()','.second()','.brita()']];

var findQuestion6 = ['Which method finds descendants of elements that match the selector?','.find()',['.search()','.familyHistory()','.junior()']];

var findQuestion7 = ['Which method checks whether the current selection matches a condition?','.is()',['.theDoctor()','.boolean()','.rogerChecking()']];

var findQuestion8 = ['Who is the best GA cohort in all the land?','WDI LA 19',['theOtherGuys','18isClose','youAlreadyKnow']];



// Define Global Variables ///////////////////////

var $spinnerButton = $('#spinner');
// var $questionBox = $('.question-frame');
var $questionBoxHtml = $('.question-html')
var $resetButton = $('.reset');
var $categorySelected = $('.categorySelected');
var $answerBox = $('.answer-frame');
var $mainContainer = $('.mainContainer');

var $alertSection = $('.alertSection');
var $alertBox = $('.alertBox')


var $playerBoxes = $('.player');
var $player1 = $('#player1');
var $player2 = $('#player2');

var $scoreBoxes = $('.score');
var player1Score = 0;
var $player1ScoreBox = $('#score1');
var player2Score = 0;
var $player2ScoreBox = $('#score2');
var $scoreMeters = $('.scoreMeters');
var $player1Progress = $('#progress1');
var $player2Progress = $('#progress2');



var categoryArray=[];
var activeCategory;
var activeQuestion;
var activeAnswer;

var $allAnswers = $('.answers');
var $rightAnswer = $('.answers.rightAnswer');
var $wrongAnswers = $('.answers.wrongAnswer')
var activeFalseAnswers;

var playerCounter = 0;
var player1Turns = [];
var player2Turns = [];
var player1Wins = 0;
var player2Wins = 0;
var roundsRequired = 2;

var questionAnswered = false;
var pointsAddForCorrect=10;
var pointsMinusForWrong= 3;
var pointsToWin = 10;
var scoreMeterHeight = 300;

var $lightning = $('.lightning');
var $lightningLeft = $('#picForLeft');
var $lightningRight = $('#picForRight');


var counterTime = 5;
var counterResetTime = 5;



//Define additional categories when more needed

// Set up Category and Question + Answer Constructor object

//This Category Object Constructor allows a new category with a set of questions to be easily created. The questions (with corresponding answers) should be defined above in variables as exhibited by 'getItQuestion1'. At the current time, each category object constructor is able to accomodate for three(3) questions. The constructor would need to be modified to accomodate additional questions per each category. The constructor takes four(4) arguments - a category name (nameIt), and three questions (insert questions from variables defined above).

var Category = function(nameIt,q1,q2,q3,q4,q5,q6,q7,q8){
  this.catName = nameIt;
  this.Questions = [{
      question: q1[0],
      answer: q1[1],
      falseAnswers: q1[2],
    },{question: q2[0],
        answer: q2[1],
        falseAnswers: q2[2],
    },{question: q3[0],
        answer: q3[1],
        falseAnswers: q3[2],
    },{question: q4[0],
      answer: q4[1],
      falseAnswers: q4[2],
    },{question: q5[0],
      answer: q5[1],
      falseAnswers: q5[2],
    },{question: q6[0],
      answer: q6[1],
      falseAnswers: q6[2],
    },{question: q7[0],
      answer: q7[1],
      falseAnswers: q7[2],
    },{question: q8[0],
      answer: q8[1],
      falseAnswers: q8[2],
    }]
  }


//Creates new Category objects with Questions and Answers from Category object constructor found above on lines 74 through 86. MAX OF 3 QUESTIONS CURRENTLY BASED ON CATEGORY OBJECT CONSTRUCTOR ////////

 getItCategory = new Category('Get It and Set It',getItQuestion1,getItQuestion2,getItQuestion3,getItQuestion4,getItQuestion5,getItQuestion6,getItQuestion7,getItQuestion8);

 eventCategory = new Category('Welcome to the Big Event',eventQuestion1,eventQuestion2,eventQuestion3,eventQuestion4,eventQuestion5,eventQuestion6,eventQuestion7,eventQuestion8);

 findCategory = new Category('Element Search Party',findQuestion1,findQuestion2,findQuestion3,findQuestion4,findQuestion5,findQuestion6,findQuestion7,findQuestion8);

categoryArray.push(getItCategory,eventCategory,findCategory);

///////////////////////////////////////////////////////////////////

function setAndShowActiveCategory(){
  //Select active Category
  activeCategory = categoryArray[Math.floor(Math.random()*categoryArray.length)];

  //set Active Category with Category Name
  var spinCategory = activeCategory.catName;

  //Display active Category Name in Category box
  $categorySelected.hide().html(spinCategory).delay(1000).slideDown(1000);

  //Select active question from the category
  activeQuestion = activeCategory.Questions[Math.floor(Math.random()*categoryArray.length)]

  //Display active question in question box
  $questionBoxHtml.hide().html(activeQuestion.question).delay(3000).slideDown(1000);
  $answerBox.hide().delay(5000).fadeIn(1000);

  //Animate answer options in answer box
  answersIntervalID = window.setInterval(animateAnswers,3000);

  //Select answer for active question
  activeAnswer = activeQuestion.answer;
  //Select incorrect answers for active question
  activeFalseAnswers = activeQuestion.falseAnswers;

  //Display correct answer in answer options
  $rightAnswer.hide().html(activeAnswer).delay(6000).fadeIn(1000);

  //Display incorrect answers in answer options
  $wrongAnswers.each(function(index){
    $(this).hide().html(activeFalseAnswers[index])
  }).delay(6000).fadeIn(1000);
}

function activateSpinCategory(){
  // $questionBoxHtml.html('');
  // $allAnswers.hide();

  $spinnerButton.on('click', function(){
    // $resetButton.fadeOut(1000);
    animateSpinner();
    $lightning.addClass('lightningOpacity');

    $rightAnswer.removeClass('blueGlow');
    unhideDivsWithFade();
    setTimeout(setAndShowActiveCategory(),5000);
    clickOnAnswers();
    //Display countdown in alert box
    $alertBox.hide().html('Get Ready!').delay(3000).fadeIn(1000)

    //Display timer in alert box and begin countdown
    setTimeout(countdownTimer,7000);
  })
}

function animateAnswers(){
  $allAnswers.each(function(){
    $(this).animate({
      marginTop:(Math.random()*140),
      // marginBottom:(Math.random()*100),
      marginLeft:(Math.random()*320),
      // marginRight:(Math.random()*100)
    },2000);
  });
}

function animateSpinner(){
  $spinnerButton.animate({
    // height: 225,
    // width: 225,
    fontSize: 7,
    borderWidth: 70,
  },500).animate({
    // height: 175,
    // width: 175,
    fontSize: 20,
    borderWidth: 40,
  },500).fadeOut();
}

function animateLightningLeft(timeToFlash){
  var lightningInterval = window.setInterval(function(){
    $lightningLeft.toggleClass('lightningOpacity')
  },300)
  setTimeout(function(){
    clearInterval(lightningInterval);
    $lightningLeft.addClass('lightningOpacity')
  },timeToFlash)
};

function animateLightningRight(timeToFlash){
  var lightningInterval = window.setInterval(function(){
    $lightningRight.toggleClass('lightningOpacity')
  },300)
  setTimeout(function(){
    clearInterval(lightningInterval);
    $lightningRight.addClass('lightningOpacity')
  },timeToFlash)
};

function clickOnAnswers(){
  $rightAnswer.on('click',function(){
    if(playerCounter%2===0){
      console.log('Player1 answer working');
      player1Score+=pointsAddForCorrect;
      animateLightningLeft(3000);
      changePointsInMeter();
      $player1ScoreBox.fadeIn(1000).text(player1Score);
      $rightAnswer.addClass('blueGlow');
      $wrongAnswers.hide().fadeOut(1000);
      questionAnswered = true;

    } else {
        console.log('Player2 answer working');
        player2Score+=pointsAddForCorrect;
        animateLightningRight(3000);
        changePointsInMeter();
        $player2ScoreBox.fadeIn(1000).text(player2Score);
        $rightAnswer.addClass('blueGlow');
        $wrongAnswers.hide().fadeOut(1000);
        questionAnswered = true;
    }
  })

  $wrongAnswers.on('click',function(){
    if(playerCounter%2===0){
      console.log('Player1 wrong answer working');
      $(this).hide();
      player1Score-=pointsMinusForWrong;
      changePointsInMeter();
      $player1ScoreBox.fadeIn(1000).html(player1Score);
    } else{
      console.log('Player2 wrong answer working');
      $(this).hide();
      player2Score-=pointsMinusForWrong;
      changePointsInMeter();
      $player2ScoreBox.fadeIn(1000).html(player2Score);
      }
    })
  }

function resetForNewQuestion(){

  clearInterval(answersIntervalID);

  $rightAnswer.addClass('blueGlow');

  $rightAnswer.off('click');
  $wrongAnswers.off('click');

  $wrongAnswers.hide().fadeOut(2000);
  $rightAnswer.delay(5000).fadeOut(2000);


  $questionBoxHtml.html('');

  if(playerCounter%2===0){
    player1Turns.push('1')
  } else {
    player2Turns.push('2')
  }

  checkWinner();

  questionAnswered = false;
  counterTime = counterResetTime;
  setTimeout(hideDivsWithFade(),7000);

  $('.player').removeClass('activePlayer');

  setTimeout(function(){if(playerCounter%2===0){
      $('#player1').addClass('activePlayer')
    } else{
      $('#player2').addClass('activePlayer')
    }
  },7000)

  $spinnerButton.delay(7000).fadeIn(2000);
}


function changePointsInMeter(){

  if(player1Score>=pointsToWin){
    $('#progress1').animate({
      height: pointsToWin*(scoreMeterHeight/pointsToWin),
    }, 3000,'swing');
  } else {
    $('#progress1').animate({
      height: player1Score*(scoreMeterHeight/pointsToWin),
    }, 3000,'swing');
  }

  if(player2Score>=pointsToWin){
    $('#progress2').animate({
      height: pointsToWin*(scoreMeterHeight/pointsToWin),
    }, 3000,'swing');
  } else {
    $('#progress2').animate({
      height: player2Score*(scoreMeterHeight/pointsToWin),
    }, 3000,'swing');
  }
}

function clearGame(){

  player1Score=0;
  player1Turns=[];
  player2Score=0;
  player2Turns=[];
  playerCounter=0;
  changePointsInMeter()
  $('#score1').hide().text(player1Score).delay(4000).fadeIn(1000).css('display', 'inline-block');
  $('#score2').hide().text(player2Score).delay(4000).fadeIn(1000).css('display', 'inline-block')
  $('#player1Rounds').html(player1Wins);
  $('#player2Rounds').html(player2Wins);

};

function checkWinner(){
    if(player1Score>=pointsToWin && player1Score>player2Score+pointsAddForCorrect){
      $alertBox.hide().html('Player 1 wins! - Player 2 cannot catch up').delay(1000).fadeIn(1000);

      console.log('check winner is working')
      player1Wins++;
      animateLightningLeft(5000);
      setTimeout(clearGame(),7000);

    }
      else if (player1Score>=pointsToWin && player1Turns.length>player2Turns.length && player2Score<pointsToWin){
        $alertBox.hide().html('Player 2 gets another qrack!').delay(1000).fadeIn(1000);
        playerCounter++;
    }
      else if (player2Score>=pointsToWin){
          if(player2Score>player1Score){
            $alertBox.hide().html('Player 2 wins - High Score!').delay(1000).fadeIn(1000);
            player2Wins++;
            animateLightningRight(5000);
            setTimeout(clearGame(),7000)

          }
        else if(player2Score===player1Score){
          $alertBox.hide().html('Keep qracking - tie game!').delay(1000).fadeIn(1000);
          playerCounter++;
        }
        else if(player2Score<player1Score && player1Turns.length===player2Turns.length ){
          $alertBox.hide().html('Player 1 wins - High Score!').delay(1000).fadeIn(1000);
          player1Wins++;
          animateLightningLeft(5000);
          setTimeout(clearGame(),7000)
        }
        else {
          $alertBox.hide().html('Keep qracking, the game is still up for grabs!').delay(1000).fadeIn(1000);
          playerCounter++;
        }
      }
      else if(player1Score>=pointsToWin && player1Turns.length===player2Turns.length){
        $alertBox.hide().html('Player 1 wins! - High Score!').delay(1000).fadeIn(1000);
        player1Wins++;
        animateLightningLeft(5000);
        setTimeout(clearGame(),7000);

      }
      else if(counterTime>0){
        $alertBox.hide().html("It's still wide open - next player").delay(1000).fadeIn(1000);
        playerCounter++;
      }
      else{
        $alertBox.hide().html("Time is up! Next player get qrackin'").delay(1000).fadeIn(1000);
        playerCounter++;
      }

        setTimeout(checkRoundsWon(),5000);
    }

function checkRoundsWon(){
  if(player1Wins>=roundsRequired){
    hideDivsWithFade();
    $spinnerButton.hide().fadeOut(1000);
    $alertBox.html('Player 1 Wins the Game!');
    animateLightningLeft(7000);
    $categorySelected.html("Player1 Won! Hit Qrackin' to Start Over.");
    $spinnerButton.off('click');
    $spinnerButton.on('click', function(){
      location.reload(true);
    });
  } else if (player2Wins>=roundsRequired){
    hideDivsWithFade();
    $spinnerButton.hide().fadeOut(1000);
    animateLightningRight(7000);
    $alertBox.html('Player 2 Wins the Game!');
    $categorySelected.html("Player 2 Won! Hit Qrackin' to Start Over.")
    $spinnerButton.off('click');
    $spinnerButton.on('click', function(){
      location.reload(true);
    });
  }
}

function countdownTimer(){

    countdownIntervalID = window.setInterval(function(){
      if(counterTime>=0 && questionAnswered===false){
      $alertBox.html("🕒"+counterTime);
      counterTime--;
      } else {
        clearInterval(countdownIntervalID);
        // $alertBox.hide().html('Time is up!').fadeIn(1000)
        resetForNewQuestion();
      }
    },1000)
  }

function hideDivsNoDelay(){
  $('.questionsSection').hide();
  $('.answersSection').hide();
  $('.alertSection').hide();
}

function hideDivsWithFade(){
  $('.questionsSection').delay(1000).fadeOut(8200);
  $('.answersSection').delay(1000).fadeOut(8200);
  $('.alertSection').delay(1000).slideUp(8200);
}

function unhideDivsWithFade(){
  $('.questionsSection').delay(2000).fadeIn(2000);
  $('.answersSection').delay(2000).fadeIn(2000);
  $('.alertSection').delay(2000).slideDown(2000);
}


window.onload = function (){
  console.log('jQuery is running')
  // createCategories();
  // modal.open({content:"<div class='dialogBox'>Test for Dialog Box</div>"});
  activateSpinCategory();
  $('#screen').children().hide();
  $myModal.fadeIn(1000);

}

var $myModal = $('#my-modal');

var closeButton = $('#close-button');

function spinBox(secondsToSpin){
  // $myModal.text().fadeOut(3000);

  var degreesToSpin = 5
  var spinInterval = window.setInterval(function(){

    $myModal.animate({
      height: '-=5',
      width:  '-=5'
    },25)
    $myModal.css('transform', "rotate("+degreesToSpin+"deg)");

    degreesToSpin +=5;
    console.log(degreesToSpin);

  },25);

  setTimeout(function(){
    $myModal.fadeOut(2000);
    clearInterval(spinInterval);
  },secondsToSpin);
}

closeButton.on('click',function(){
  // $(this).text().fadeOut(2000);
  $(this).hide();
  $myModal.children().not('.dialogHeader').fadeOut(2000);
  $myModal.children().fadeOut(4000);
  // $myModal.text().hide();
  spinBox(5000);
  // setTimeout( function(){
  //   $myModal.fadeOut(2000);
  // },5000);

  setTimeout(function(){
    $('#screen').children().fadeIn(5000);
    hideDivsNoDelay();
  },5000);
})
