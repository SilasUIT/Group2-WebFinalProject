const express = require('express');
const vehicleController = require('../../../controllers/product/vehicle.controller');
const router = express.Router();
router.get('/', vehicleController.getAll);

module.exports = router;