import mongoose from "mongoose";

const processSchema=new mongoose.Schema({
    sectionName:{
        type:String,
        required:true,
        enum:["process"]
    },
    data:{
        number:{type:String, required:true},
        title:{type:String,required:true},
        description:{type:String,required:true},
        image:{type:String,required:true}
    }
},{timestamps:true});

const Process = mongoose.model("Process",processSchema,"home");
export default Process;