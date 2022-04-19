const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cat.jpg'));
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
}