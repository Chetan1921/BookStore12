import Book from "../model/book.model.mjs";
import cloudinary from "../utils/Cloudanary.mjs";

export const addcontroller=async(req,res)=>{

        const { title, author, genre } = req.body;
        const image = req.files['image'] ? req.files['image'][0].path : null;
        const pdf = req.files['pdf'] ? req.files['pdf'][0].path : null;
       const imageurl = await cloudinary.uploader.upload(image, { folder: "book_store" });
        const newBook = new Book({
            title,
            author,
            genre,
            image: imageurl.secure_url,
            pdf
        });

        try {
            await newBook.save();
            res.status(201).json({newBook});
            console.log(`New book added: ${newBook}`);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    
}