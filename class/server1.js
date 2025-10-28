const http=require('http');
const { json } = require('stream/consumers');
const server=http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'application/json'});
    const data={
        name:"Pikachu",
        type:"Lightning"
    }
    res.end(JSON.stringify(data));
})
server.listen(3000,(req,res)=>{
    console.log("The server is running");
})