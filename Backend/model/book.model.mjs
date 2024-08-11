import mongoose from "mongoose";
const bookschema= new mongoose.Schema({
   title:String,
   author:String,
   genre:String,
   image:String,
   pdf:String
    
})
const Book=mongoose.model("Book",bookschema);
export default Book;



