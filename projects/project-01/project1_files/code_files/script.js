$(document).ready(function (){
  console.log('jQuery is running')
  createCategories();
  setCategories();

})

//Define questions to be passed into Category object constructor. The index of each variable's array is used in the Category object constructor and should follow the arrangement as var newQuestion = ['questionStatement','answerStatement',['falseAnswer1','falseAnswer2','faleseAnswer3']];

//Get it and Set it Category questions
var getItQuestion1 = ['Which jQuery method can get or set a specified attribute and its value?','.attr()',['.val()','.addAttr()','.element()']];

var getItQuestion2 = ['Which jQuery method removes a specified attribute and its value?','.removeAttr()',['.remove()','.changeAttr()','.toggleAttr()']];

var getItQuestion3 = ['Which jQuery method adds a new value to the existing value of the class attribute?','.addClass()',['.class()','.val()','.classVal()']];


// Define Global Variables ///////////////////////

var $spinner = $('#spinner');
var $questionBox = $('.question-frame');
var $answerBox = $('.answer-frame');
var $scoreBoard = $('.scoreboard');
var $playerBoxes = $('.player');
var $player1 = $('#player1');
var $player2 = $('#player2');
var $scoreBoxes = $('.score');
var $player1Score = $('#score1');
var $player2Score = $('#score2');


// Set up Category and Question + Answer Constructor object

//This Category Object Constructor allows a new category with a set of questions to be easily created. The questions (with corresponding answers) should be defined above in variables as exhibited by 'getItQuestion1'. At the current time, each category object constructor is able to accomodate for three(3) questions. The constructor would need to be modified to accomodate additional questions per each category. The constructor takes four(4) arguments - a category name (nameIt), and three questions (insert questions from variables defined above).

var Category = function(nameIt,q1,q2,q3){
  this.catName = nameIt;
  this.Question1 = {
      question: q1[0],
      answer: q1[1],
      falseAnswers: q1[2],
    }
  this.Question2 = {
      question: q2[0],
      answer: q2[1],
      falseAnswers: q2[2],
    }
  this.Question3 = {
      question: q3[0],
      answer: q3[1],
      falseAnswers: q3[2],
    }
  }


//Creates new Category objects with Questions and Answers//

function createCategories(){
 var GetIt = new Category('Get It and Set It',getItQuestion1,getItQuestion2,getItQuestion3);
 console.log(GetIt);
 // var Events = new Category('Events',)
}

function setCategories(){
  console.log("setCategories running")
}
