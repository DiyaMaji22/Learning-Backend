const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Middleware 1 executed");
    next();
});
 
app.get('/',(req,res)=>{
    res.send("<h1>Hello from Home Page</h1>");
});
function checkUser(req,res,next){
    
    if(req.query.user==='admin'){
        console.log("Admin user verified");
        next();
    }
    else{
         res.status(401).send("<h2>Unauthorized User</h2>");
    }
}
app.get('/dashboard',checkUser,(req,res)=>{      
    });
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})  