![General Assembly Logo](http://i.imgur.com/ke8USTq.png)


## Working with Closures Lab

> It is suggested that you create your examples in the snippets section of the Sources panel in Chrome. That way you can debug and
get practice stepping through your code.


### Exercise 1

> Create a function named "multiplierFactory". This function will take one parameter, the multiple, and return functionality such that
a number you specify will be multiplied by the multiple.

Example usage:

```javascript
var multiplier = multiplierFactory(2);

console.log(multiplier.multiply(4));  //should output 8


```


### Exercise 2

> Create a counter function that can be used like as follows:

```javascript
var c  = counter();
console.log(c.count()); //should be 1
console.log(c.count()); //should be 2
console.log(c.reset()); //reset the counter
console.log(c.count()); //should be 1

```

You will need to return functionality from your function, using closure.

### Exercise 3

> Building Jquery from scratch!!(well not the whole thing)

* We will be creating a DOM library, which will clone the basic look and feel of Jquery.
* Functionality:

```byId('id')``` should return an element with id of 'id'
```html('id','htmlString')``` should set the inner html of an element with id of 'id' to 'htmlString'
```addClass('id','className')``` should add 'className' as an additional class of the element with id of 'id'
```location('url')``` should change the page to the specified relative url

* Alias your functionality with '$', such that $.byId('test') would return an element having an id of 'test.
* Use global import to bring both the window and your document into your module.

### Exercise 4

> Adding an eventListener to multiple HTML elements in a loop that keeps track of an index

You have HTML like the following

```html

<div>Click 1</div>
<div>Click 2</div>
<div>Click 3</div>
<div>Click 4</div>
<div>Click 5</div>

```

Using a loop like the following, use the loop index ```i``` to notify the user which div was clicked

```javascript

for(var i = 1 ; i < 6; i++){
   alert(i);
}

```

So inside of the loop you will need to attach an event handler to each div that will alert the user which div has been clicked, so for
the first div the alert should be 'div 1 clicked', where i was used to give the number 1.

### Exercise 5

> Use the the module pattern, as we did in recreating Jquery to augment a module, that is, we want a module that has all of the jquery
functionality in it, but also an extension of a new method. We will use augmentation to accomplish this.

Example usage:

```javascript
//It is assumed that $ has been defined as the module we
//created in the earlier exercise.

new$.byId('test');  //check that our old methods work
new$.newMethod();

```


