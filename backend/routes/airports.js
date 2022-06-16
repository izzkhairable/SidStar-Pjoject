var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
    const response = await fetch('https://open-atms.airlab.aero/api/v1/airac/airports', {
    method: 'get',
    headers: {'api-key': ''}
  });
  const data = await response.json();
  res.send(data)
});

module.exports = router;
