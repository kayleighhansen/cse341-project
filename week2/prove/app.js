const http = require('http');
const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('In the middleware');
});

console.log(routes.someText);

const server = http.createServer();

server.listen(3000);