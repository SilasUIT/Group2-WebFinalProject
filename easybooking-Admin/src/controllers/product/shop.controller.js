class shopController{
    getAll=async(req,res)=>{
       return res.render('product/shop');
    }
    getForm=async(req,res)=>{
        return res.render('product/shop/form');
    }
}
module.exports=new shopController();