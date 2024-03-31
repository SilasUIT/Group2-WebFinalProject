class profileController{
    getAll=async(req,res)=>{
       return res.render('profile');
    }
}
module.exports=new profileController();