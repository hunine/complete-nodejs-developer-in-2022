const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello HQH!</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})