var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.static('public'));
app.get('/api/:date?', function(req, res) {
  let date = new Date()
  console.log(req.params)
  
  if(req.params.date === undefined){
    return res.json({unix : date.getTime(), utc : date.toUTCString()})
  }
  else if(/^\d+$/.test(req.params.date) === true){
    date = new Date(parseInt(req.params.date))
  }
  else{
    date = new Date(req.params.date)
  }
  if(date.toUTCString() === 'Invalid Date'){
    res.json({error: 'Invalid Date'})
  }
  else{
    res.json({unix : date.getTime(), utc : date.toUTCString()})
  }
  
})

app.listen(10000)