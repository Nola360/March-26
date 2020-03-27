const express = require('express');

const app = express();
module.exports = app;


var port = process.env.PORT || 5000;

app.listen(port, function () {

  console.log('app running')
})