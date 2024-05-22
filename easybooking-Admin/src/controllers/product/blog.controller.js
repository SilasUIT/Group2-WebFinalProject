class blogController{
    getAll=async(req,res)=>{
       return res.render('blog/main');
    }
    getForm=async(req,res)=>{
        return res.render('blog/blognew');
     }
     getDetail=async(req,res)=>{
        return res.render('blog/blogdetail');
     }
}
module.exports=new blogController();