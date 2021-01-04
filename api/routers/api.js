var express = require('express');
var router = express.Router();

var Asks = require('../controllers/asks');

router.get('/ask/random', Asks.random);

router.get('/ask/:uuid', Asks.get);

router.put('/ask/:uuid', Asks.put);

router.get('/ask', Asks.list);

router.post('/ask', Asks.create);

router.get('/', (req, res) => {
    res.send('Hello World API!')
  })

module.exports = router;