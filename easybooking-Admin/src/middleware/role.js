const ensureadmin =async (req, res, next) => {
    //console.log('role working');
    if (!req.user) {
         return res.redirect('/login'); 
    }
    if (req.user.role !== 'admin') {
        const message='you do not have permission to access this page';
        req.app.set('layout','errorPage');
       return res.render('errorPage',{message});
    }
    next();
}

module.exports = ensureadmin;