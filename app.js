const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongodb = require("mongodb")
app.use(express.json())


const mongoUrl="mongodb+srv://harrisonfzussman:vHLD0zvGZJHXJ0vC@cluster0.s7nt6yt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))

app.listen(5000,()=>{
    console.log("server started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;

    try{
        if(data == "Harrison"){
            res.send({status:"ok"})
        }else{
            res.send({status:"User Not Found"})
        }
        
    }catch(error){
        res.send({status:"Something went wrong try again"}) 
    }
});
