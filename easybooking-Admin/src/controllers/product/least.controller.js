class leastController{
    getAll=async(req,res)=>{
       return res.render('product/profile/least');
    }
}
module.exports=new leastController();