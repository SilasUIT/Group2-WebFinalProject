const express = require('express');
const contractController = require('../../../controllers/product/contract.controller');
const router = express.Router();
router.get('/', contractController.getAll);
router.get('/detail', contractController.getForm);
module.exports = router;