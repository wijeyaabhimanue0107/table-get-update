const invoiceModel = require('../models/bookingListInfoTypeModel');

exports.getBookingListInfoType = async (req, res) => {
    try {
        const data = await invoiceModel.find({});
        res.status(200).json({
            data,
            message: "success",
            status: "1000",
            resType: 0,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message ? error.message : 'Failed to get invoice info list',
            status: "1000",
            resType: 0,
        });
    }
};