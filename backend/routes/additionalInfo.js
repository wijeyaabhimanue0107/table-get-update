const express = require('express');
const router = express.Router();
const { getAdditionalInfo, getAdditionalInfoById, insertAdditionalInfo } = require('../controllers/infoController');
const { getApprovalInfo } = require('../controllers/approvalController');
const { getBookingListInfoType } = require('../controllers/bookingListInfoTypeController');

router.route('/additonal/info').post(getAdditionalInfo);
router.route('/get/additonal/info/detail').post(getAdditionalInfoById);
router.route('/insert/additonal/info/detail').post(insertAdditionalInfo);
router.route('/approval/list').post(getApprovalInfo);
router.route('/booking-list/info/list').post(getBookingListInfoType);

// router.route('/additional/info').post(insertAdditionalInfo);

module.exports = router;