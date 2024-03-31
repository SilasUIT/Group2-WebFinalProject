const express = require('express');
const router = express.Router();
const {
    verifyToken,
}=require('../../helper/jwt.helper');

router.use((req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        const decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
        }
    }
    next();
});
router.use((req,res,next)=>{
    if(req.user){
        const user=req.user;
      //  console.log(user);
            if(user){
                res.locals.user=user;
            }else{
                res.locals.user=null;
            }
            next();
    }
    else{
        next();
    }
});

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