const Ask = require('../repositories/asks');
const logger = require('../utils/logger');

exports.listAsks = (req,res) => {
    Ask.getAll()
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
}