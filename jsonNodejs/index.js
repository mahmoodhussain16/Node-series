// Basics json to object & object to json

const bioData={
    name:"Mahmood",
    age:25,

};

//convert to json Data
const jsonData=JSON.stringify(bioData);
// console.log(jsonData)

// jsonData to covert objdata
const objdata=JSON.parse(jsonData);
// console.log(objdata.name)

