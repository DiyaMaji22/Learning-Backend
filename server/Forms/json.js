const express=require('express');
const fs=require('fs');
const { json } = require('stream/consumers');
const app=express();


app.use(express.urlencoded({extended:true}));

const File='data1.json';
fs.writeFileSync(File,JSON.stringify([]));


app.get('/',(req,res)=>{
    const data=JSON.parse(fs.readFileSync(File,"utf8"));

    let table=`
    <table border="1" cellpadding="10">
        <tr>
            <th>name</th>
            <th>rollno</th>
            <th>Department</th>

        </tr>
        ${data.map(
            (item)=>`
            <tr>
            <td>${item.name}</td>
            <td>${item.rollno}</td>
            <td>${item.department}</td>
            </tr>`
        )
        .join("")}
    </table>`;
    res.send(`
        <h1>Student Registration</h1>

        <form method="POST" action="/save">
            <label>Name:</label>
            <input type="text" name="name" required /><br><br>

            <label>Roll No:</label>
            <input type="text" name="rollno" required /><br><br>

            <label>Department:</label>
            <input type="text" name="department" required /><br><br>

            <button type="submit">Submit</button>
        </form>

        <hr>
        <h2>Saved Data</h2>

        ${table}
    `);
});
app.post("/save",(req,res)=>{
    const {name,rollno,department}=req.body;


    const data=JSON.parse(fs.readFileSync(File,"utf8"));

    data.push({name,rollno,department});

    fs.writeFileSync(File,JSON.stringify(data,null,2));
    res.redirect("/");

})
app.listen(3000,()=>{
    console.log("Server running at port 3000");
})