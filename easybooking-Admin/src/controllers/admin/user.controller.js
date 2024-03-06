class DashboardController {
    getAll = async ( req , res , next) => {
        res.render('admin/user');
    }
}

module.exports = new DashboardController();

