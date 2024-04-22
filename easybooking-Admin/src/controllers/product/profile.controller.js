const {
  updateuser,
  getuserbyid,
} = require('../../services/admin/user.service');
const {
  imageHelper,
} = require('../../helper/news.helper');
const path = require('path');

const fieldimage1s = 'avatar';

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

      try {
          // Call imageHelper with the dynamic field name
          imageHelper(fieldimage1s)(req, res, async (err) => {
              if (err) {
                  console.error('Error processing form:', err);
                  return res.redirect(`/profile`);
              }

              const filePath = path.join(req.file.filename);
              req.body.file = filePath;
              console.log(filePath);
              await updateuser(id, { avatar: filePath });
              return res.redirect(`/profile`);
          });
      } catch (error) {
          console.error('Error processing form:', error);
          return res.redirect(`/profile`);
      }
  };
}

module.exports = new profileController();
