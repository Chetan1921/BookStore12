import User from "../model/user.model.mjs";
import mongoose from "mongoose";


export const Signup=async(req,res)=>{
    const {name,email,password}=req.body;
    let user;
    try{
        user=await User.findOne({email});
        if(user)
        {
            console.log(user);
            return res.status(404).json({message:"user already exist"});
        }
       
        const newuser=new User({
           name:name,
           email:email,
           password:password
        })
        
       await newuser.save();
       return res.status(201).json({newuser});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message:"server error"});
    }
    
};
export const Login=async(req,res)=>{
    const {email,password}=req.body;
    let user;
    try{
        user= await User.findOne({email});
        if(!user)
        {
            return res.status(404).json({message:"user not found"});
        }
        
   
        if(password!==user.password)
        {
            return res.status(404).json({message:"inavalid Password"});
        }
        return res.status(200).json({message:"Login Succesfully",user});
        console.log(user);
    }
    catch(err)
    {
        console.log(err);
    }
}
