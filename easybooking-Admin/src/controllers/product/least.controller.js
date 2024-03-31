const {
    addproduct,
    getproduct,
    getproductbyid,
    deteleproduct,
    updateproduct,
}= require('../../services/admin/product.service');
const mainName = 'least';
const linkprefix = `/${mainName}`;
class leastController{
    getAll=async(req,res)=>{
       return res.render('least');
    }
    getForm=async(req,res)=>{
        return res.render('least/form');
    }
    addOrUpdateItem = async (req, res) => {
        const { id } = req.body;
        console.table(req.body);
        return;
             try {
          if (id) {
            await updateproduct(id, req.body);
            req.flash("success", "Update item thành công", false);
          } else {
            await addproduct(req.body);
            req.flash("success", "Add item thành công", false);
          }
          res.redirect(`${linkprefix}`);
        } catch (error) {
          console.error('Error processing form:', error);
          req.flash("danger", "An error occurred", false);
          res.redirect(`${linkprefix}`);
        }
      };
}
module.exports=new leastController();