const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulation! You are the best!');
    }
})

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Boo I could have better than that!');
    }
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
