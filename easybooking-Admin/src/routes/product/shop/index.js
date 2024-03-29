const express = require('express');
const shopController = require('../../../controllers/product/shop.controller');
const router = express.Router();
router.get('/', shopController.getAll);
router.get('/detail', shopController.getForm);
module.exports = router;