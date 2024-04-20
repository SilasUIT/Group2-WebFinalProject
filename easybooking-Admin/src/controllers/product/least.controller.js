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
      try {
          imageHelper(['vrcertificate', 'minsurance'])(req, res, async (err) => {
              if (err) {
                  console.error('Error processing form:', err);
                  return res.status(500).send('Error processing form');
              }
  
              const productID = await addproduct(req.body);
              console.log(productID);
  
              const filePaths = {
                  vrcertificate: path.join(req.files['vrcertificate'][0].filename),
                  minsurance: path.join(req.files['minsurance'][0].filename),
              };
              console.log(filePaths);
  
              await updateproduct(productID, filePaths);
              res.redirect(`${linkprefix}`);
          });
      } catch (error) {
          console.error('Error processing form:', error);
          res.status(500).send('Error processing form');
      }
  };
}
module.exports=new leastController();