"use strict";
// import statments
const express = require("express");
require("dotenv").config();
// config
const port = parseInt(process.env.PORT) || 5000;
// server init
const server = express();
// server middlewares
//server routes or services
//server start
server.listen(port, () => console.log(`server running on port ${port}`));
