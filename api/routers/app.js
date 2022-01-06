var express = require('express');
var router = express.Router();
const appCtrl = require('../controllers/appController')

router.get('/', appCtrl.index)

router.get('/newask', appCtrl.createAsk)
router.get('/listasks', appCtrl.listAsks)
router.get('/getask', appCtrl.getAsk)
router.get('/editask/:uuid', appCtrl.editAsk)

module.exports = router;