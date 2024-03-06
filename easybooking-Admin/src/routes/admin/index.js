const express = require('express');
const adminService=require('../../services/admin.service');
const router = express.Router();


router.use((req,res,next)=>{
    res.locals.layout='admin';
    next();
})
router.use(async(req,res,next)=>{
    res.locals.listcategory=await adminService.getAllcategory();
    next();
})

router.use(async(req,res,next)=>{
    res.locals.listcategoryproduct=await adminService.getAllcategoryProduct();
    next();
})

router.use('/' , require('./dashboard'));
router.use('/news' , require('./news'));
router.use('/category',require('./category'));
router.use('/product',require('./product'));
router.use('/productcategory',require('./productcategory'));
router.use('/user',require('./user'));
module.exports = router;