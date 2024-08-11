import Review from "../model/Review.mjs";
// Create a new review
import multer from "multer";
import cloudinary from "../utils/Cloudanary.mjs";
export const createReview = async (req, res) => {
  try {
    const { name, text } = req.body;
    const imageurl = req.file ? req.file.path : null; // Assuming you're using multer for image uploads
    const result=await cloudinary.uploader.upload(imageurl,
      {
        folder: 'reviewsImage'
      }
    )
    const review = new Review({ 
      name,
      text,
      image : result.secure_url
    });
    await review.save();

    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add review' });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
};
