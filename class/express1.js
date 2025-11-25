const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    if(req.query.num1 && req.query.num2){
        res.send(`${Number(req.query.num1) + Number(req.query.num2)}`);
        return;
    }
    res.send(
        `<form>
            <input type="number" name="num1" placeholder="First Number" required/>
            <input type="number" name="num2" placeholder="Second Number" required/>
            <button type="submit">ADD</button>
        </form>`
    )

})

// app.get('/add',(req,res)=>{
//     const n1=Number(req.query.num1);
//     const n2=Number(req.query.num2);
//     const sum=n1+n2;
//     res.send(`<h2>Result: ${sum}</h2>`)
// })

app.listen(3000,(req,res)=>{
    console.log("The server is working on port 3000")
})