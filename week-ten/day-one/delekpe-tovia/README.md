# WHAT ASYNCHRONOUS CODE MEANS?
It governs how we perform tasks which takes times to finish. I.e it sets a timer in completing a particular task.
It helps to run the tasks independently so other tasks don't have to wait for one to finish before starting.

## HOW AND WHY WE USE FETCH()?
1. It helps to handle promise
2. It makes it easy to chain

### WHAT ASYNC/AWAIT DO AND HOW THEY WORK?
1. async marks a function as asynchronous. It means the function always returns a Promise.
2. await pauses the execution of the asynchronous function until a Promise is resolved.

### AN EXAMPLE:

```js
async function getMessage(url) {
    const response = await fetch("https://api.tovia.com/data");
    const data = await response.json();
    return data.message;
}
```