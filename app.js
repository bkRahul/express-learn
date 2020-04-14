const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// support parsing of application/json type post data
//app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//express middleware to serve static files
app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('Welcome to About');
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/html', 'contact.html'));
});

app.get('/about/:name/:age', (req, res) => {
	//	console.log(req.params);
	// console.log(req.query);
    res.send('Welcome to '+ req.params.name +'\'s about page');
});



app.listen(3000);