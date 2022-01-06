const Asks = require('../repositories/asks');
const logger = require('../utils/logger');

exports.listAsks = (req,res) => {
    Asks.getAll()
    .then(asks =>{
        res.render('pages/listAsks', {asks: asks})
    })
    .catch( err => logger.error(err))
    
};

exports.createAsk = (req,res) => {
    res.render('pages/addAsks');
};

exports.index = (req,res) => {
    res.render('pages/home');
};

exports.editAsk = (req,res) => {
    Asks.getByUUID(req.params.uuid)
    .then(ask =>{
        console.log(ask)
        res.render('pages/editAsk', {ask: ask});
    })
    .catch( err => logger.error(err))
};

exports.getAsk = (req, res) => {
    Asks.getByReview(true)
    .then(asks => {
        res.render('pages/getAsk', {ask: asks[((Math.random() * asks.length) | 0)]})
    })
    .catch( err => logger.error(err))
};