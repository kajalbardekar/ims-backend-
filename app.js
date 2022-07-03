const express = require("express");
const app=express();
const authrouter=require("./routes/authRoutes");
app.use(express.json());
app.use("/auth",authrouter);



module.exports=app;