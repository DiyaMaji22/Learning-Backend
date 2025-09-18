const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", 'ejs');

// app.use((req, res, next) => {
//     console.log("This is middleware");
//     const a=2;
//     const b=3;
//     console.log(a+b);
//     return next(); 
   
// });

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send("this is about page");
});

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("Data recieved");
})


app.listen(8000, () => {
    console.log('Express server running on http://localhost:8000');
});