const http =require('http')
const fs =require('fs')
const server =http.createServer((request,response)=>{
    let path =request.url;
    // response.end(path)//path change in browser from change request

  //simple routing handling different pages
    if(path==='/'||path==='/home'){
        response.end('you are in home page')
    }else if (path==='/about'){
        response.end('about page');
    }else if(path==='/contact'){
        response.end('Contact page');
    }else if(path==='/userapi'){ //Api data collect  userApi  folder
        fs.readFile(`${__dirname}/userApi/userapi.json`,'utf-8',(err,data)=>{
            console.log(data);
            response.end(data);
        })
        response.end('User Api');
    }
    else{
        response.writeHead(404)//status code
        response.end('404 page not found') 
    }
}); 

server.listen(8000,'localhost',()=>{
   
    console.log('Server has started');
})
   
