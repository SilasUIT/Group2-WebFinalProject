const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const COLLECTION_NAME="product";

const list=new Schema({
    brand:String,
    frame:String,
    machine:String,
    year:Number,
    odo:Number,
    license:String,
}); 

const newSchema=new Schema({
   name:{
       type:String,
       required:true,
   },
   description:{
       type:String,
   },
   location:{
       type:String,
   },
   productinformation:{
    type:[list],
    default:[],
   },
   ordering:{
       type:Number,
       min:1,
       default:1,
   },
   createdAt:{
       type:Date,
       default:Date.now,
   },
   salerID:{
       type:String,
       required:true,
   },
   image:{
       type:String,
   },
    status:{
         type:String,
         default:"inactive",
         enum:["active","inactive"],
    },
},
{
    timestamps:true,
    collection:COLLECTION_NAME,
}
);
module.exports=mongoose.model(COLLECTION_NAME,newSchema);