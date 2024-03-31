const express = require('express');
const leastController = require('../../../controllers/product/least.controller');
const router = express.Router();
router.get('/', leastController.getAll);
router.get('/detail', leastController.getForm);
router.post('/',leastController.addOrUpdateItem);
module.exports = router;