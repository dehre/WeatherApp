var express = require('express')

var app = express();

app.use(express.static('public'));

app.listen(4000,function(){
  console.log('Express Server is done on port 4000');
});
