const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();
app.use(cookieParser());

app.get('/setcookie',(req,res)=>{

    res.cookie('username','john_doe',{maxAge:900000});
    res.cookie('username2','miku',{maxAge:900000});

    res.send('Cookie has been set');
})  

app.get('/getcookie',(req,res)=>{

    res.send(`User Cookie: ${req.cookies.username}, User2 Cookie: ${req.cookies.username2}`);
   
})

app.get('/clearcookie',(req,res)=>{
    res.clearCookie('username');
    res.clearCookie('username2');
    res.send('Cookie has been cleared');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})