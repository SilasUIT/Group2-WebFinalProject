const{
    login : loginService,
    register: registerService,
}=require('../../services/booking/login.service');
const passport = require('passport');
class loginController{
    getAll=async(req,res)=>{
       return res.render('login/formlogin');
    }
    getForm=async(req,res)=>{
        return res.render('login/formregister');
    }
    register = async (req, res, next) => {
        try {
            console.table(req.body);
            
           const user= await registerService(req.body);
           req.login(user, (err) => {
            if (err) {
                req.flash('error', err.message);
                return res.render('login/formlogin');
            }
            return res.render('login/formlogin');
        });
        } catch (err) {
            req.flash('error', err.message);
            return res.render('login/formregister');
        }
    };
    
    login = async (req, res, next) => {
        try {
            passport.authenticate('local', (err, user) => {
                if (err) {
                    console.log('error 1');
                    req.flash('error', err.message);
                    return res.render('login/formlogin');
                }
                if (!user) {
                    req.flash('error', 'Invalid username or password');
                    return res.redirect('/login');
                }
                req.login(user, async (err) => {
                    if (err) {
                        console.log('error 2');
                        req.flash('error', err.message);
                        return res.render('login/formlogin');
                    }
                    try {
                    
                        const token = await loginService(req, req.body);
                      //  console.log(req.body);
                        res.cookie('jwt', token, { httpOnly: true });
                      //  console.log(token);
                        return res.redirect('/home');
                    } catch (error) {
                        console.log('error 4');
                        req.flash('error', error.message);
                        return res.render('login/formlogin');
                    }
                });
            })(req, res, next);
        } catch (err) {
            req.flash('error', err.message);
            return res.render('/login');
        }
    };
    logout = async (req, res, next) => {
        try {
            res.clearCookie('jwt');
            req.logout((err) => {
                if (err) {
                    return next(err); 
                }
                return res.redirect('/home');
            });
        } catch (err) {
            next(err);
        }
    };
}
module.exports=new loginController();