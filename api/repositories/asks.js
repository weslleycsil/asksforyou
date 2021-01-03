const Asks = require('../models/asks');
const logger = require('../utils/logger');

module.exports = new class AskRepository {

    getAll() {
        return Asks.find();
    }

    getByUUID(reqUuid) {
        return Asks.find({uuid: reqUuid});
    }

    create(ask) {
        return Asks.create(ask);
    }

    update(reqUuid, body) {
        return Asks.findOneAndUpdate({uuid: reqUuid}, body, { new: true});
    }

    delete(reqUuid) {
        return Asks.findOneAndRemove({uuid: reqUuid});
    }

}