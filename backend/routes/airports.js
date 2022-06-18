var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
require('dotenv').config({path:__dirname+'/./../../.env'})

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const response = await fetch('https://open-atms.airlab.aero/api/v1/airac/airports', {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  });
  const data = await response.json();
  res.send(data)
});

module.exports = router;
