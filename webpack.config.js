const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public/js/'),
		filename: 'build.js'
	},
	watch: true
}