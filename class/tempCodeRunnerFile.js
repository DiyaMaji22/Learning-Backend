const http=require('http');

// const server=http.createServer(function(req,res){


//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end("hello this is node js");
// })
// server.listen(3000,(req,res)=>{
//     console.log("Server is connected");
// })


http.createServer((req,res)=>{
    let mul=1;
   

    function isEven(num){
        if(num%2==0){
            return `The num is even .The number is ${num}`;
        }
        else{
            return `The number is odd and is ${num}`;
        }
    }
    function factorial(num){
        mul = 1;
        for(let i=1;i<=num;i++){
            mul=mul*i;
        }
        return `the factorial is ${mul}`;
    }
    const result = isEven(8) + '\n' + factorial(5);
    res.end(result);
}).listen(3000,()=>{
    console.log("The server is running on the port 3000");
})

