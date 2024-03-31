const express = require('express');
const loginController = require('../../../controllers/product/login.controller');
const router = express.Router();
router.get('/', loginController.getAll);
router.get('/add', loginController.getForm);
router.post('/',loginController.login);
router.post('/add',loginController.register);
router.get('/out',loginController.logout);
module.exports = router;