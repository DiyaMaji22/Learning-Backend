const fs=require('fs');
const zlib=require('zlib');

const input=fs.createReadStream('input.txt.gz')
const output=fs.createWriteStream('input.txt');
const gunzip=zlib.createGunzip();

input.pipe(gunzip).pipe(output);
console.log("File decompressed succesfully");