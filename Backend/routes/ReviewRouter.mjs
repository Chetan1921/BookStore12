import express from 'express';
import path from 'path';
const Reviewrouter = express.Router();
import { createReview, getAllReviews } from '../controller/Reviewcontroller.mjs';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

Reviewrouter.post('/review', upload.single('image'),createReview);
Reviewrouter.get('/review',getAllReviews);

export default  Reviewrouter;
