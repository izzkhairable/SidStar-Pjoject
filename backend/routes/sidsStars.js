var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
require('dotenv').config({path:__dirname+'/./../../.env'})

router.get('/sids', async function (req, res, next) {
    const icao=req.query.airport_icao
    const response = await fetch(`https://open-atms.airlab.aero/api/v1/airac/sids/airport/${icao}`, {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  }).catch((e)=>{
    console.error(e)
  })
  const data = await response.json();
  res.send(data)
});

router.get('/stars', async function (req, res, next) {
    const icao=req.query.airport_icao
    const response = await fetch(`https://open-atms.airlab.aero/api/v1/airac/stars/airport/${icao}`, {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  }).catch((e)=>{
    console.error(e)
  })
  const data = await response.json();
  res.send(data)
});

module.exports = router;
