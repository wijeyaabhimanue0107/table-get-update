// const addInfoModel = require('../models/insertInfoModel');
const infoModel = require('../models/infoModel');
const Userdb = require('../models/insertInfoModel');

//Get Info API - /api/v1/additonal/info
exports.getAdditionalInfo = async (req, res) => {
    try {
        const data = await infoModel.find({})
        res.status(200).json({
            data,
            message: "success",
            status: "1000",
            resType: 0,
        });
        console.log(req.body, "DATA");
    }
    catch (error) {
        res.status(404).json({
            message: error.message ? error.message : 'Failed to get additional info list',
            status: "1000",
            resType: 0,
        });
    }
}

//Get Additional Info Detail by Id API - /api/v1/get/additonal/info/detail
exports.getAdditionalInfoById = async (req, res) => {
    try {
        console.log(req.body, "REQ");
        const data = await infoModel.findOne({additionalInfoTypeId: req.body.additionalInfoTypeId})

        res.status(200).json({
            data,
            message: "success",
            status: "1000",
            resType: 0,
        });
        console.log(req.body, "DATA");
    }
    catch (error) {
        res.status(404).json({
            message: error.message ? error.message : 'Failed to get additional info',
            status: "1000",
            resType: 0,
        });
    }
}

exports.insertAdditionalInfo = (req, res) => {
    //new info
    const user = new Userdb({
        additionalInfoTypeId: req.body.additionalInfoTypeId,
        additionalInfoTypeName: req.body.additionalInfoTypeName,
        customerAppEnabled: req.body.customerAppEnabled,
        approvalRequired: req.body.approvalRequired,
        driverAppEnabled: req.body.driverAppEnabled,
        bookingListEnabled: req.body.bookingListEnabled
    })
    //save info in database
    user
        .save(user)
        .then(data => {
            // res.send(data);
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'some error occurred while creating a create operation' });
        });
}
