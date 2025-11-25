const express=require('express');
const session=require('express-session');
const app=express();


app.use(session({

    secret:'my-secret-key',
    resave:false,
    saveUninitialized:true, 
    
}));

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the Home Page</h1>
        <form method="POST" action="/login">
        <input type="text" name="username" placeholder="Username" required/><br/>
        <input type="password" name="password" placeholder="Password" required/><br/>
        <button type="submit">Login</button></form>`);
});


app.post('/login',(req,res)=>{

  const username=req.body.username;
  req.session.username=username;
  res.send(`User ${username} logged in. <a href="/login">Go to login page</a>`);  


})

app.get('/profile',(req,res)=>{

})