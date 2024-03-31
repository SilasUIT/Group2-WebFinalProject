const {
    updateuser,
    getuserbyid,
}=require('../../services/admin/user.service');
class profileController{
    getAll=async(req,res)=>{
      // const {_id}=req.user._id;
       console.log(req.user._id);
         const data=await getuserbyid(req.user._id);
         console.log(data);

         if(data){
                return res.render('profile',{data});
         }
         else{
                return res.redirect('/profile');
         }
    }
    updateprofile=async(req,res)=>{
        const {id}=req.params;
       console.log(req.body);

        try{
            await updateuser(id,req.body);
         //   res.flash('success','Profile Updated Successfully');
            return res.redirect('/profile');
        }
        catch(err){
         //   res.flash('error','Error Updating Profile');
            return res.redirect('/profile');
        }
    }
}
module.exports=new profileController();