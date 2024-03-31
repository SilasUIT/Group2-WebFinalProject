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

module.exports = router;    