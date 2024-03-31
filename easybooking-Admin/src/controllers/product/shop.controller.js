class shopController{
    getAll=async(req,res)=>{
       return res.render('shop');
    }
    getForm=async(req,res)=>{
        return res.render('product/shop/form');
    }
    getPage=async(req,res)=>{
        return res.render('product/shop/page');
    }
}
module.exports=new shopController();