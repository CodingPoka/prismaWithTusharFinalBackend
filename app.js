

import express from "express";


const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.get("/about",(req,res)=>{
    res.send("About Page");
})







export default app;