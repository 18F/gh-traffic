'use strict';
require('dotenv').config();
const request = require('request');
const restify = require('restify');
const io = require('socket.io');

// Set defaults
const PORT = process.env.PORT || 5200;
const REPO = process.env.REPO || '18F/bpa-fedramp-dashboard'

const server = restify.createServer({ name: 'Magical magic' });
const sockets = io.listen(server.server);

const req = {
  url: 'https://github.com/' + REPO + '/graphs/traffic-data',
  headers: {
    Accept: 'application/json',
    Cookie: 'user_session=' + process.env.SESSION
  }
};

let lastStats = { };
function getGithubTrafficData() {
  request.get(req, (err, res, body) => {
    lastStats = JSON.parse(body);
    sockets.emit('stats', lastStats);
    console.log('Got traffic data');
  });
  setTimeout(getGithubTrafficData, 300000);
}
getGithubTrafficData();

sockets.on('connect', function(s) {
  console.log('Got new connection.  Sending last stats.');
  s.emit('stats', lastStats);
});

server.get(/.*/, restify.serveStatic({
  directory: './web',
  default: 'index.html',
  charSet: 'utf-8'
}));

server.listen(PORT, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
