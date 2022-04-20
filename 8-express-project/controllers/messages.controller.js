const path = require('path');

function getMessages(req, res) {
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cat.jpg'));
    res.render('messages', {
        title: 'Messages to me',
        friend: 'Hung'
    })
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
}