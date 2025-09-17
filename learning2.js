const express=require('express');
const app=express();

app.set("view engine",'ejs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.send("this is about page ");
})
app.listen(8000, () => {
    console.log('Express server running on http://localhost:8000');
});
