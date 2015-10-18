
window.onload = loadFunctions;
var typingArray = [];
var calculationArray=[];
var screenNumbers;
var resultsArray = [];
// var numInputArray = [];
// var output;
var numberListener = document.querySelectorAll('.numbers');
var operatorListener = document.querySelectorAll('.operators');
var clearListener = document.querySelector('.clear');
var screenInput = document.querySelector('#display');
var equalsListener = document.querySelector('#equals');
var plusListener = document.querySelector('#plus');
var minusListener = document.querySelector('#minus');
var divideListener = document.querySelector('#divide');
var multiplyListener = document.querySelector('#multiply');
var inputScreen = document.querySelectorAll('.screen');

function loadFunctions(){
  addNumberListener();
  addEqualsListener();
  addPlusListener();
  addMinusListener();
  addDivideListener();
  addMultiplyListener();
  addClearListener();
}

function addNumberListener(){
  for(i=0; i<numberListener.length; i++){
  numberListener[i].addEventListener('click', screenDisplay);
}
}

function addPlusListener(){
  plusListener.addEventListener('click', clickPlusButton);
  plusListener.addEventListener('click', function(){
    console.log("plus listener is working")
  })
}

function addMinusListener(){
  minusListener.addEventListener('click', clickMinusButton);
  minusListener.addEventListener('click', function(){
    console.log("minus listener is working")
  })
}
function addDivideListener(){
  divideListener.addEventListener('click', clickDivideButton);
  divideListener.addEventListener('click', function(){
    console.log("divide listener is working")
  })
}
function addMultiplyListener(){
  multiplyListener.addEventListener('click', clickMultiplyButton);
  multiplyListener.addEventListener('click', function(){
    console.log("multiply listener is working")
  })
}

function addEqualsListener(){
  equalsListener.addEventListener('click', evaluateArray);
  equalsListener.addEventListener('click', function(){
    console.log("equals listener is working")
  })
}


function addClearListener(){
  clearListener.addEventListener('click', clearCalculator);
  clearListener.addEventListener('click', function(){
    console.log("equals listener is working")
  })
}

  function screenDisplay(){
    typingArray.push(this.innerText);
    screenNumbers = typingArray.join('');
    screenInput.value=screenNumbers;

    console.log("it's listening");
  }

  // function pressOperator(){

  // }



  function clickPlusButton(){
    console.log('plus button working');
    calculationArray.push(screenNumbers);
    calculationArray.push("+")
    typingArray = [];
    screenNumbers = ''
    screenInput.value=''
  }
  function clickMinusButton(){
    console.log('minus button working');
    calculationArray.push(screenNumbers);
    calculationArray.push("-")
    typingArray = [];
    screenNumbers = ''
    screenInput.value=''
  }
  function clickDivideButton(){
    console.log('divide button working');
    calculationArray.push(screenNumbers);
    calculationArray.push("/")
    typingArray = [];
    screenNumbers = ''
    screenInput.value=''
  }
  function clickMultiplyButton(){
    console.log('mulitply button working');
    calculationArray.push(screenNumbers);
    calculationArray.push("*")
    typingArray = [];
    screenNumbers = ''
    screenInput.value=''
  }


  function evaluateArray(){
    console.log('equals button working');
    calculationArray.push(screenNumbers);
    typingArray = [];
    screenNumbers = '';
    concatString = calculationArray.join('');
    resultsArray.push(concatString);
    console.log(calculationArray.join(''));
    screenInput.value=eval(concatString).toFixed(2);
  }

  function clearCalculator(){
    calculationArray = [];
    screenNumbers = '';
    typingArray = [];
    concatString = '';
    screenInput.value='READY';
  }



  // function performAddition(){
  //   var result;
  //   for(i=0; i<calculationArray.length; i++){
  //     result = calculationArray[i]+calculationArray[i+1];
  //   }
  //       document.querySelector('.screen').innerText=result;
  //       calculationArray = [];
  //       calculationArray.push(result);
  //   }
