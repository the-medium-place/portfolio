const express = require('express');
const path = require('path');
var compression = require('compression');
const app = express();
require('dotenv').config();
app.use(compression())

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/index.html"))
})




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});