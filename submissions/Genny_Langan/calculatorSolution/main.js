console.log("--------Script Started----------");
// global variables
var result;  // this is a string
var inputValues = [ ]; //this is an array with a string
var buttons = document.getElementsByClassName('buttons');//store the array of the buttons - each button
var inputBox = document.getElementById('display');

var clearButton = document.querySelector('#clearButton');
var addButton = document.querySelector('#addButton');
var minusButton = document.querySelector('#minusButton');
var divideButton = document.querySelector('#divideButton');
var timesButton = document.querySelector('#timesButton');
var equalButton = document.querySelector('#equalButton');
var decimalButton = document.querySelector('#decimalButton');
var operator; // plus, divide, subtract, multiply
var firstNumber;
var secondNumber;


//show the variables in the console
console.log("Result:"+ result, "Input Values:"+ inputValues, "Opperator:"+ operator, buttons);


//add event listener to all buttons
clearButton.addEventListener('click',clear);
divideButton.addEventListener('click', weAreGoingToDivide);
timesButton.addEventListener('click', weAreGoingToMultiply);
addButton.addEventListener('click', weAreGoingToAdd);
minusButton.addEventListener('click', weAreGoingToSubtract);
equalButton.addEventListener('click', calculator);


//for loop to click on each box

for(i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click',function(){
    console.log(this.innerHTML);
      inputBox.value += this.innerHTML;
  })
}
//this refers to button[i] -- so whatever button you click


// create our basic functions
function clear (){
  result = " ";
  inputValues = " ";
  operator = " ";
  inputBox.value = null; // can't use .value on a div beucase the div itself doesn't
  // have an html property of value but a value or input box does
}


//divison function
function weAreGoingToDivide(){
  operator = "Division"
  firstNumber = inputBox.value;
  inputBox.value = null;
    console.log('firstNumber = ' +firstNumber);
    console.log('operator = ' +operator);
  }

function divide(a,b){
  return a/b;
    console.log(a/b);
}


//multiply function
function weAreGoingToMultiply(){
  operator = "Multiply"
  firstNumber = inputBox.value;
  inputBox.value = null;
    console.log('firstNumber = ' +firstNumber);
    console.log('operator = ' +operator);
}


function multiply(a,b){
  return a * b;
  console.log(a * b);
}


//addition function
function weAreGoingToAdd(){
  operator = "Addition"
  firstNumber = inputBox.value;
  inputBox.value = null;
    console.log('firstNumber = ' +firstNumber);
    console.log('operator = ' +operator);
}

function addition(a,b){
  return (+a + +b);
  console.log(+a + +b);
}


//subtraction function
function weAreGoingToSubtract(){
  operator = "Subtract"
  firstNumber = inputBox.value;
  inputBox.value = null;
    console.log('firstNumber = ' +firstNumber);
    console.log('operator = ' +operator);
}

function subtract(a,b){
  return a-b;
  console.log(a-b);
}



function calculator(){
  secondNumber = inputBox.value;
    console.log('secondNumber = '+secondNumber);

    if (operator === "Division"){
      console.log(operator);
      var result = divide(firstNumber,secondNumber);
        console.log(result);
          inputBox.value = result;
    }
    else if (operator === "Multiply"){
      console.log(operator);
      var result = multiply(firstNumber,secondNumber);
        console.log(result);
          inputBox.value = result;
      }
    else if (operator === "Addition"){
      console.log(operator);
      var result = addition(firstNumber,secondNumber);
        console.log(result);
          inputBox.value = result;
      }
    else if (operator === "Subtract"){
      console.log(operator);
      var result = subtract(firstNumber,secondNumber);
        console.log(result);
          inputBox.value = result;
      }
    }
