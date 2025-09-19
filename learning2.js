const express = require('express');
const app = express();
const userModel=require('./models/user')
const dbConnection=require('./config/db')

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

// app.get('/about', (req, res) => {
//     res.send("this is about page");
// });

app.post('/get-form-data',async(req,res)=>{
    
    const {username,email,password}=req.body;
    const newuser=await userModel.create({
        username:username,
        email:email,
        password:password
    })
    
    res.send("user recieved");
})


app.listen(8000, () => {
    console.log('Express server running on http://localhost:8000');
});