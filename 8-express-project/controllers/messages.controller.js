const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello HQH!</li></ul>');
    res.sendFile(path.join(__dirname, '..', 'public', 'cat.jpg'));
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
}