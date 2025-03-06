const mongoose = require('mongoose');

const additionalInfoSchema = new mongoose.Schema({
    additionalInfoTypeId: Number,
    additionalInfoTypeName: String,
    systemPredefined: Boolean,
    linkedToInvoice: Boolean,
    customerAppEnabled: Boolean,
    approvalRequired: Boolean,
    driverAppEnabled: Boolean,
    bookingListEnabled: Boolean,
    deactivated: Boolean,
    count: Number,

})

const infoModel = mongoose.model('Info', additionalInfoSchema);

module.exports = infoModel