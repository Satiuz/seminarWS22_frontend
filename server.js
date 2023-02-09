const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/seminar-w22-frontend'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);



server.listen(port, () => {
    console.log(`Process Env dirname${process.env.__dirname} | Dirname : ${__dirname}`);
    console.log(`App running on: seminarws22frontend-production.up.railway.app:${port}`);
});
