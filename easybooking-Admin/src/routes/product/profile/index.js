const express = require('express');
const router = express.Router();
const profileController = require('../../../controllers/product/profile.controller');
router.use('/contract',require('../contract'));
router.use('/least',require('../least'));

router.get('/', profileController.getAll);
module.exports = router;

