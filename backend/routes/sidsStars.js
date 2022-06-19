var fetch = require('node-fetch');
require('dotenv').config({path:__dirname+'/./../../.env'})

const get_sids= async (req, res, next)=> {
    const icao=req.query.airport_icao
    const response = await fetch(`https://open-atms.airlab.aero/api/v1/airac/sids/airport/${icao}`, {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  })
  const data = await response.json();
  res.send(data)
}

const get_stars= async (req, res, next)=> {
    const icao=req.query.airport_icao
    const response = await fetch(`https://open-atms.airlab.aero/api/v1/airac/stars/airport/${icao}`, {
    method: 'get',
    headers: {'api-key': process.env.API_KEY }
  })
  const data = await response.json();
  res.send(data)
};


module.exports ={ get_sids,get_stars}
