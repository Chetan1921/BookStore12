import express from "express";
import { Signup ,Login} from "../controller/user.controller.mjs";
const userrouter=express.Router();
userrouter.post("/signup",Signup);
userrouter.post("/login",Login);
export default  userrouter;