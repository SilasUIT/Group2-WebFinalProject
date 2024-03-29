class leastController{
    getAll=async(req,res)=>{
       return res.render('product/profile/least');
    }
    getForm=async(req,res)=>{
        return res.render('product/profile/least/form');
    }
}
module.exports=new leastController();