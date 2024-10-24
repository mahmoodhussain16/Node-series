// fs modules import  (filesystem)
// const fs =require("fs");

// create file and write text
// fs.writeFileSync('read.txt',"Welcome");

// replace text
// fs.writeFileSync('read.txt',"welcome to Academy");

// add more text
// fs.appendFileSync('read.txt',"Mahmood Hussain");

// read file
// fs.readFileSync('read.txt')


// by default it is in binary form
// const data = fs.readFileSync('read.txt');
// console.log(data);

// example binary form
{/* <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 41 63 61 64 65 6d 79 4d 61 68 6d 6f 6f 64 20 48 75 73 73 61 69 6e> */}

// to convert it into string
// const data = fs.readFileSync('read.txt', "utf8");
// console.log(data);

// rename file
// fs.renameSync('read.txt', 'readwrite.txt');