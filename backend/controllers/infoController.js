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

//Insert Additional Info Detail API - /api/v1/insert/additonal/info/detail
exports.insertAdditionalInfo = async (req, res) => {
    console.log("Request Body:", req.body);
    const body = req.body;
    console.log(body,"www--->body");
    
    const additionalInfoTypeId = infoModel.length + 3;
    console.log(additionalInfoTypeId,"www--->additionalInfoTypeId");
    console.log(infoModel.length,"www--->length");
    
    // const additionalInfoTypeId = Number(body.increse((acc, item) => (acc + item.data.additionalInfoTypeId), acc++ ));
    // const additionalInfoTypeId = await infoModel.find({additionalInfoTypeId: req.body.additionalInfoTypeId})
    
    const user = new infoModel({
        // additionalInfoTypeId: additionalInfoTypeId,
        additionalInfoTypeId: additionalInfoTypeId,
        additionalInfoTypeName: req.body.additionalInfoTypeName,
        customerAppEnabled: req.body.customerAppEnabled,
        approvalRequired: req.body.approvalRequired,
        driverAppEnabled: req.body.driverAppEnabled,
        bookingListEnabled: req.body.bookingListEnabled,
        systemPredefined: true,
        linkedToInvoice: true,
        count:5
    }); 

    user.save()
        .then(data => {
            res.status(201).json({
                message: "success",
                data: data
            });
        })
        .catch(err => {
            console.error("Error saving data:", err);
            res.status(500).json({
                success: true,
                message: err.message || 'Some error occurred while creating a create operation'
            });
        });
};
