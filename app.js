
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const google = require('./google-data.js');

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query;
  if(!sort) {
      return res
                .status(400)
                .send('You need to select sort!');
  }
  if(sort !== 'rating' && sort !== 'app') {
      return res
                .status(400)
                .send('You must select rating or app');
  }

  let sortedArray = [...google];
  
  if('rating') {
      sortedArray.sort((a, b) => {
          return a['rating'] > b['rating'] ? 1 : a['rating'] < b['rating'] ? -1 : 0;
      })
  }
  if('app') {
      sortedArray.sort((a,b) => {
          return a['app'] > b['app'] ? 1 : a['app'] < b['app'] ? -1 : 0;
      })
  }
    res.json(sortedArray);
});
  
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });