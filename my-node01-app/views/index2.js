const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

//create web server
const server = http.createServer((request, response)=>{
  if (request.url == '/') {
    getPage(response, 'home.html');
  } else if (request.url == '/product') {
    getPage(response, 'product.html');
  } else if (request.url == '/about') {
    getPage(response, 'about.html');
  } else {
    response.writeHead(404, { 'Content-type': 'text/html' });
    response.write('<h1>404</h1><hr>^0^');
    response.end();
  }
});

server.listen(PORT,()=>{
    console.log('server runging on port ' + PORT);
})

//สร้าง ฟังชันในการเรียกหน้าเพจ
function getPage(response, pageFile){
    response.writeHead(200,{'Content-type':'text/html'})

    fs.readFile(
      path.join(__dirname,'views', pageFile),
      function(err, data){
          if(err) throw err
          response.write(data)
          response.end()
      }
  )
}
