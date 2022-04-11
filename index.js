const express = require("express");
const helmet = require("helmet");

const app = express();

app.set("view engine","ejs");
app.use(helmet());

const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(6666);