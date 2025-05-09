fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => {
    document.getElementById('post-title').innerText = data.title;
    document.getElementById('post-body').innerText = data.body;
})
.catch(error => {
    document.getElementById('post-title').innerText = 'Error loading post';
    console.error('Error:', error);
})