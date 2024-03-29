const express = require('express');
const loginController = require('../../../controllers/product/login.controller');
const router = express.Router();
router.get('/', loginController.getAll);
module.exports = router;