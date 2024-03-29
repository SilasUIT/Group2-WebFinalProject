class contactController{
    getAll=async(req,res)=>{
       return res.render('product/contact');
    }
}
module.exports=new contactController();