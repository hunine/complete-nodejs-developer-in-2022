const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'hunine',
    },
    {
        id: 1,
        name: 'bongudth',
    },
    {
        id: 2,
        name: 'koder',
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello HQH!</li></ul>')
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});