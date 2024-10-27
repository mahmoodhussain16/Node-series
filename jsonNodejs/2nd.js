const fs=require("fs");

const bioData={
    name:"Mahmood",
    age:25,

};
//Convert to JSON
const jsonData=JSON.stringify(bioData);

// json Data add in other file
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("done");
// })

// read file
fs.readFile('json1.json',"utf-8",(err,data)=>{
    // console.log(data);

//  again covert jsonData to objdata   
    const orgData=JSON.parse(data);
console.log(orgData);
})


