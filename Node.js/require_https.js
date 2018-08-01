const https = require('https');
https.get('https://teamtreehouse.com/iftekharchowdhury.json',response => {
	console.log(response.statusCode);
});