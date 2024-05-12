const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    req.app.set('layout','admin');
    next();
});



router.use('/',require('./dashboard'));
router.use('/dashboard',require('./dashboard'));
router.use('/user',require('./user'));
router.use('/product',require('./product'));
router.use('/setting',require('./setting'));
// router.use('/contact',require('./contact'));    
// router.use('/contract',require('./contract'));
// router.use('/account',require('./account'));
// router.use('/least',require('./least'));
module.exports = router;
