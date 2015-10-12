##Getting Closure

This is the topic that people usually struggle with the most in Javascript. No topic is the cause of more frustration and bewilderment
than closures.  

So...what is a closure? I've often heard something like the following said:

---
> A closure is a function that has access to the variables or scope that it was declared in

Or even these official sounding words from MDN:

---
> Closures are functions that refer to independent (free) variables.
 In other words, the function defined in the closure 'remembers' the environment in which it was created.


Got it??...awesome!...I guess we're done here. :tada: :fireworks:

###A closer look

Let's check out the first definition, the code would look something like:

```javascript


//We can determine by looking at the code that the function inner
//will have access to seenByInner. Is this a closure?


function encapsulator () {

    var seenByInner = true;

    function inner() {

          console.log( seenByInner );
    }
    inner();
}

encapsulator();

```
Let's be strict and say that it's not precisely a closure, but that an example like the code above introduces nothing special
that the rules of Javascript's lexical scope can't resolve.

If we are going to be strict and say that it isn't, we now have to be precise about what it is.

If we look at those two definitions again, let's zero in on some of the language

> has access to the variables or scope that it **was** declared in
> the closure '**remembers**' the environment in which it **was** created

Both of these statements would seem to imply that the closure is somewhere else now, is this the clue we need?

Let's look at another code example

```javascript

  function returnAFunction () {

          var hello  = 'Hello';

          return function hopefullySayHello () {

              console.log( hello );

          }
  }

  var sayHello = returnAFunction();

  sayHello();  //output: Hello

  //undefined?, try logging sayHello.y, you'll get the same undefined, the js
  //engine has no record of a hello property even declared on sayHello
  console.log ( sayHello.hello );

  console.log ( hello); //reference error?..js engine has no record of hello


```

In the above code we are essentially creating a function that will return another function. Think of it this way:

> Our inner function *hopefullySayHello* bursts out of the cave that was *returnAFunction* and is saved in a global variable
named *sayHello*.

The key thing to realize, and the key to understanding closure is understanding that *hopefullySayHello*, when assigned to *sayHello*
is **no longer in the same lexical scope where it was declared.**  It has jumped ship, or jumped scope to be precise. Think about it like
*hopefullySayHello* has been transferred out of *returnAFunction* via the return statement.

However, even though *hopefullySayHello* has jumped ship, the **extremely important** concept to get is that *hopefullySayHello* still has access to all the
variables in the scope that it was declared. We say that *hopeFullySayHello* has *closure* over the scope of *returnAFunction*.

> A closure never forgets. Like a good hometown hero it always remembers where it came from, even if it's defeated in a unanimous decision in a much hyped
fight with Floyd Mayweather.

Again, to drive the distinction home, we say a function *has closure* over another scope when that function is used outside of it's lexically declared scope
and continues to retain access to the scope in which it was declared.

If you look at the definitions again at the top of the page, I hope they make more sense, what is not clear in those definitions I believe is the fact
that the function is no longer in the same scope in which it was declared. I hope crystallizing that point will take a lot of the pain out of dealing
with closures and deciding when of if some particular piece of code is a closure or not.


What you'll notice in also in the above code is that those two log statements come up empty handed. The variable *hello* is completely
invisible to any code not declared in the scope of *returnAFunction*. This is a very useful result we can use to write better code in javascript, we'll look
at how we can do that in the next session.


###Working with closures

In Javascript there is the idea of an *immediately invoked function expression*, or **IIFE**. This is a function that is executed immediately
as it is declared. There is some special syntax to get that effect, so let's take a look.


```javascript
(function iife (){

        console.log("I'm executed immediately because of the parentheses");
})()

```

The parenthese around our *log* function indicate to javascript that we intend for this to be *immediately invokable*, and that's what
we proceed to do by using the () to fire off the function. Most of the time you will see an **IIFE** used anonymously..so like without the
*log* name. There is no downside to naming your functions, only upside.


With an understanding of the **IIFE**, can you determine if the following code creates a closure on any scope?

```javascript
(function enclosingScope (){

        var hello = "Hello";

        function sayHello () {

            console.log( hello );
        }

       sayHello(); //function is used within the scope it was declared
    })()

```

This code isn't really a closure because none of the functions are used outside of their lexical scope, and therefore there is no need
for closure, the rules of scope lookup alone will suffice to allow this code to run without issue.

The following code will do the same thing using a closure:

```javascript

var sayHello = (function enclosingScope (){

        var hello = "Hello";

        return function sayHello () {

            console.log( hello );
        }


})();

//function is used outside of the scope it was declared in
//and has closure on scope of enclosingScope, meaning it still maintains
//access to variables declared within enclosingScope
sayHello();  

```

So the two code samples above can help illustrate the fact that an IIFE is *not necessarily a closure*, but that often it is used
to create one, as is the case in the second example. We must always think about which scope our functions are going to be used in, and whether
or not that is different from the one they were declared in.


###Modules

Modules are perhaps the most important result of being able to create a closure. They allow us to create encapsulated units of functionality that expose
only what we would like them to. This allows us to follow the best practice of *least knowledge*, that is hiding everything but what we need to expose.

```javascript
var myModule = (function module () {

        var hello  = 'hello';

        return {

            sayHello : function () {
                console.log( hello );
            }
        }
})();

myModule.sayHello();

```

A couple of points to understand about modules

> * We must use a function to create the initial scope, the one that will be *closed over*...or *remembered*
> * We must give back...or somehow return a function. It is this return of the function that creates the closure. Again we say that
the sayHello function creates a closure over the scope of the module function.


####Global Imports

One cool feature of modules is that we can import variable from say the global scope, allowing ourselves the advantage of locality of reference(avoiding lookup
on the global scope).

What this means is we can take things like the *window* and *document* references and make them local variables in our modules.

```javascript

//our module declaration is the same as before, but with the important difference that
//we are declaring two parameters: win and doc
var dopeModule = (function rad (win,doc) {

           return {
               //our function will take a string and write it into a div element
               insertText : function insert (str) {

                   //grab a reference to the body of the document using the imported 'doc'
                   var body = doc.querySelector('body');


                   //create a new element and insert it into the page by appending it to the body tag
                   var newDiv = doc.createElement('div');
                       newDiv.innerHTML = str;

                       body.appendChild(newDiv);
               }
           }

    })(window,document); //we call our IIFE with two arguments, the window and body

    dopeModule.insertText('Text created with function in module');

```




 
