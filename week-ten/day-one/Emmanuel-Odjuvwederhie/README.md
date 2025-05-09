# WHAT ASYNCHRONOUS CODE MEANS IN JAVASCRIPT
Asynchronous code is Javascript allows the program to executes tasks without blocking the main thread. This means that Javascript can continue running other code while waiting for time-consuming operations (Like API requests or file loading) to complete. It improves performance and responsiveness, especially in web applications.

## HOW AND WHY WE USE fetch()
The fetch() function is used to make network requests (like getting data from an API). It returns a Promise that resolves with the Response object representing the result of the request.

### WHY WE USE IT?
1. To retrieve data from serves without refreshing the page
2. To post data to a server
3. To work with RESTful APIs in a simple, readable way

### WHAT async/await DO AND HOW THEY WORK?
1. async is a keyword used to declare a function that always return a Promise
2. await is used inside an async function to pause execution until a Promise is resolved.
3. They provide a clearer, more readable way to work with asynchronous code, compared to chaining.then()

### AN EXAMPLE:
```js
async function fetchUser() { 
    const res = await fetch('https://api.example.com/data'); 
    const user =await res.json(); 
    console.log('User Name: ${user.name}'); 
}
fetchUser(); 
```

### Done by Emmanuel-Odjuvwederhie Oghenevovwero A.K.A Brainfriend4life
