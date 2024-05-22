const express = require('express');
const blogController = require('../../../controllers/product/blog.controller');
const router = express.Router();

const {catchAsync}=require('../../../apps/utils/catchAsync');

router.get('/', catchAsync(blogController.getAll));
router.get('/blognew', catchAsync(blogController.getForm));
router.get('/blogdetail', catchAsync(blogController.getDetail));
module.exports = router;