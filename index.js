// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const PORT = process.env.PORT 

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });


const path = require('path')
// app.set('views', path.join(__dirname, 'templates'))
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/home', function(req, res) {
	res.render('index.pug', {date: new Date().toDateString()})
})
// app.listen(process.env.PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
app.listen(10000)