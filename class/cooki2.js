const express=require('express');
const session=require('cookie  -session');
const app=express();


app.use(session({
    name:"session",
    keys:['secret-key'],
    maxAge:5*60*1000
}))


app.get('/set-session',(req,res)=>{
    req.session.user='john_doe';
    req.session.city='New York';
    res.send(`Session has been set. <a href="/get-session">Go to get session</a>`);
})

app.get('/get-session',(req,res)=>{
    res.send(`User Session: ${req.session.user}, City Session: ${req.session.city}`);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

   
