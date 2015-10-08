
## Working with Closures Lab Answers

### Exercise 1)

```javascript
function multiplierFactory(n){
        var multiplier = n;

        return {
            multiply : function (numToMultiply){

                return multiplier * numToMultiply;
            }

        }

}

var multiplier = multiplierFactory(2);

console.log(multiplier.multiply(4));  //should output 8

```

### Exercise 2) Create a function that can increment a count, and then reset the count

```javascript
function counter() {
        var count = 0;

        return {
            count: function() { return ++count; },
            reset: function() { count = 0; }
        };
    }

var c  = counter();
console.log(c.count()); //should be 1
console.log(c.count()); //should be 2
console.log(c.reset()); //reset the counter
console.log(c.count()); //should be 1

```


### Exercise 3) Building Jquery

* The general idea of this exercise is to re create the basic functionality of Jquery, meaning  create a '$' alias for methods that are
closed over in a via a module that is created with an immediately invoked function expression. Global import is a nice feature which we
make use of here, that is , importing both the window and the document.

```javascript
 var $  = (function(win,doc){

        return {

            byId : function(id){
                return doc.getElementById(id);
            }



        }

    })(window,document);


var test  = $.byId('test');

```

### Exercise 4) Attaching an event handler in a loop using the loop index

```html
<body>

<div>Click 1</div>
<div>Click 2</div>
<div>Click 3</div>
<div>Click 4</div>
<div>Click 5</div>

</body>
<script>
     var divs  = document.getElementsByTagName('div');


     function attachIndex(i){
         //we pass e into the function, which is a placeholder for the event object that is passed in
         //the important point is that when we return our anonymous inner function, it closes over, or binds to i
         //AT THE TIME IT IS CALLED, so it works as expected.
         return function(e)  {alert('div' + i + ' clicked')};
     }

     for (var i = 1; i <= divs.length; i++){

         divs[i-1].addEventListener('click',attachIndex(i));
     }

</script>

```

### Exercise 5) Augmenting our Jquery module

```
 var $  = (function(win,doc){

        return {

            byId : function(id){
                return doc.getElementById(id);
            }
        }

    })(window,document);

    var new$ = (function($){

        $.newMethod = function (){
            console.log('new method added');
        };

        return $;
    })($);


    new$.byId('test');  //check that our old methods work
    new$.newMethod();

```