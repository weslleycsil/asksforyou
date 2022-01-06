var express = require('express');
var router = express.Router();

var Asks = require('../controllers/asks');

router.get('/ask/random', Asks.random);

router.post('/ask/:uuid/addQuest', Asks.addQuest);

router.delete('/ask/:uuid/removeQuest/:idquest', Asks.removeQuest);

router.get('/ask/:uuid/revised/:status', Asks.revised);

router.get('/ask/:uuid', Asks.get);

router.delete('/ask/:uuid',Asks.delete);

router.put('/ask/:uuid', Asks.put);

router.get('/ask', Asks.list);

router.post('/ask', Asks.create);

router.get('/', (req, res) => {
    res.send('Hello World API!')
  })

module.exports = router;