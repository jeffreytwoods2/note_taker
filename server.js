//Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

//Set up Express
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
//=================================================

//HTML routes
require("./routes/htmlRoutes")(app);

//Start server
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT)
});