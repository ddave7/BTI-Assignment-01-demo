const express = require('express'); 
const path = require('path');
const app = express(); 
const HTTP_PORT = process.env.PORT || 8080; 

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

// Start the server
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
