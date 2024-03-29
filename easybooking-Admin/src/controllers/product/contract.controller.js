class contractController{
    getAll=async(req,res)=>{
       return res.render('product/profile/contract');
    }
}
module.exports=new contractController();