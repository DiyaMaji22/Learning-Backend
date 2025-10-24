const fs=require('fs');
const zlib= require('zlib');


const readstream=fs.createReadStream('example.txt');
const writestream=fs.createWriteStream('example.txt.gz');


const gzip=zlib.createGzip();

readstream.pipe(gzip).pipe(writestream);

writestream.on('finish',()=>{
    console.log("File successfully compressed");
})


