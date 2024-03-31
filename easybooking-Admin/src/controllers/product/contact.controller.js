class contactController{
    getAll=async(req,res)=>{
       return res.render('contact');
    }
}
module.exports=new contactController();