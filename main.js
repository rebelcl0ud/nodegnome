const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config({path: '.env'});

// middleware
app.use(express.static(path.join(__dirname,'/public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// server
app.listen(process.env.PORT || 3000, function() {
	console.log('app is listening...');
});

// form
app.post('/', (req,res) => {
	let email = req.body.email;
	emailAddMailchimp(email);
	res.send('POST request successful');
});

// hooking up API, using Postman Node->Request snippet
// dotenv for keys and such
function emailAddMailchimp(email) {
	const request = require('request');

	let options = { method: 'POST',
		url: `https://us18.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members`,
		headers: 
			{ 'Postman-Token': process.env.PT,
				'Cache-Control': 'no-cache',
				Authorization: process.env.AUTH,
				'Content-Type': 'application/json' },
		body: 
			{ email_address: email,
				status: 'subscribed' },
		json: true };

	request(options, (error, response, body) => {
		if (error) throw new Error(error);

		console.log(body);
	});
}