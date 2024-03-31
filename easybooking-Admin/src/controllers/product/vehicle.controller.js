class vehicleController{
    getAll=async(req,res)=>{
       return res.render('vehicle');
    }
}
module.exports=new vehicleController();