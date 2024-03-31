class contractController{
    getAll=async(req,res)=>{
       return res.render('contract/manager');
    }
    getForm=async(req,res)=>{
        return res.render('contract/detail');
    }
}
module.exports=new contractController();