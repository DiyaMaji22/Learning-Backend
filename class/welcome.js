const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(
        `<form method="get" action="/submit">
            <input type="text" name="name1" placeholder="write you name"/>
            <button>Submit</button>
        </form>`
    )
})
app.get('/submit',(req,res)=>{
    const name=req.query.name1;
    res.send(`Welcome,${name}`);
})
app.listen(3000,(res,req)=>{
    console.log("The server is running on the port 3000")
})