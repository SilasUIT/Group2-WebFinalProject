const mongoose=require('mongoose');
const productmodel=require('../../model/booking/product.model');

const addproduct=async(body)=>{
    return await productmodel.create(body);
}
const getproduct=async(keyword)=>{
//    let query={};
//    console.log(keyword);
//    if(keyword){
//     query.$or=[
//         {
//             name: new RegExp(keyword, 'i'),
//         },
//         {
//             description: new RegExp(keyword, 'i'),
//         },
//     ];
//    }
   return await productmodel.find();
}
const getproductbyid=async(id)=>{
    return await productmodel.findById(id).exec();
}
const deteleproduct=async(id)=>{
    return await productmodel.deleteOne({_id: new mongoose.Types.ObjectId(id)});
}
const updateproduct=async(id,body)=>{
    return await productmodel.findByIdAndUpdate(
        {_id: new mongoose.Types.ObjectId(id)},
        {$set: body},
    );
}
const getStatusCounts = async () => {
    const items = await productmodel.find({});
    const statusCounts = {
      All: items.length,
      Active: items.filter((item) => item.status === 'active').length,
      Inactive: items.filter((item) => item.status === 'inactive').length,
    };
    return statusCounts;
  };
  module.exports={
        addproduct,
        getproduct,
        getproductbyid,
        deteleproduct,
        updateproduct,
        getStatusCounts,
  }