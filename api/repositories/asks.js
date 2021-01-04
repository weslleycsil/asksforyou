const Ask = require('../models/asks');
const logger = require('../utils/logger');

module.exports = new class AskRepository {

    getAll() {
        return Ask.find();
    }

    getByUUID(reqUuid) {
        return Ask.find({uuid: reqUuid});
    }

    create(ask) {
        return Ask.create(ask);
    }

    update(reqUuid, body) {
        return Ask.findOneAndUpdate({uuid: reqUuid}, body, { new: true});
    }

    delete(reqUuid) {
        return Ask.findOneAndRemove({uuid: reqUuid});
    }

    getByReview(revised) {
        return Ask.find({revised: revised});
    }
}