var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var {get_stars, get_sids} = require('./sidsStars');
var {get_waypoints} = require('./waypoints');

require('dotenv').config({path:__dirname+'/./../../.env'})

router.get('/', async function (req, res, next) {
    const response = await fetch('https://open-atms.airlab.aero/api/v1/airac/airports', {
    method: 'get',
    headers: {'api-key': process.env.API_KEY}
  }).then((response)=>{
      return response.json()
  })
  const data = await response;
  res.send(data)
});

router.get('/sids', get_sids);
router.get('/stars', get_stars);
router.get('/:type/waypoints/', get_waypoints)

module.exports = router;


