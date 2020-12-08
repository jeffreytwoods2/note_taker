//Dependencies
const express = require("express");
const path = require("path");

//Set up Express
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
//=================================================

//HTML route for home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//HTML route to notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

//Start server
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT)
});