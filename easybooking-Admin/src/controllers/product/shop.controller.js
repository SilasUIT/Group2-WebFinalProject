const {
    getproduct,
    getproductbyid,
} = require('../../services/admin/product.service');
const {
    getuserbyid,
} = require('../../services/admin/user.service');

class shopController {
    getAll = async(req, res) => {
        let page = parseInt(req.query.page) || 1; 
        let limit = 9; 
        let skip = (page - 1) * limit; 
    
        let data = await getproduct('active').skip(skip).limit(limit).exec(); 
    
        console.log(`Data: ${JSON.stringify(data, null, 2)}`); // print the result
    
        let totalProducts = await getproduct('active').countDocuments(); 
        let pages = Math.ceil(totalProducts / limit); 
    
        return res.render('shop/view', { data, page: page, limit: limit, pages: pages, currentPage: page });
    }

    getForm = async(req, res) => {
        const { id, salerID } = req.params;
        if (id) {
            const data = await getproductbyid(id);
            console.log(data);
            const saler = await getuserbyid(salerID);
            return res.render('shop/detail', { data, saler });
        }
        return res.redirect('/shop');
    }
}

module.exports = new shopController();