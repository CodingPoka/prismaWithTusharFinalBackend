

import express from "express";

import UserRouter from "./router/user.Router.js";


const app=express();


//middleware should be frist otherwise it will give error
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//after middleare we will use router
app.use("/api/user", UserRouter);


app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.get("/about",(req,res)=>{
    res.send("About Page");
})







export default app;