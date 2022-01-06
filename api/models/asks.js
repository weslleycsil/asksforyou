const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    language: { type: String},
    text: { type: String},
    answer: { type: String},
});

const Ask = new Schema ({
    uuid: { type: String, unique: true },
    revised: { type: Boolean, default: false },
    difficulty: { type: String },
    questions: { type: [Question] },
});

module.exports = mongoose.model('Ask', Ask)