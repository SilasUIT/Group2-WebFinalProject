const express = require('express');
const leastController = require('../../../controllers/product/least.controller');
const router = express.Router();
router.get('/', leastController.getAll);
module.exports = router;