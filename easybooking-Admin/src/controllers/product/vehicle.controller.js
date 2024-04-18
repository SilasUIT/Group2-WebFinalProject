const {
    getproductbysalerID
}=require('../../services/admin/product.service');
class vehicleController{
    getAll=async(req,res)=>{
        const data=await getproductbysalerID(req.user._id);
       return res.render('vehicle',{data});
    }
}
module.exports=new vehicleController();