var express = require('express');
var router = express.Router();
const appCtrl = require('../controllers/appController')

router.get('/', appCtrl.index)

router.get('/newask', appCtrl.createAsk)
router.get('/listasks', appCtrl.listAsks)
module.exports = router;