const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
var studentsRouter = require('./routes/students')
const app = express();



app.use(express.json());
app.use("/api/students", studentsRouter);
// - GET (all, individual)


module.exports = app;
