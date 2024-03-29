class profileController{
    getAll=async(req,res)=>{
       return res.render('product/profile');
    }
}
module.exports=new profileController();