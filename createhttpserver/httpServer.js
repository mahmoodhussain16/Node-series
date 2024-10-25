const http =require('http')
const fs=require('fs')//add fs module import

const html=fs.readFileSync('Template/index.html','utf-8')
//sending html page response after create server

// creating a web server

// step 1 create a web server
const server =http.createServer((request,response)=>{
    
    // response in server
    response.end(html);

    console.log('request received');
 
    //request & response in object
    // console.log(request);
    // console.log(response);s
});

//step 2 start the server
server.listen(8000,'localhost',()=>{
   
    console.log('Server has started');
})
   
// ctrl C in terminal for server stop then new run