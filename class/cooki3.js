const express=require('express');
const session=require('cookie-session')
const app=express();
app.use(express.urlencoded({extended:true}));

app.use(session({
    name:"mysession",
    keys:["mysecretsession123"],
    maxAge:24*60*60*1000
}))

app.get("/register ",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})
app.get("/test",(req,res,next)=>{
    console.log("app.all is running");
    next();  
})


 
app.listen(3000)