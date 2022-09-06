var express = require('express');
var router = express.Router();

const basicAuthMidd = require('../_helpers/authService');

var Asks = require('../controllers/asks');

router.get('/ask/random', Asks.random);

router.post('/ask/:uuid/addQuest', basicAuthMidd, Asks.addQuest);

router.delete('/ask/:uuid/removeQuest/:idquest', basicAuthMidd, Asks.removeQuest);

router.get('/ask/:uuid/revised/:status', Asks.revised);

router.get('/ask/:uuid', Asks.get);

router.delete('/ask/:uuid', basicAuthMidd, Asks.delete);

router.put('/ask/:uuid', basicAuthMidd, Asks.put);

router.get('/ask', Asks.list);

router.post('/ask', basicAuthMidd, Asks.create);

router.get('/', (req, res) => {
    res.send('Hello World API!')
  })

module.exports = router;