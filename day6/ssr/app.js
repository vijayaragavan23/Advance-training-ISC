const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const PORT = 8000;

const app = express();

// Render index.ejs file
app.get('/', function (req, res) {

    // Render page using renderFile method
    ejs.renderFile('./index.ejs', {}, {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});

// Server setup
app.listen(PORT, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});