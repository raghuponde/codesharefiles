create one folder as javascriptdemos and open that folder using vs code 


Now let us learn async and await features in JavaScript

Now let us learn about async and await in JavaScript. Suppose you are getting some delay 
in fetching a web API. Earlier, I may get the response data, or I may get some network 
error, or I may not get the output. For those kinds of functions, earlier we used to 
write promises in JavaScript.

--------------------------------------------------------

What Are Promises in JavaScript?

A Promise in JavaScript is an object that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value. It allows you to associate handlers 
with an asynchronous action’s eventual success value or failure reason. This makes it 
easier to work with asynchronous operations compared to traditional callback-based code.

A Promise has three states:

1. Pending: The initial state—when the operation is neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure.

--------------------------------------------------------

Key Promise Methods:

- `then()`: Attaches callbacks for the success case (fulfilled state).
- `catch()`: Attaches callbacks for the failure case (rejected state).
- `finally()`: Attaches callbacks to run regardless of the result (optional).

--------------------------------------------------------

Example of Promises

Let’s look at an example where we simulate a promise that fetches some data after a delay and
demonstrate both a success and an error case


write a file name with jspromisedemo.html
------------------------------------------
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <h1>Promises with Web API Example</h1>
    <button onclick="fetchData()">Fetch User Data</button>
    <!-- <script>
        // Function to fetch user data using a manually created Promise
        function fetchData() {
            new Promise((resolve, reject) => {
                // Fetch user data from the API
                fetch('https://jsonplaceholder.typicode.com/users') // Fetch
                    //all users
                    .then(response => {
                        // Check if the response is OK
                        if (!response.ok) {
                            return reject('Network response was not OK'); //
                            //Reject the promise if response is not OK
                        }
                        return response.json(); // Parse the JSON data
                    })
                    .then(data => {
                        resolve(data); // Resolve the promise with fetched
                        data
                    })
                    .catch(error => {
                        reject('Failed to fetch user data: ' + error); //
                        //Reject the promise if an error occurs
                    });
            })
                .then(userData => {
                    // Handle and log the fetched data
                    console.log("User data fetched successfully:", userData);
                })
                .catch(error => {
                    // Handle any error that occurred during the fetch
                    console.error("Error:", error);
                })
                .finally(() => {
                    // This block is executed regardless of success or failure
                    console.log("Fetch operation completed.");
                });
        }
    </script> -->

    <script>
        //using async and await same above code is written like this for impleeting asynchornus programming
        async function fetchData()
        {
            try{

                  const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error("network response was not ok");
                }

                const UserData = await response.json();
                console.log("user data fetched succesfully", UserData);

               }
               catch(error)
               {
                console.error("Error",error)
               }
               finally{
                console.log("fetch operation compeleted succesfully");
               }
          
        }
    </script>
</body>
</html>

now let us see a progam where we are consuming a web api means online function containing some data 
synchronusly and asynchonusly also  earleir using promise function i was able to handle asynchonus programming 
now i am  write the code  without promise but one time synchronusly   also and another time asynchously okay 

new code with both examples 
----------------------------

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Await with Web API Example</title>
</head>

<body>
    <h1>Async/Await with Web API Example</h1>
    <button onclick="consumeWebService()">ConsumeWebService</button>
    <button onclick="consumeWebServiceAsync()">consumewebserviceAsync</button>
    <script>
        function consumeWebService() {
            fetch("https://jsonplaceholder.typicode.com/todos").then(response=> response.json())
                .catch(error => alert('something bad just happened:(')).then(json => console.log(json));
}
        async function consumeWebServiceAsync() {
            try {
                const response = await
                    fetch("https://jsonplaceholder.typicode.com/todos");
                const json = await response.json();
                console.log(json);
            }
            catch (ex) {
                alert('something bad just happened: (');
            }
        }
    </script>
</body>

     
</html>
DOM Manipulation using  javascript
------------------------------
In web development, one of the main features to enable interactivity is DOM Manipulation. DOM manipulation allows developers to interact and modify the structure, style, and content of web pages dynamically.

The below list contains different methods to manipulate DOM.

When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

+----------------+
|   Document    |
+----------------+
        |
