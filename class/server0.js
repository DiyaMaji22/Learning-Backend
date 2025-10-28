const http=require('http');

function getData(){
    let name="Miku";
    let age=15;
    return `The name of the user is ${name} and age is ${age}`;
}
http.createServer((req, res)=>{

    const data=getData();
    
    res.end(data);
}).listen(3000,(req, res)=>{
    console.log("The server is running");
})


