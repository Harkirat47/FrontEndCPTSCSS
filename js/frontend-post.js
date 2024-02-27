fetch('http://127.0.0.1:8107/api/images/', {
  method: 'POST', // Method itself
  headers: {
    'Content-Type': 'application/json', // Indicates the content 
  },
  body: JSON.stringify({ key: 'value' }) // Body content
})
.then(response => response.json()) // Parses JSON response into native JavaScript objects
.then(data => {
  console.log(data); // Handle the response data
})
.catch((error) => {
  console.error('Error:', error); // Handle the error
});
