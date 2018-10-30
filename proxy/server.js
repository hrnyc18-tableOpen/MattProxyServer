const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const reviewsURL = `localhost:3021`;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/restaurant/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/Reviews/*', (req, res) => {
  axios.get(`http://localhost:3021${req.url}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
