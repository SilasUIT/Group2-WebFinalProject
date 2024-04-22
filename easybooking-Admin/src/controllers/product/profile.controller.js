const {
  updateuser,
  getuserbyid,
} = require('../../services/admin/user.service');
const {
  imageHelper,
} = require('../../helper/news.helper');
const path = require('path');

const fieldimage1s = 'avatar';
const mainName = 'profile';
const linkprefix = `/${mainName}`;
class profileController {
  getAll = async (req, res) => {
      const auth = await getuserbyid(req.user._id);
      console.log(auth);
     // return res.redirect('/home');
      if(auth){
        return res.render('profile', { auth: auth });
      }
     
  }

  updateprofile = async (req, res) => {
      const { id } = req.params;
      console.log(req.body);

      try {
          await updateuser(id, req.body);
          // res.flash('success','Profile Updated Successfully');
          return res.redirect('/profile');
      } catch (err) {
          // res.flash('error','Error Updating Profile');
          return res.redirect('/profile');
      }
  }

  imageUpload = async (req, res, next) => {
      console.log('image upload');
      const { id } = req.params;
      if (!id) {
          console.log('id not found');
          return res.redirect(`/profile`);
      }
    try{
        if(!req.files.imagecccd||req.files.imagecccd.length===0){
            console.log("error imagecccd file");
           } else{
            for(const file of req.files.imagecccd){
                const filepath=path.join(file.name);
                const newlist={Image:filepath};
                user.imagecccd.push(newlist);
                await user.save();
               }
           }
           if(!req.files.certificate||req.files.certificate.length===0){
            console.log("error certificate file");
           }else{
            for(const file of req.files.certificate){
                const filepath=path.join(file.name);
                const newlist={Image:filepath};
                user.certificate.push(newlist);
                await user.save();
               }
           }     
           return res.redirect(`/profile`);
    }catch(error){
        console.error('Error processing form:', error);
        return res.redirect(`/profile`);
    }
  };
}

module.exports = new profileController();
