const express = require('express');
const chatController = require('../../../controllers/product/chat.controller');
const router = express.Router();

const {catchAsync}=require('../../../apps/utils/catchAsync');

router.get('/home', catchAsync(chatController.getAll));
module.exports = router;