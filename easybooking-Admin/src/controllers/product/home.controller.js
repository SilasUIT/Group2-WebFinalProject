class homeController{
    getAll=async(req,res)=>{
       return res.render('home');
    }
}
module.exports=new homeController();