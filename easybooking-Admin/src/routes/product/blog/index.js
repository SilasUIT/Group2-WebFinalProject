const express = require('express');
const blogController = require('../../../controllers/product/blog.controller');
const router = express.Router();

const {catchAsync}=require('../../../apps/utils/catchAsync');

router.get('/', catchAsync(blogController.getAll));
module.exports = router;