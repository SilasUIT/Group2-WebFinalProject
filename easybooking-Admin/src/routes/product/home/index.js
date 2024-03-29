const express = require('express');
const homeController = require('../../../controllers/product/home.controller');
const router = express.Router();
router.get('/', homeController.getAll);
module.exports = router;