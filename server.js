var express = require('express')

var app = express();

app.use(express.static('public'));

app.listen(3500,function(){
  console.log('Express Server is done on port 3000');
});
