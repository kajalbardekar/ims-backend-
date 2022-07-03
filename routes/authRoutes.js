const express=require("express");
const authrouter=express.Router();
const{signUp,signIn}=require("../controllers/authController")
const {encryptPassword}=require("../middlewares/authMiddleware")


authrouter.post("/signup",encryptPassword,signUp);
authrouter.post("/signin",signIn);


module.exports=authrouter;
