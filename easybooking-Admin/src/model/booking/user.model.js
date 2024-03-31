const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="user";

const list=new Schema({
    name:String,
    phone:String,
    email:String,
    birthday:Date,
    cccd:String,
    date:Date,
    place:String,
});
const location=new Schema({
    city:String,
    district:String,
    ward:String,
    Street:String,
})
const social=new Schema({
    facebook:String,
    instagram:String,
    twitter:String,
    chotot:String,
})

const newSchema=new Schema({
   username:{
         type:String,
         required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"],
    },
    userinformation:{
        type:[list],
        default:[],
    },
    avatar:{
        type:String,
    },
    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    address:{
        type:[location],
        default:[],
    },
    imagecccd:{
        type:String,
    },
    certificate:{
        type:String,
    },
    link:{
        type:[social],
        default:[],
    },
},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);