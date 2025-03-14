const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
        tripReservationId: Number,
        additionalInfoTypeId: Number,
        addtionalInfoId: Number,
        additionalInfoTypeName: String,
        proofPath: { type: [String], default: [] },
        uploadedOn: String,
        uploadedBy: String,
        description: String,
        count: Number,
        approvalStatus: Number

})

const invoiceModel = mongoose.model('invoice', invoiceSchema, 'invoice');

module.exports = invoiceModel