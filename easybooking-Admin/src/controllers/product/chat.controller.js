class chatController{
    getAll=async(req,res)=>{
       return res.render('chat');
    }
}
module.exports=new chatController();