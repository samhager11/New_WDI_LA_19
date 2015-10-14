window.onload = function (){
  console.log('jQuery is running')
  // createCategories();
  activateSpinCategory();
  setUpPointRewarding();

}

//Define questions to be passed into Category object constructor. The index of each variable's array is used in the Category object constructor and should follow the syntax as var newQuestion = ['questionStatement','answerStatement',['falseAnswer1','falseAnswer2','faleseAnswer3']];

//Get it and Set it Category questions
var getItQuestion1 = ['Which jQuery method can get or set a specified attribute and its value?','.attr()',['.val()','.addAttr()','.element()']];

var getItQuestion2 = ['Which jQuery method removes a specified attribute and its value?','.removeAttr()',['.remove()','.changeAttr()','.toggleAttr()']];

var getItQuestion3 = ['Which jQuery method adds a new value to the existing value of the class attribute?','.addClass()',['.class()','.val()','.classVal()']];

//Event Listener Category questions - not completed
var eventQuestion1 = ['Test question 1?','answer Q1',['falseAnswer1 Q1','falseAnswer2 Q1','falseAnswer3 Q1']];

var eventQuestion2 = ['Test question 2?','answer Q2',['falseAnswer1 Q2','falseAnswer2 Q2','falseAnswer3 Q2']];

var eventQuestion3 = ['Test question 3?','answer Q3',['falseAnswer1 Q3','falseAnswer2 Q3','falseAnswer3 Q3']];

//Finding Elements Category questions - not completed
var findQuestion1 = ['Test question 1?','answer Q1',['falseAnswer1 Q1','falseAnswer2 Q1','falseAnswer3 Q1']];

var findQuestion2 = ['Test question 2?','answer Q2',['falseAnswer1 Q2','falseAnswer2 Q2','falseAnswer3 Q2']];

var findQuestion3 = ['Test question 3?','answer Q3',['falseAnswer1 Q3','falseAnswer2 Q3','falseAnswer3 Q3']];



// Define Global Variables ///////////////////////

var $spinner = $('#spinner');
var $questionBox = $('.question-frame');
var $questionBoxHtml = $('.question-html')
var $resetButton = $('.reset');
// var $answerBox = $('.answer-frame');

var $alertBox = $('.alertSection');
var $playerBoxes = $('.player');
var $player1 = $('#player1');
var $player2 = $('#player2');
var $scoreBoxes = $('.score');

var player1Score = 0;
var $player1ScoreBox = $('#score1');
var player2Score = 0;
var $player2ScoreBox = $('#score2');

var activePlayer;
var playerCounter = 0;

var categoryArray=[];
var activeCategory;
var activeQuestion;
var activeAnswer;

var $allAnswers = $('.answer');
var $rightAnswer = $('.answer.rightAnswer');
var $wrongAnswers = $('.answer.wrongAnswer')
var activeFalseAnswers;

// var category1;
// var category2;
// var category3;


//Define additional categories when more needed

// Set up Category and Question + Answer Constructor object

//This Category Object Constructor allows a new category with a set of questions to be easily created. The questions (with corresponding answers) should be defined above in variables as exhibited by 'getItQuestion1'. At the current time, each category object constructor is able to accomodate for three(3) questions. The constructor would need to be modified to accomodate additional questions per each category. The constructor takes four(4) arguments - a category name (nameIt), and three questions (insert questions from variables defined above).

var Category = function(nameIt,q1,q2,q3){
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
    }]
  }


//Creates new Category objects with Questions and Answers from Category object constructor found above on lines 74 through 86 ////////

 getItCategory = new Category('Get It and Set It',getItQuestion1,getItQuestion2,getItQuestion3);

 eventCategory = new Category('Welcome to the Big Event',eventQuestion1,eventQuestion2,eventQuestion3);

 searchCategory = new Category('Element Search Party',findQuestion1,findQuestion2,findQuestion3);

categoryArray.push(getItCategory,eventCategory,searchCategory);

///////////////////////////////////////////////////////////////////

function activateSpinCategory(){
  $questionBoxHtml.html('');
  $allAnswers.hide();

  $spinner.on('click', function(){
    $resetButton.fadeOut();
    $spinner.fadeOut();

    activeCategory = categoryArray[Math.floor(Math.random()*categoryArray.length)]
    var spinCategory = activeCategory.catName
    $('.option' ).html(spinCategory);


    activeQuestion = activeCategory.Questions[Math.floor(Math.random()*categoryArray.length)]


    $questionBoxHtml.html(activeQuestion.question).delay(0).fadeIn(0);

    intervalID = window.setInterval(animateAnswers,3000);

    activeAnswer = activeQuestion.answer;
    activeFalseAnswers = activeQuestion.falseAnswers;

    $rightAnswer.html(activeAnswer).delay(1000).fadeIn(1000);

    $wrongAnswers.each(function(index){
      $(this).html(activeFalseAnswers[index])
    }).delay(1000).fadeIn(1000);

    // $questionBox.fadeIn();
    // $allAnswers.fadeIn();

  })
}

function animateAnswers(){
  $allAnswers.each(function(){
    $(this).animate({
      marginTop:(Math.random()*165),
      // marginBottom:(Math.random()*100),
      marginLeft:(Math.random()*370),
      // marginRight:(Math.random()*100)
    },2000);
  });
}

function setUpPointRewarding(){
  $rightAnswer.on('click',function(){
    if(playerCounter%2===0){
      console.log('Player1 answer working');
      player1Score+=10;
      $player1ScoreBox.text(player1Score);
      fadeOnRightAnswer();
      playerCounter++;

    } else {
        console.log('Player2 answer working');
        player2Score+=10;
        $player2ScoreBox.text(player2Score);
        fadeOnRightAnswer();
        playerCounter++;
    }
  })

  $wrongAnswers.on('click',function(){
    if(playerCounter%2===0){
      console.log('Player1 wrong answer working');
        $(this).fadeOut();
      player1Score-=5;
      $player1ScoreBox.text(player1Score);
    } else{
      console.log('Player2 wrong answer working');
      $(this).fadeOut();
      player2Score-=5;
      $player2ScoreBox.text(player2Score);
    }
  })
}


function fadeOnRightAnswer(){

  clearInterval(intervalID);

  $wrongAnswers.html('');
  $rightAnswer.html('');
  $questionBoxHtml.html('');
  $allAnswers.fadeOut();
  // $questionBoxHtml.fadeOut(2000);
  // $questionBoxHtml.fadeOut();

  $resetButton.fadeIn();
}

function newQuestionReady(){
  $spinner.fadeIn();
}

$resetButton.on('click',newQuestionReady);

// function createNewCategory(categoryName,questionString,answerString,wrongAnswerArray){
//   categoryName
//   categoryArray.push( = new Category()
// }
