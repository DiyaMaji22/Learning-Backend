const express = require('express');
const app = express();

app.set("view engine", 'ejs');

// app.use((req, res, next) => {
//     console.log("This is middleware");
//     const a=2;
//     const b=3;
//     console.log(a+b);
//     return next(); 
   
// });

app.get('/',(req,res,next)=>{
    console.log("this is the middleware running");
    return next();
}, (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send("this is about page");
});

app.listen(8000, () => {
    console.log('Express server running on http://localhost:8000');
});