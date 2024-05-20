class blogController{
    getAll=async(req,res)=>{
       return res.render('blog');
    }
}
module.exports=new blogController();