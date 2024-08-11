import express from 'express';
import { Contact } from '../model/Contact.model.mjs';
import { Contactus } from '../controller/Contact.Controller.mjs';
const Contactrouter=express.Router();
Contactrouter.post('/Contact',Contactus);
export default Contactrouter;

