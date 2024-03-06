

const categoryModel=require('../model/category.model');
const categoryProductModel=require('../model/productcategory.model');
class adminService {
 

  async getAllcategory(){
     return await categoryModel.find({special:false}).select('name');
  }

  async getAllcategoryProduct(){
    return await categoryProductModel.find({special:false}).select('name');
  }
}

module.exports = new adminService();