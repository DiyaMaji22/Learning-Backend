const express=require('express')
const app=express();
app.get('/',(req,res)=>{
    
    const user={
        name:"Miku",
        age:23,
        course:"CSE",

    }
    res.json(user);

})
app.listen(3000,(req,res)=>{
    console.log("Server running");
})