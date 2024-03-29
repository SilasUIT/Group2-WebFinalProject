class shopController{
    getAll=async(req,res)=>{
       return res.render('product/shop');
    }
}
module.exports=new shopController();