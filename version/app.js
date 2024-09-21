const express = require('express');
const app = express();

console.log('Starting application...');

app.get('/', function (req, res) {
    console.log('Received request at /');
    const response = 'This is version 3 of the app.\n';
    res.send(response);
});

app.listen(8080, '0.0.0.0', function (err) {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server listening on 0.0.0.0:8080');
    }
});

// Добавим обработку необработанных ошибок
process.on('uncaughtException', function(err) {
    console.error('Uncaught exception:', err);
});