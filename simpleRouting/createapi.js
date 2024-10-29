const http =require('http')
const fs =require('fs')
const server =http.createServer((request,response)=>{
    let path =request.url;
    const product= fs.readFileSync(`${__dirname}/userApi/userapi.json`,'utf-8')


        //api call
        const objData=JSON.parse(product);
        response.end(product.name);
        
 
    // response.end(path)//path change in browser from change request

  //simple routing handling different pages
    if(path==='/'||path==='/home'){
        response.end('you are in home page')
    }else if (path==='/about'){
        response.end('about page');
    }else if(path==='/contact'){
        response.end('Contact page');
    }else if(path==='/userapi'){
        response.writeHead(200,{'content-type':'application/json'})//status code
        response.end(objData.name)

     
    }
    else{
        response.writeHead(404)//status code
        response.end('404 page not found') 
    }
}); 

server.listen(8000,'localhost',()=>{
   
    console.log('Server has started');
})
   
