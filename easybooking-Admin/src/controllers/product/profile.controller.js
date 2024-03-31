const {
    updateuser,
}=require('../../services/admin/user.service');
class profileController{
    getAll=async(req,res)=>{
       return res.render('profile');
    }
    updateprofile=async(req,res)=>{
        const {id}=req.params;
       console.log(req.body);
       return;

        try{
            await updateuser(id,req.body);
            res.flash('success','Profile Updated Successfully');
            return res.redirect('/profile');
        }
        catch(err){
            res.flash('error','Error Updating Profile');
            return res.redirect('/profile');
        }
    }
}
module.exports=new profileController();