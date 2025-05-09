JavaScript is a single-threaded, that is, it can only process one task/operation which could be a problem because If one task takes a long time (like downloading a file from the internet), everything behind it has to wait.

To solve that, we make use of "Asynchronous code" so that JavaScript can start a long task (like fetching data), set it aside (give it to the browser or a web API), continue doing other tasks,then come back to it when it’s done.
Asynchronous code helps in improving the performance and responsiveness in the web application.

 HOW AND WHY WE USE fetch()? fetch() is a built-in JavaScript function used to make network requests (typically HTTP).

It returns a Promise, which resolves when the request completes.

Commonly used to get or send data to external APIs.


 WHAT async / await DO AND HOW THEY WORK?

async keyword is used to define asynchronous functions that return a Promise.

await is used inside async functions to pause execution until the Promise is resolved.

Helps write asynchronous code in a cleaner, more readable manner.