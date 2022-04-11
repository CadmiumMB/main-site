//Server port to listen to
const PORT = process.env.PORT || 6666;

//Importing server modules
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//HTTP server configuration
const app = express();
const server = http.createServer(app);
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.set("view engine","ejs");
app.use("/static", express.static("./static"));

//MongoDB client configuration
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CadmiumMB");

//MongoDB setup schemas
global.Users = mongoose.model("Users", require("./models/Users.js"));

//Web socket server configuration
const io = socketio(server);

//Opening server to internet
server.listen(PORT, console.log(`Listening to port ${PORT}`));