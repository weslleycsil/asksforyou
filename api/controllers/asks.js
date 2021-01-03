const Ask = require('../models/asks');
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
    Ask.find()
    .then(ask => {
        //console.log(req.body);
        res.json(ask);
    })
    .catch(err => {
        //console.log(err);
        res.status(422).send('Unable to view asks');
    });

};

// Busca pelo uuid de uma pergunta
exports.get = (req, res) => {
    Ask.find({uuid: req.params.uuid})
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        console.error(err);
        res.status(422).send(err.errors);
    });
};