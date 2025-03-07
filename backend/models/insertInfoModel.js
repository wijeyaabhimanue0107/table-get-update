const mongoose = require("mongoose");

var insertSchema = new mongoose.Schema({
    additionalInfoTypeId: Number,
    additionalInfoTypeName: String,
    customerAppEnabled: Boolean,
    approvalRequired: Boolean,
    driverAppEnabled: Boolean,
    bookingListEnabled: Boolean,
});

const Userdb = mongoose.model('Userdb', insertSchema)
module.exports = Userdb;