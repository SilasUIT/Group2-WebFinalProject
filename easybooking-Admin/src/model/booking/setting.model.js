const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="setting";

const social=new Schema({
    facebook:URLString,
    twitter:URLString,
    instagram:URLString,
    youtube:URLString,
});

const newSchema=new Schema({
   script:{
         type:String,
         required:true,
    },
   email:{
        type:emailAddress,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    Social:{
        type:[social],
        default:[],
        required:false,
    },
    logo:{
        type:String,
        required:true,
    },
    icon:{
        type:String,
        required:true,
    },

},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);