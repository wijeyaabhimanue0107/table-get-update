const approvalModel = require('../models/approvalModel');

exports.getApprovalInfo = async (req, res) => {
    try {
        const data = await approvalModel.find({});
        res.status(200).json({
            data,
            message: "success",
            status: "1000",
            resType: 0,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message ? error.message : 'Failed to get approval info list',
            status: "1000",
            resType: 0,
        });
    }
};