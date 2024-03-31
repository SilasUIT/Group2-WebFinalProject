const {
    getproduct,
    getproductbyid,
}=require('../../services/admin/product.service');
const {
    getuserbyid,
}=require('../../services/admin/user.service');
class shopController{
    getAll=async(req,res)=>{
        const data=await getproduct();
       return res.render('shop/view',{data});
    }
    getForm=async(req,res)=>{
        const{id, salerID}=req.params;
        if(id){
            const data=await getproductbyid(id);
            console.log(data);
            const saler=await getuserbyid(salerID);
            return res.render('shop/detail',{data,saler});
        }
        return res.redirect('/shop');
    }
}
module.exports=new shopController();