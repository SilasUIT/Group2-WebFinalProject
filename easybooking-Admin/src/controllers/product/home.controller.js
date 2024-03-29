class homeController{
    getAll=async(req,res)=>{
       return res.render('product/home');
    }
}
module.exports=new homeController();