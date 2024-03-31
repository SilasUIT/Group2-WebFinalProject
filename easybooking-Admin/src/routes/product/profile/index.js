const express = require('express');
const router = express.Router();
const profileController = require('../../../controllers/product/profile.controller');

router.get('/', profileController.getAll);
router.post('/update/:id', profileController.updateprofile);
module.exports = router;

