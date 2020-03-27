import express from 'express';

const app = express();
export default app;


var port = process.env.PORT || 5000;

app.listen(port, function () {

  console.log('app running')
})