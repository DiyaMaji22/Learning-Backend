 const fs=require("fs");


// synchrounous function 
//  fs.writeFileSync("./test.txt","Hey there");
  
// asynchronous function
 fs.writeFile("./test.txt","hello world",(err)=>{

 })

 const result=fs.readFileSync("./contacts.txt","utf-8");
 console.log(result);

 fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result)
    }
 })