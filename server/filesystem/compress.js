// compressing a file
const fs=require('fs');
const zlib=require('zlib')

fs.writeFileSync("input.txt","hello world");
const input=fs.createReadStream("input.txt");
const output=fs.createWriteStream("input.txt.gz");

const gzip=zlib.createGzip();

input.pipe(gzip).pipe(output);

console.log("File compressed succesfully");