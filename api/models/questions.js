const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    language: { type: String},
    text: { type: String},
    answer: { type: String},
});

module.exports = mongoose.model('Question', Question);