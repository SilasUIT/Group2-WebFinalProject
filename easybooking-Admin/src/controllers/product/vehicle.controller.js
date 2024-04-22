
const {
    addproduct,
    getproduct,
    getproductbyid,
    deleteproduct,
    updateproduct,
    getStatusCounts,
    getproductbysalerID,
}=require('../../services/admin/product.service');
const mainName = 'vehicle';
const linkprefix = `/${mainName}`;
class vehicleController{
    getAll=async(req,res)=>{
        const data=await getproductbysalerID(req.user._id);
       return res.render('vehicle',{data});
    }
    deleteItem = async (req, res, next) => {
        let { id } = req.params;
        const data=await getproductbysalerID(req.user._id);
        await deleteproduct(id);
       return res.redirect(`${linkprefix}`,{data});
      };
}
module.exports=new vehicleController();