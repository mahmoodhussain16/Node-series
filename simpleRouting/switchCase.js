const http =require('http')
const server =http.createServer((req,res)=>{
 
  //simple routing handling different pages from switch case
  switch (req.url) {
        case "/":
          res.end("Home page: " );
          break;
        case "/home":
          res.end("Home page: " );
          break;
        case "/contact":
          res.end("Contact page: ");
          break;
        case "/about":
          res.end("About page: " );
          break;
        case "/about?memberships":
          res.end("Membership page: ");
          break;
        default:
          res.end("404 Not found: " );
      }
}); 

server.listen(8000,'localhost',()=>{
   
    console.log('Server has started');
})
   