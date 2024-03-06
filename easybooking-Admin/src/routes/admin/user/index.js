const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/admin/user.controller')

router.get('' , userController.getAll);


module.exports = router;