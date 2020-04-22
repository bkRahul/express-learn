const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//express middleware to serve static files
app.use('/public', express.static(path.join(__dirname, 'static')))


/* Routes */

//homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});


//about route
app.get('/about', (req, res) => {
    res.send('Welcome to About');
});

app.get('/about/:name/:age', (req, res) => {
	//	console.log(req.params);
	// console.log(req.query);
    res.send('Welcome to '+ req.params.name +'\'s about page');
});


//contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/html', 'contact.html'));
});

//contact form route
app.post('/contact', (req, res) => {
	// res.send("Successfully posted data");
	res.json({success: true})
	console.log(req.body);
});

app.listen(3000);