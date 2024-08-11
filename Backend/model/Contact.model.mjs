import express from "express";
import mongoose from "mongoose";
const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        
    }
    ,
    message:{
        type:String,
        unique:true,
        
    }

})
export const Contact=mongoose.model("Contact",ContactSchema);