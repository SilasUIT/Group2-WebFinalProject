const express = require('express');
const vehicleController = require('../../../controllers/product/vehicle.controller');
const router = express.Router();
router.get('/', vehicleController.getAll);
router.get('/delete/:id', vehicleController.deleteItem);
module.exports = router;