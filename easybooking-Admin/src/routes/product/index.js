const express = require('express');
const router = express.Router();

router.use('/home',(req,res,next)=>{
    req.app.set('layout','home');
    next();
},require('./home'));

router.use('/about',(req,res,next)=>{
    req.app.set('layout','about');
    next();
},require('./about'));

router.use('/contact',(req,res,next)=>{
    req.app.set('layout','contact');
    next();
},require('./contact'));

router.use('/login',(req, res, next)=>{
    req.app.set('layout','login');
    next();
},require('./login'));

router.use('/profile',(req,res,next)=>{
    req.app.set('layout','profile');
    next();
},require('./profile'));

router.use('/shop',(req,res,next)=>{
    req.app.set('layout','shop');
    next();
},require('./shop'));
router.use('/contract',(req,res,next)=>{
    req.app.set('layout','contract');
    next();
},require('./contract'));
router.use('/vehicle',(req,res,next)=>{
    req.app.set('layout','vehicle');
    next();
},require('./vehicle'));
router.use('/least',(req,res,next)=>{
    req.app.set('layout','least');
    next();
},require('./least'));
module.exports = router;    