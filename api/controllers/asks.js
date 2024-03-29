const Ask = require('../models/asks');
const Quest = require('../models/questions');
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
        res.json(ask);
        //res.status(200).send('Save Successful');
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
    Asks.update(req.params.uuid, req.body)
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        console.error(err);
        res.status(422).send(err.errors);
    });
};

exports.revised = (req, res) => {
    Asks.revise(req.params.uuid, req.params.status)
    .then(ask => {
        res.json(ask);
    })
    .catch(err => {
        res.status(422).send(err.errors);
    });
};

//adicionar perguntas com idiomas
exports.addQuest = (req,res) => {
    var quest = new Quest(req.body)
    Asks.getByUUID(req.params.uuid)
    .then(ask => {
        let q = ask.questions.find(function(pergunta){
            return pergunta.language === quest.language
        })
        console.log(q)
        if(!q){
            ask.questions.push(quest);
            ask.save();
            res.status(200).send('Save Successful');
        } else {
            throw new Error('Idioma existente');
        }
    })
    .catch(err => {
        res.status(422).send(err.errors);
    });
};

exports.removeQuest = (req,res) => {
    Asks.getByUUID(req.params.uuid)
    .then(ask => {
        ask.questions.id(req.params.idquest).remove();
        ask.save();
        res.status(200).send('Remove Successful');
    })
    .catch(err => {
        res.status(422).send(err.errors);
    });
};

// Deletar uma pergunta
exports.delete = (req, res) => {
    Asks.delete(req.params.uuid)
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
    Asks.getByReview(true)
    .then(asks => {
        res.json(asks[((Math.random() * asks.length) | 0)]);
    })
    .catch(err => {
        //console.log(err);
        res.status(422).send('Unable to view ask');
    });
};
