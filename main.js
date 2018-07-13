const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.end('we now have a res');
})

app.listen(3000, function() {
	console.log('app is listening...');
});