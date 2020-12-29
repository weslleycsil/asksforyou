const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    language: {Type:String},
    text: {Type:String},
});

const Ask = new Schema ({
    uuid: { type: String, unique: true },
    revised: { type: Boolean },
    difficulty: { type: String },
    question: {type: Question},
});

module.exports = mongoose.model('Ask', Ask)