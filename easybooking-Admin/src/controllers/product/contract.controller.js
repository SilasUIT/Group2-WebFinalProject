class contractController{
    getAll=async(req,res)=>{
       return res.render('product/profile/contract');
    }
    getForm=async(req,res)=>{
        return res.render('product/profile/contract/form');
    }
}
module.exports=new contractController();