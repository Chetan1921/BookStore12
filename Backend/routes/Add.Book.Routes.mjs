import express from 'express';

import { addcontroller } from '../controller/add.controller.mjs';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage: storage });
  
const AddBookRouter = express.Router();
AddBookRouter.post('/AddBook', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]),addcontroller)
export default AddBookRouter;