+-----------------------+
| Root element: <html> |
+-----------------------+
        |
  +------------------+             +------------------+
  | Element: <head> |             | Element: <body> |
  +------------------+             +------------------+
        |                                 |
  +-------------------+         +------------------+    +------------------+
  | Element: <title> |         | Element: <a>    |    | Element: <h1>    |
  +-------------------+         +------------------+    +------------------+
        |                         |                  |
  +----------------+      +----------------+   +----------------+
  | Text: "My title" |      | Attribute: "href" |   | Text: "My header" |
  +----------------+      +----------------+   +----------------+
                                  |
                          +----------------+
                          | Text: "My link" |
                          +----------------+
						  
						  With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page



go to this link : https://drive.google.com/drive/folders/1AKrv_IbdPOVkZJsZ9W1ESrUkK5lHnZ7c?usp=sharing

and in day 17 downlaod DomDemo folder and then unzipping it open the index.html file from vs code means open folder 
of DomDemo in vscode and run index.html file 

you will find some basic design there now in index.html i am having app.js link 

so in that folder only u have to create app.js file and you have to write the logic for add a movie 
and deleting the movie which is dom manipulation using javascript 

so waht is a DOM (document object model)
The whole elelemts present in document can be show in the form of inverted tree 
and if modify those elelemts of dom which may be a paragraph tag or div tag we say that we are doing dom manpulation

so refer image 30 in drive 

app.js code 
-------------
 document.addEventListener('DOMContentLoaded', function () {
    

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    list.addEventListener('click', (e) => {
        
        if (e.target.className == "delete")
        {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }


    })


    //adding movie

// add movie 

const addform=forms['add-movie'];
addform.addEventListener('submit', function (e) {

    e.preventDefault();


    //creating elements

    const value = addform.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const moviename = document.createElement('span');
    const deletebtn = document.createElement('span');


    //add text content 

    moviename.textContent = value;
    deletebtn.textContent = 'delete';

    // add classes 
    moviename.classList.add('name');
    deletebtn.classList.add('delete');

     
    // append to DOM

    li.appendChild(moviename);
    li.appendChild(deletebtn);
    list.appendChild(li);

})


})

so explain the DOM concept accordingly 

next Closures in javascript 
----------------------------

What is a Closure in JavaScript?
A closure is a function that remembers the variables from its outer scope,
	even after the outer function has finished executing.

📌 Key Concepts
A closure gives access to an outer function’s variables from an inner function.
It preserves state even after the outer function has finished execution.
Used in data encapsulation, private variables, and callbacks.

version 1 of code 
------------------
function counterFunction()
{
    let count = 0;//private variable

    return function () //closure 
    {
        count = count + 1;
        console.log("Current count:", count);
        
    }
}

const mycounter = counterFunction();
mycounter();
mycounter();

How This Works
createCounter() defines a variable count (which is not directly accessible outside).
The returned inner function (closure) remembers and modifies count each time it is called.
Multiple instances (counter1, counter2) maintain separate private count values.


version 2 of code 
--------------------
function counterFunction()
{
    let count = 0;//private variable

     function increment () //closure function will not return now as given name
    {
        count = count + 1;
        console.log("Current count:", count);
        
    }
    increment();// when not retrnign give it a call like this 
}

counterFunction();
counterFunction();

here it will not increment here so 

it is not compulsory for a closure function in JavaScript to return a value. A closure is simply a function that retains access to its outer lexical scope even after the outer function has executed. Returning a value is optional and depends on the use case.

now real time scenario usage of closure taking a bank application so 

add new file bankclosuredemo.js 
--------------------------------
function bankAccount(initialBalance) {
    let balance = initialBalance; // Private variable (not directly accessible)

    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}, New Balance: $${balance}`);
            } else {
                console.log("Deposit amount must be greater than 0.");
            }
        },
        withdraw: function (amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: $${amount}, Remaining Balance: $${balance}`);
            } else {
                console.log("Insufficient funds or invalid amount.");
            }
        },
        checkBalance: function () {
            console.log(`Current Balance: $${balance}`);
        }
    };
}

// Creating a new bank account with an initial balance of $1000
const myAccount = bankAccount(1000);

