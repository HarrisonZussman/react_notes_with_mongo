const express = require("express");
const app = express();
app.use(express.json())

app.listen(5000,()=>{
    console.log("server started");
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;

    if(data == "Harrison"){
        res.send({status:"ok"})
    }
})