const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/btc', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-06-01&end=2020-05-31')
  .then(function (response) {
    console.log(response.data);
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.log(error);
    res.sendStatus(500);
  })
  .finally(function () {
    console.log('done');
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
