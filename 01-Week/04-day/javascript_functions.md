

##Pre-requisites: You MUST be comfortable with writing and calling functions<br>
* STARTER TASK<br> In pairs, use http://repl.it/ to write a function called 'showName' that console logs both your names. Then call this function and see if it works. 


##Students will be able to...
* Explain what scope is
* Create a new local scope 
* Explain 'hoisting' in terms of load order


## What the flip is 'scope'?!
Scope is simply the set of variables, objects, and functions that you have access to.

## So what is 'global' scope?
If a variable has global scope, it means that it can be accessed globally - i.e. all other scripts and functions on the page can access it. 

* TASK TWO<br>Delete your work in repl.it so far. In pairs, define a variable called "favouriteColor", and set it equal to green. Then write a function called showColor, that console logs it. Call the function and see if it works. 

This variable we just defined has GLOBAL scope. It can be accessed from anywhere on the page. We just console logged it from inside the function, but we can console log it from ANYWHERE. Try console logging it from outside the function. 

What happens if we leave the 'var' keyword out?<br>
The browser assumes that it is a global variable. For that reason, whenever we define a new variable, we always put 'var' first. We don't want a lot of global variables if we don't need them. 

* TASK THREE: Inside your showColor function, define a new variable called secondFavoriteColor and set it to red. Try console logging it from within the function, and then try console logging it from outside the function. What happens?

## What is 'local' scope?
Local scope is anything that is smaller than the global scope. We create a new local scope by making a function. 

What will be logged in each of these cases?

```javascript
function logNumber() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    cosole.log(a);
}

logNumber()

// 7? 10? Or something else?
```


```javascript
function logNumber() {
    if(10 > 8) {
        var a = 5;
    }
    console.log(a);
}

logNumber()

// 5? or 'undefined'
```
[only a function creates new scope!]


```javascript
var a = 5;

function first() {
    a = 6;
}

function second() {
    console.log(a);
}

first();
second();

// 5? 6? or something else?
```

```javascript
function first() {
    a = 3;
}

function second() {
    console.log(a);
}

first();
second();

// 3? or undefined?
```


```javascript
var a = 5;
function logNumber() {
    var a = 7;
    console.log(a);
}

logNumber();

// 5? 7? or undefined?
```

```javascript
var num = 1;

function first(){
	console.log(num)
	num = 2;

	function second(){
		console.log(num);
	}
	second();
}

first();

// 1,2? 2,1? or something else?
```

```javscript
var cat = "tom"

function showAnimals(){
	var mouse = "jerry";
	console.log(cat);
}

showAnimals()
console.log(mouse);

// tom, jerry? jerry, tom? Or something else?
```


```javascript
var a = 6;

function first() {
    var a = 7;
    function second() {
        var a = 8;
        console.log(a);  
    }
    second();
    console.log(a);  
}

first();
​console.log(a);​  

//8,7,6? 6,7,8? 7,8,6? 7,6,8? or something else?
```


## Ok, so now what is hoisting?
Have you ever had errors because your javscript loaded stuff in the wrong order?

```
console.log(bestAnimal);
var bestAnimal = "dog";
```
This happens ALL THE TIME!

If we understand hoisting, we don't need to worry as much about load order.


### variable hoisting

``` 
var city = "Los Angeles"
console.log(city)
```

```
var city = "Los Angeles"

function showCity(){
	console.log(city);
}

showCity();
```

```
var city = "Los Angeles";

function showCity(){
	console.log(city);
	var city = "New York";
}

showCity();

// HOLY MACKEREL! WHY IS THIS SILLINESS HAPPENING?!
```

Before any javscript is executed, the compiler searches through your code, finds any variables, and effectively 'hoists' them to the top of the current scope. However, ONLY the declaration is hoisted, not the actual assignment!
After that, it searches through and finds all the function declarations and hoists them to the top too. 

This is why we rarely use function expressions:

```
// this is the sucky way of doing it
double(5)

var double = function(number){
	return number*2
}


```

and instead we use function declarations:
```
//this is the cool way of doing it
double(5)

function double(number){
	return number*2
}
```

## Your tasks:
* Why does this code not work? http://repl.it/mVA/4
* Change showCar to a function declaration so that it will work.
* Explain why this code outputs the way it does http://repl.it/mVA/1
* How is this code different, and why does it not work? http://repl.it/mVA/2
* Why does this not work? http://repl.it/mVA/5
* This one seems broken too, how can we fix it? http://repl.it/mVA/6
* Arg! I keep getting errors! Why does line 8 not work here? http://repl.it/mVA/7
* Explain why the animal variable sometimes refers to the gorilla, and sometimes refers to the puppy http://repl.it/mVA/8
* remove a single word from the previous code so that the puppy waves, not the gorilla. 





