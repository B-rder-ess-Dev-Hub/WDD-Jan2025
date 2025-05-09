Synchronous Code:This executes line by line, blocking subsequent tasks until the current one finishes

Asynchronous code helps JavaScript handle tasks without stopping everything else.

The fetch() provides a modern, way to make network requests, primarily for fetching data from APIs and other web resources. It's designed to replace the older XMLHttpRequest (XHR) approach, offering a cleaner and more intuitive syntax. 

One way to get data from a website or API is using fetch(). It sends a request and waits for a response. Since responses aren’t instant, JavaScript uses Promises to manage them.

A simpler way to handle Promises is using async/await. By marking a function as async, we can use await to pause the code until the result is ready. This makes the code easier to read and understand.

