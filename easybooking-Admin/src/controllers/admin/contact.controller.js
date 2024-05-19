class contactController{
    getAll=async(req,res)=>{
       return res.render('admin/contact');
    }
    getForm=async(req,res)=>{
        return res.render('admin/contact/form');
    }
}
module.exports=new contactController();