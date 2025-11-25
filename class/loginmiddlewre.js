const express=require('express');
const app=express();

function loginMiddleware(req,res,next){
    const user=req.query.user;
    const password=req.query.password;
    


}
app.get('login',loginMiddleware,(req,res)=>{
    res.send("<h1>Welcome to the Login Page</h1>");
});

app.listen(3000,(req,res)=>{
    console.log("Server running on port 3000");
})