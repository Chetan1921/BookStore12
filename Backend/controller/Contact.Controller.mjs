import { Contact } from "../model/Contact.model.mjs";
export const Contactus=async(req,res)=>{
    const {name,email,message}=req.body;
    try{
        const newContact=new Contact({
            name:name,
            email:email,
            message:message
        })
        await newContact.save();
        return res.status(201).json({message:"Thanks For Contacting us We will get back to you soon" });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:err.message});
    }
}