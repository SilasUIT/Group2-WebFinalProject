const productservice=require('../services/booking.service');
module.exports= async(req,res,next)=>{
    Promise.all([
        productservice.getproducts(),
    ]).then(([listProducts,])=>{
        res.locals.listProducts = listProducts;
        next();
    }).catch((err)=>{
        next(err);
    })
}