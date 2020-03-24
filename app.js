
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

const google = require('./google-data.js');

app.get('/apps', (req, res) => {
  const {sort, genres} = req.query;
  let googleArray = [...google];

  if(!sort) {
    res
        .status(400)
        .send('You need to select sort!');
    }

    if(sort !== 'App' && sort !== 'Rating') {
        res
        .status(400)
        .send('You must select rating or app');
    }

    if(sort) {
        if(sort === 'Rating') {
            googleArray.sort((a, b) => {
                return a['Rating'] > b['Rating'] ? 1 : a['Rating'] < b['Rating'] ? -1 : 0;
            })
        }
        if(sort === 'App') {
            googleArray.sort((a,b) => {
                return a['App'] > b['App'] ? 1 : a['App'] < b['App'] ? -1 : 0;
            })
        }
    } 
    

    

  
  
  
    res.json(googleArray);
});
  
app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });