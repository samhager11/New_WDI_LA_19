console.log("--------Script Started----------");
//Global Variables
var result ,
    inputValues = [],
    operator,
    buttons = document.getElementsByClassName('buttons'),
    inputBox = document.getElementById('display');

//show the variables in the console
console.log("Result:"+ result, "Input Values:"+inputValues,"Operator:"+operator,buttons);

//create our basic functions
function clear(){
  result = "";
  inputValues = [];
  operator = "";
  inputBox.value = "";
}

// add event listener to all buttons
for(i=0; i<buttons.length; i++)
{
  buttons[i].addEventListener('click',function(){
    inputValues.push(this.innerHTML);
    console.log("Current values stored:",inputValues);
  });
}
