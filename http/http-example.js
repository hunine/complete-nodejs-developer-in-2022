const { get } = require('http');

get('http://google.com', (res) => {
    res.on('data', (data) => {
        console.log(`Data: ${data}`);
    })

    res.on('end', () => {
        console.log('No more data');
    })
});