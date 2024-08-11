import Book from "../model/book.model.mjs";

// Get all books;

  const getallbook=async(req,res)=>{
    let books;
    try{
        books=await Book.find();

    }
    catch(err)
    {
        console.log(err);
    }
    if(!books)
    {
        return res.status(404).json({message:"No books found"});
    }
    return res.status(200).json({books});

};
export default getallbook;

// search book by title

