Asynchronous Javascript
Code that can start now and finish later,that is excuting tasks that takes a long time (loading data from interwebs,asking for user events, etc ) without blocking the main thread. Governs how we perform tasks which takes some time to complete.

some techniques include
1. Callbacks: function passed as arguments to other functions,excuted upon completion of an asynchronous operation.
2. promise:Objects representing the eventual result of an asynchronous operation,providing a cleaner way to handle asychronous code compared to callbacks.
3. Asyn/Await:Lets us tell js to stop and wait for an asynchronous operation to finish. In the case of a promise it waits for it to complete before continuing our code

Asynchronous function
JS can usually run straight  through our program synchronously i.e doing one task at a time (single-threaded).But when we need to do something that takes a long time, we still want the web browser to keep working, it adds the slow task to a "TODO list" and keeps on running our program.The task runs some time later "asynchronously e.g

1. console.log(1);
2. console.log(2);
3. setTimeout(() => {
    console.log("callback fxn fired");
}. 2000);
4. console.log(3);
5. console.log(4);


Fetching data
Fetch() lets us use js to load data from APIs or sending data to a server. It returns a promise which lets us handle the response asynchronously.

Fetch('todos/Luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected',err);
})

 Asyn/Await
 Lets us tell js to stop and wait for an asynchronous operation to finish. In the case of a promise it waits for it to complete before continuing our code


let response = await fetch("https://dog.ceo/api/breed/hound/list");
console.log(response);

1. The await helps bundle asynchronous code inside a function 
2. It doesn't block the rest of the code
3. It gives a more cleaner way to chain promises