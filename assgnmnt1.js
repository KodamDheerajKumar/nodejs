const http = require('http');


const  server =http.createServer((req, res) => {
    const url= req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page </title></head>');
        res.write('<body><form action = "/create-user" method ="POST"><input type = "text" name ="message"><button type = "submit">Send</button></input></form></body> ');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h1>This is Users Page </h1></body>');
        res.write('<body><ul><li>Dheeraj</li><li>Raghs</li><li>Aniketh</li></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user' ) {
        const body = [];
        req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
        });
     
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location',  '/');
        return res.end();    
            
        
    }

});

server.listen(4000);