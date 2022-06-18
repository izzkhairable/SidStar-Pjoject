var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var waypoints = require('../services/waypoints');
require('dotenv').config({path:__dirname+'/./../../.env'})

router.get('/:type/waypoints/', async function (req, res, next) {
    const sidOrStar= req.params.type
    const icao=req.query.airport_icao
    const response = await fetch(`https://open-atms.airlab.aero/api/v1/airac/${sidOrStar}/airport/${icao}`, {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  }).catch((e)=>{
    console.error(e)
  })

  const data = await response.json();
  const waypoints_list=waypoints(data)
  res.send(waypoints_list)
});

module.exports = router;