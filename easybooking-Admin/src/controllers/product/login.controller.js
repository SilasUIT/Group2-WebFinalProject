class loginController{
    getAll=async(req,res)=>{
       return res.render('product/login');
    }
}
module.exports=new loginController();