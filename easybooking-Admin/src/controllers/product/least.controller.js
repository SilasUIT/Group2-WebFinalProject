class leastController{
    getAll=async(req,res)=>{
       return res.render('least');
    }
    getForm=async(req,res)=>{
        return res.render('least/form');
    }
}
module.exports=new leastController();