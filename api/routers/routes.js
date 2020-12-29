var express = require('express');
var router = express.Router();

var asks = require('../controllers/asks');

router.get('/ask/:uuid', asks.get);

router.get('/ask', asks.list);

router.post('/ask', asks.create);

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

module.exports = router;