const express = require('express');
const router = express.Router();

router.use('/contract',require('./contract'));
router.use('/least',require('./least'));

module.exports = router;