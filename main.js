const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req,res) => {
// 	res.end('we now have a res');
// });

// middleware
app.use(express.static(path.join(__dirname,'/public')));

app.listen(3000, function() {
	console.log('app is listening...');
});