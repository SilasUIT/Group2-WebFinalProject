const {
    addproduct,
    getproduct,
    getproductbyid,
    deteleproduct,
    updateproduct,
}= require('../../services/admin/product.service');
const mainName = 'least';
const linkprefix = `/${mainName}`;
const {imageHelper}=require('../../helper/image.helper');
const path = require('path');
class leastController{
    getAll=async(req,res)=>{
       return res.render('least');
    }
    getForm=async(req,res)=>{
        return res.render('least/form');
    }
    
    addOrUpdateItem = async (req, res) => {
        //console.log('flag 1');
        try {
            const productID = await addproduct(req.body);
            console.log(productID);
    
            const filePaths = {
                vrcertificate: path.join(req.files['vrcertificate'][0].filename),
                minsurance: path.join(req.files['minsurance'][0].filename),
                image: path.join(req.files['image'][0].filename),
            };
            console.log(filePaths);
    
            await updateproduct(productID, filePaths);
    
            if (!req.files.filepond || req.files.filepond.length === 0) {
                console.log("error list file");
                return res.redirect(`${linkprefix}`);
            }
    
           // console.log('flag 2');
            for (const file of req.files.filepond) {
                const nonfilePath = path.join(file.filename);
                console.log(nonfilePath);
                const newListImage = { Image: nonfilePath };
                const item = await getproductbyid(productID);
                item.List.push(newListImage);
                await item.save();
            }
            req.flash("success", "Tạo item thành công", false);
            res.redirect(`${linkprefix}`);
        } catch (error) {
            req.flash("warning", "Tạo item thất bại", false);
            console.error('Error processing form:', error);
            res.status(500).send('Error processing form');
        }
    };
}
module.exports=new leastController();