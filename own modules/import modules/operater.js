const add=(a,b)=>{
    return a+b;

}
const sub=(a,b)=>{
    return a-b;

}
const multi=(a,b)=>{
    return a*b;

}

const name="Mahmood";

// module.exports.name=name; 
// module.exports.add=add; 
// module.exports.multi=multi; 
// module.exports.sub=sub; 

// modules object destructuring

module.exports={add,sub,multi,name}