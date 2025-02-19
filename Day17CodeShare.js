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
    <script>
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
    </script>
</body>
</html>
