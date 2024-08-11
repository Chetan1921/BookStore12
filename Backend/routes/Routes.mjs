import express from "express";

import getallbook from "../controller/book.controller.mjs";
import Book from "../model/book.model.mjs";

const router = express.Router();
router.get("/", getallbook);

// Search books by title, author, or genre
router.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const books = await Book.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } },
                { genre: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error searching for books' });
    }
});
export default router;
