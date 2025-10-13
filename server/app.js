const express=require('express');
const userrouter=require("./routes/userroute")
const app=express();
app.set("view engine","ejs");


app.get('/user',userrouter)


app.get('/',(req,res)=>{
    res.send("This is the page");
})

app.listen(3000,(req,res)=>{
    console.log("The Server is running on port 3000");
})
