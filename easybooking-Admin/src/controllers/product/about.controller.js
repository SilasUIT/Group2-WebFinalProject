class aboutController{
    getAll=async(req,res)=>{
       return res.render('product/about');
    }
}
module.exports=new aboutController();