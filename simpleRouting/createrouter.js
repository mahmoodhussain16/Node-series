const http =require('http')
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
    }else{
        response.end('404 page not found')
    }
}); 

server.listen(8000,'localhost',()=>{
   
    console.log('Server has started');
})
   
