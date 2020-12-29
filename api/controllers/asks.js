const asks = require('../models/asks');
const logger = require('../utils/logger');

// Criação de nova pergunta
exports.create = (req, res) => {
    var newAsk = new Ask(req.body);
    newAsk.save()
    .then(Ask => {
        //console.log(req.body);
        res.status(200).send('Save Successful');
    })
    .catch(err => {
        //console.log(err);
        res.status(500).send('Unable to save ask');
    });

};

// Listagem das perguntas
exports.list = (req, res) => {
    asks.find()
    .then(Ask => {
        //console.log(req.body);
        res.json(asks);
    })
    .catch(err => {
        //console.log(err);
        res.status(422).send('Unable to view asks');
    });

};

// Busca pelo uuid de uma pergunta
exports.get = (req, res) => {
    asks.find({uuid: req.params.uuid})
    .then(Ask => {
        res.json(Ask);
    })
    .catch(err => {
        console.error(err);
        res.status(422).send(err.errors);
    });
};