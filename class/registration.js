const express=require('express');
const { fstat } = require('fs');
const app=express();
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{

    res.send(
        `<form action="/submit" method="post">
            <h1>Name:</h1>
            <input type="text" name="name" placeholder="Enter Your Name"/>
            <h1>Roll No:</h1>
            <input type="text" name="rollno" placeholder="Enter Your roll no"/>
            <h1>Department: </h1>
            <input type="text" name="department" placeholder="Enter your Department"/>
            <h1>Section:-</h1>
            <input type="text" name="section" placeholder="Enter Your Section"/>
            <h1>Subject:-</h1>
            <input type="text" name="subject" placeholder="Enter Your Subject"/>      
            <h1>Address:-</h1>
            <input type="text" name="address" placeholder="Enter Your Adress"/>
            <button>Submit</button>

        </form>`
    )
})

app.post('/submit',(req,res)=>{
    const name=req.body.name;
    const rollno=req.body.rollno;
    const department=req.body.department;
    const section=req.body.section;
    const subject=req.body.subject;
    const address=req.body.address;
    
    const data= `Roll no: ${rollno} \n Name: ${name} \n Department: ${department} \n Section: ${section} \n Subject: ${subject} \n Address: ${address}`;
    fs.appendFile('registration.txt',data,(err)=>{
        if(err) throw err;
        console.log("Data saved");
    });
    res.send("<h2>Registration Successful</h2>")
              
})
app.listen(3000,(req,res)=>{
    console.log("The server is running on the port 3000")
})