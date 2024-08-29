const express = require('express');
const { errorHandler } = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();

const server = express();

server.use(express.json());
server.use("/api/contacts", require("./routes/contactRoutes"));
server.use(errorHandler);

server.listen(3000,()=>{
    console.log("server running on port 3000");
});

