const express = require('express');
const app = express();

// express config
app.use(express.static('public'));

// css, js, images
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));


let server = app.listen(3000, function () {
    console.log('Server started on port 3000');
});