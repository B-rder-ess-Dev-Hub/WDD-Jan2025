Asynchronous codes in JavaScript allows for a different thread like a second thread instead of a single-thread. It allows certain codes to run separately from the main thread. It is used for operations such as loading and audio or image in a webpage without blocking the rest of the program.


 We use fetch() to retrieve data from a server such as making API calls or loading content dynamically. fetch() is used to make HTTP requests and it returns a "promise".

asyn function returns a "promise", while await pauses the execution until the promise is resolved or rejected. 

Example: 
async function getData() {
   const response = await
   fetch('https://..);
   const data = await response.json();
   console.log(data)
}
