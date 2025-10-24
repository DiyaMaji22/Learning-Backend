const fs=require('fs');
const write=fs.createWriteStream("test.txt");
write.write("this is file system");
write.end();