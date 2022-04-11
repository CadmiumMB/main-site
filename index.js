//Server port to listen to
const PORT = process.env.PORT || 6666;

//Importing server modules
const http = require("http");
const express = require("express");
const socketio = require("socket.io")
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//HTTP server configuration
const app = express();
const server = http.createServer(app);
app.use(helmet());
app.use(cors());
app.set("view engine","ejs");

//
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CadmiumMB");

//Web socket server configuration
const io = socketio(server);

//Opening server to internet
server.listen(PORT, console.log(`Listening to port ${PORT}`));