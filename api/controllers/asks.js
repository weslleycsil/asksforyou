const Ask = require('../models/asks');
const Asks = require('../repositories/asks');
const logger = require('../utils/logger');
const { v1: uuidv1 } = require('uuid');

// Criação de nova pergunta
exports.create = (req, res) => {
    var newAsk = new Ask(req.body);
    newAsk.uuid = uuidv1();
    newAsk.save()
    .then(ask => {
        //console.log(req.body);
        res.status(200).send('Save Successful');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Unable to save ask');
    });

};

// Listagem das perguntas
exports.list = (req, res) => {
    Asks.getAll()
    .then(asks => {
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
    Asks.getByUUID({uuid: req.params.uuid})
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        //console.error(err);
        res.status(422).send(err.errors);
    });
};

// Atualizar dados de uma pergunta
exports.put = (req, res) => {
    Asks.update({uuid: req.params.uuid}, body)
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        //console.error(err);
        res.status(422).send(err.errors);
    });
};

// Deletar uma pergunta
exports.delete = (req, res) => {
    Asks.delete({uuid: req.params.uuid})
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        //console.error(err);
        res.status(422).send(err.errors);
    });
};


// Get randomico de uma pergunta
exports.random = (req, res) => {
    Asks.getAll()
    .then(asks => {
        res.json(asks[((Math.random() * asks.length) | 0)]);
    })
    .catch(err => {
        //console.log(err);
        res.status(422).send('Unable to view asks');
    });
};