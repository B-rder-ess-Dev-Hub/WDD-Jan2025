
SUMMARY OF INTRODUCTION TO ASYNCHRONOUS CODE IN JAVASCRIPT.

Usually, JavaScript code does things that are very quick, so JavaScript can usually run straight through our program "synchronously".

But when we need to do something that takes a long time, we still want the web browser to keep working.

JS can only do one task at a time ("single-threaded"), So when we give JS a task that takes a while, it doesn't stop and wait. It adds the slow task to a "TODO list" and keeps on running our program. The task runs some time later, "asynchronously".


In JavaScript, asynchronous code refers to code that runs seperately from the main programe flow, allowing other codes to execute without waiting for it to finish. This is very useful when dealing with tasks task that take time, such as:

1. Waiting for user events
2. Asking a user to pick a file
3. Getting permission to access the camera/mic
4. Loading data from the interwebs.

Instead of blocking the program while waiting, JavaScript can continue running other code, and handle the result later when it's ready.


COMMON WAYS TO WRITE ASYNCHRONOUS CODE:

1. Callbacks: this is a function passed as an argument to another function to be executed later
2. Promise: This represents a value that may be available now, later, or never.
3. async/await: this makes async code look more like synchronous code.

Example:

console.log("Order food");
setTimeout(() => console.log("food is delivered"), 3000);
console.log("Watch a movies");

Explanation:

1. console.log("Order food") runs first;
2. setTimeout() schedules "Food is delivered" to be printed after 3 seconds, but it doesn't stop the code;
3. While waiting, console.log("Watch a movies") runs immediately.
4. After 3 seconds, the message 'Food is delivere" shows up.


WHAT IS fetch() IN JAVASCRIPT?

fetch() lets us use JS to load data from APIs(Application Programming Interface). It takes time to fetch data from the network, So JS writes us an "IOU" for the data value it doesn't have yet, aka, a Promise of a value. 

Promises can be in 3 possible states:

1. pending: still waiting for the value, hang tight
2. fulfilled (aka "resolved"): finally got the value, all done
3. rejected: sorry couldn't get the value, all done.
It takes time for Promises to resolve, so they are "asynchronous"

WHY DO WE USE fetch()?

We use fetch to:

1. Get data from a server (e.g., fetch user info from an API)
2. Send data to a server (e.g., submit a form)
3. Communicate with backends in web apps.

HOW DO WE USE fetch()?

fetch("https://dog.ceo/api/breed/hound/list")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:'. error));

EXPLANATION:

1. fetch(...) sends a GET request to the API.
2. .then(response => response.json()) turns the response into usuable JSON.
3. .then(data => (...)) lets you work with that data.
4. .catch(...) handles any errors (like no internet or a bad URL).



await

await lets us tell JS to stop and wait for an asynchronous operation to finish, In the case of a Promise, it waits for it to resolve before continuing with our code. The Promise we get from fetch() resolves to a Response object. Calling the .json() method on the response parses its body as a JSON object.



async function.

If we try to await something in a regular function, JS won't allow it. We need to make it an async function.


async function fetchData(url) {
    const response = await fetch(url);
    return response;
}

This tells JS to expect to await async operations inside the function.



async/await

In JavaScript, async/await is a syntax that makes asynchronous code easier to read and write. This makes an asynchronous code look almost like a synchronous code.


async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}


EXPLANATION:

1. async function makes fetchData() return a promise automatically.
2. await fetch(...) tells JavaScript: "Wait until this promise is resolved before continuing".
3. only after fetch and .json() are done, console.log(data) runs.






