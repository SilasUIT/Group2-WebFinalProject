const express = require('express');
const router = express.Router();
const settingController = require('../../../controllers/admin/setting.controller')

const {catchAsync}=require('../../../apps/utils/catchAsync');

router.get('/home' , catchAsync(settingController.gethome));
router.get('/blog' , catchAsync(settingController.getblog));
router.get('/about' , catchAsync(settingController.getabout));
router.get('/contact' , catchAsync(settingController.getcontact));
router.get('/rental' , catchAsync(settingController.getrental));

router.post('/addsettings',catchAsync(settingController.addOrUpdateItem));
module.exports = router;