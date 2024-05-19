const express = require('express');
const contactController = require('../../../controllers/admin/contact.controller');
const router = express.Router();

const {catchAsync}=require('../../../apps/utils/catchAsync');

router.get('/', catchAsync(contactController.getAll));
router.get('/sent',catchAsync(contactController.getForm));
module.exports = router;