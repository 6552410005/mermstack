const http = require('http')

const PORT = 3000

//create web server
const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.writeHead(200, {'Content-type':'text/html'})
        response.write('<h1>Home page </h1><hr>Home...')
        response.end()
    }else if(request.url == '/product'){
        response.writeHead(200, {'Content-type':'text/html'})
        response.write('<h1>Product</h1><hr>Product...')
        response.end()
    }else if(request.url == '/about'){
        response.writeHead(200, {'Content-type':'text/html'})
        response.write('<h1>About</h1><hr>About...')
        response.end()
    }else{
        response.writeHead(404, {'Content-type':'text/html'})
        response.write('<h1>404</h1><hr>^0^')
        response.end()
    }
});

//สั่ง server start และคอยรับ request จาก user พร้อมแสดงสถานะการทำงานของ server
server.listen(PORT,()=>{
    console.log('server runging on port ' + PORT);
});