class loginController{
    getAll=async(req,res)=>{
       return res.render('product/login');
    }
    getForm=async(req,res)=>{
        return res.render('product/login/form');
    }
}
module.exports=new loginController();