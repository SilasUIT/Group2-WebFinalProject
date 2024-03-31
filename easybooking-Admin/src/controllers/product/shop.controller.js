class shopController{
    getAll=async(req,res)=>{
       return res.render('shop/view');
    }
    getForm=async(req,res)=>{
        return res.render('shop/detail');
    }
}
module.exports=new shopController();