myAccount.deposit(500);      // Output: Deposited: $500, New Balance: $1500
myAccount.withdraw(200);     // Output: Withdrawn: $200, Remaining Balance: $1300
myAccount.checkBalance();    // Output: Current Balance: $1300

// Direct access to balance is NOT possible
console.log(myAccount.balance); // Output: undefined


JQUERY :
________

Here anonmyus nested functions will be there in jquery it will not wait for the browser to load the dom elements 
it will go  to element of dom like button and there only it will execute the code u can see that in js 
on click is attached to button but in jquery controls will be free of click events in desing they will be free 
but in jquery code those buttons will be used so 
we will take one js program and convert it into jquery  




---------------------------------------------------------------------------
| Feature         | JavaScript                                    | jQuery  |
---------------------------------------------------------------------------
| Definition     | A programming language used to create        | A lightweight JavaScript |
|               | dynamic content on web pages.                | library that simplifies |
|               |                                              | DOM manipulation and AJAX. |
---------------------------------------------------------------------------
| Type          | Core language used in web development.       | A library built on top of JavaScript. |
---------------------------------------------------------------------------
| Syntax       | More complex and requires writing more       | Provides a simpler, shorter |
| Complexity   | lines of code for common tasks.               | syntax to achieve the same results. |
---------------------------------------------------------------------------
| DOM          | Uses `document.getElementById()` and         | Uses `$()` for easy element selection |
| Manipulation | `document.querySelector()`.                   | and manipulation. |
---------------------------------------------------------------------------
| Event        | Uses `addEventListener()` method.            | Uses `.on()`, `.click()`, `.hover()`. |
| Handling    |                                              |                                    |
---------------------------------------------------------------------------
| AJAX         | Uses `fetch()` or `XMLHttpRequest`.          | Uses `.ajax()`, `.get()`, and `.post()` |
| Requests    |                                              | for simpler AJAX calls. |
---------------------------------------------------------------------------
| Performance  | Faster since it's directly executed          | Slightly slower as it requires |
|              | by the browser.                              | jQuery to be loaded first. |
---------------------------------------------------------------------------
| Browser      | Fully supported by all modern browsers.      | jQuery helps manage cross-browser |
| Support     |                                              | compatibility issues. |
---------------------------------------------------------------------------
| Usage       | Can be used for complex applications         | Mostly used for quick web development |
|             | like game development, animations,           | tasks like form validation, UI effects, |
|             | and frameworks like React, Angular, Vue.     | and AJAX handling. |
---------------------------------------------------------------------------
| File Size   | No extra file needed, just built-in          | Requires downloading and including |
|             | browser support.                             | the jQuery library (~80KB minified). |
---------------------------------------------------------------------------

### **When to Use JavaScript?**
- When performance is a priority.
- When working on large-scale applications.
- When using modern frameworks like React, Angular, or Vue.

### **When to Use jQuery?**
- When you need quick and easy DOM manipulation.
- When working with older browsers.
- When you want to simplify AJAX and animations.



Remeber the named function will look like this 
function named()
{ 
// do some stuff here 
} 
An anonymous function can be defined in similar way as a normal 
function but it would not have any name.A anonymous function can be assigned to a variable or passed to a method as shown below.
var handler = function ()
{ 
// do some stuff here 
}
JQuery makes a use of anonymous functions very frequently as 
follows:
$(document).ready(function()
{ 
// do some stuff here 
}); 
so another example is there below u can see it clearly 
<script>
$(document).ready(function(){
  $("button").click(function(){
  $("h1").hide("slow");
  $("h2").show("fast");
  $("img").slideUp();
  });
});
</script>


Now let us go ahead with some examples because once we do we will come to know 


Now in the same folder create first file with the name jquerydemo1.html

jquerydemo1.html
--------	--

<html>

<head>
    <title>The jQuery Example</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" language="javascript">
     $(document).ready(

      function()
      {
       $("div").click(

        function()
        {
            alert("You have clicked me ")
        }

       );

      }



     )
    </script>
</head>

<body>
    <div id="newdiv" style="background-color: yellow;width:90%;height:100px" > Click on this to see a dialogue box. </div>
</body>

</html>
