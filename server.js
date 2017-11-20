/******************** Generic Libs ********************/

const express = require('express');
const app = express();
const path = require('path');


/******************** Define Routes ********************/

app.use(express.static( path.join(__dirname + '/dist') ));

app.get('/', function (req, res) {
    res.sendFile( path.join(__dirname + '/dist/index.html') );
});


/******************** Start Server ********************/

let PORT = process.env.PORT || 3000;
app.listen (PORT, function() {
    console.log(`App listening on port: ${PORT}`);
});
