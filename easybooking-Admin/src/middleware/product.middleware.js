const productservice=require('../services/booking.service');
module.exports= async(req,res,next)=>{
    Promise.all([
        productservice.getproducts(),
        productservice.getsetting(),
    ]).then(([listProducts,listsetting])=>{
        res.locals.listProducts = listProducts;
         //console.log(listProducts.length);
         res.locals.listsetting = listsetting;
         //console.log(listsetting.length);
        next();
    }).catch((err)=>{
        next(err);
    })
}