const productmodel=require('../model/booking/product.model');
const settingmodel=require('../model/booking/setting.model');

class productservice{
    async getproducts(){
        return await productmodel.find({status: "active"});
    }
    async getsetting(){
        return await settingmodel.find();
    }
}

module.exports=new productservice();