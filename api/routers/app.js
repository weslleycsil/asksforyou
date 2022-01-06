var express = require('express');
var router = express.Router();
const appCtrl = require('../controllers/appController')

router.get('/listasks', appCtrl.listAsks)
router.get('/editask/:uuid', appCtrl.editAsk)

module.exports = router;