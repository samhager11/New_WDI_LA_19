var maxCharacters = 11;

// html elements
//var calculator = document.querySelector("#calculator");
var readout = document.querySelector("#readout");
var btnsNum = document.querySelectorAll(".btn-num");
var btnsOperator = document.querySelectorAll(".btn-operator");
var btnPlus = document.querySelector('#btn-plus');
var btnMinus = document.querySelector('#btn-minus');
var btnMultiply = document.querySelector('#btn-times');
var btnDivide = document.querySelector('#btn-divide');
var btnEquals = document.querySelector('#btn-equals');
var btnClear = document.querySelector('#btn-clear');

for(var i = 0; i < btnsNum.length; i ++) {
    btnsNum[i].addEventListener('click', inputDigit);
    btnsNum[i].val = parseFloat(btnsNum[i].innerHTML);
    console.log(btnsNum[i].val);
}
btnsNum[10].val = '.';

var charactersEntered;
var recordNum;
var calcArray = ['','',''];

//////////////////////////////////

function inputDigit(){
    //check if maxCharacters is reached. if not, then input accordingly
    if(readout.innerText.length <= maxCharacters) {
        //if the first number clicked is not '0'
        //if(this.val != 0){
            //how to begin entering characters if contents of readout are not currently numbers
            if(calcArray[recordNum] == '') {
                readout.innerHTML = '';
            }
            readout.innerHTML += this.val;
            if(recordNum == 0){
                calcArray[0] += this.val;
            } else {
                calcArray[2] += this.val;
                stripOperatorSelectedClass();
            }
            charactersEntered ++;

            console.log(calcArray);
        //}
    }
}

////////// OPERATOR Button Methods: ////////////

function stripOperatorSelectedClass(){
    for(var i = 0; i < btnsOperator.length; i ++) {
        btnsOperator[i].className = 'btn-operator';
    }
}

function setOperator() {
    stripOperatorSelectedClass();
    this.className += ' operator-selected';
    if(calcArray[2] != '') {
        evaluate();
    }

    calcArray[1] = this.operator;
    recordNum = 2;

    console.log(calcArray);
}

////////// Operator Functions: ////////////

function sum(num1,num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function difference(num1,num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function divisionOf(num1,num2) {
    return parseFloat(num1) / parseFloat(num2);
}

function multiplicationOf(num1,num2) {
    return parseFloat(num1) * parseFloat(num2);
}

////////////// EVALUATE ////////////////////

function evaluate() {
    var result = calcArray[1](calcArray[0],calcArray[2]);
    console.log(calcArray);
    readout.innerHTML = result;

    //set result to calcArray[1] and clear the rest so that more calculations can be run
    calcArray = [result,'',''];

    stripOperatorSelectedClass();
}
btnEquals.addEventListener('click',evaluate);

////////////// CLEAR ////////////////////
function initCalculator() {
    recordNum = 0;
    calcArray = ['','',''];
    readout.innerHTML = '0';
    charactersEntered = 0;
    stripOperatorSelectedClass();
}

btnClear.addEventListener('click', initCalculator);

//////////////// Assign Operators to buttons //////////////////

btnPlus.operator = sum;
btnPlus.addEventListener('click',setOperator);

btnMinus.operator = difference;
btnMinus.addEventListener('click',setOperator);

btnMultiply.operator = multiplicationOf;
btnMultiply.addEventListener('click',setOperator);

btnDivide.operator = divisionOf;
btnDivide.addEventListener('click',setOperator);

////////////// Begin ////////////////////

initCalculator();