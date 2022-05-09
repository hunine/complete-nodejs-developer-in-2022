const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.get('/secret', (req, res) => {
    res.send('This is secret');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https
    .createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
    }, app)
    .listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
