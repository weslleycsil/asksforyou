const Asks = require('../repositories/asks');
const logger = require('../utils/logger');

exports.listAsks = (req,res) => {
    Asks.getAll()
    .then(asks =>{
        res.render('pages/listAsks', {asks: asks})
    })
    .catch( err => logger.error(err))
    
};


exports.editAsk = (req,res) => {
    Asks.getByUUID(req.params.uuid)
    .then(ask =>{
        console.log(ask)
        res.render('pages/editAsk', {ask: ask});
    })
    .catch( err => logger.error(err))
};
