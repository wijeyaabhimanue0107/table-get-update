const mongoose = require('mongoose');

const approvalSchema = new mongoose.Schema({
    additionalInfoApprovalId: Number,
    bookingId: String,
    driverName: String,
    driverEmail: String,
    driverPhone: String,
    additionalInfoTypeName: String,
    proofPath: { type: [String], default: [] },
    uploadedOn: String,
    uploadedBy: String,
    description: String,
    approvalStatus: Number,
    count: Number
})

const approvalModel = mongoose.model('approval', approvalSchema, 'approval');

module.exports = approvalModel