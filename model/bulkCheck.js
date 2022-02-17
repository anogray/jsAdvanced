const mongoose = require("mongoose");

const bulkSchema = new mongoose.Schema({
    symbol : {type : String },
    exchange : {type : String},
    logo : {type : String}
});

const bulkModel = mongoose.model('bulkCheck', bulkSchema);

module.exports = bulkModel;