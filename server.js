'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;


const server = express()
  .get("/", (req, res) => { res.sendFile("/index.html", { root: __dirname }) })
  .use("/assets", express.static(__dirname + "/assets"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws, req) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (data) => {
    var cookies = req.headers.cookie;
    var username = getCookie("username", cookies)
    const user = JSON.parse(data).username;
    if (username == user) {
      console.log(username + " sent new message!");
      wss.clients.forEach((client) => {
        client.send(data);
      });
    }
  });
});


function getCookie(cname, cook) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(cook);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}