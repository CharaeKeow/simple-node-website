let fs = require('fs'); //To serve file
let http = require('http'); 
let url = require('url'); //Need this to split url to serve the right page

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;    
    if (filename == './') {
        fs.readFile('./index.html', (error, content) => {
            if (error) throw (error);
            res.writeHead(200, {'Content-Type': 'text/html'});
            //return res.end(content, 'utf-8');
            res.write(content);
            res.end();
        });
    } else if (filename == './about') {
        fs.readFile('./about.html', (error, content) => {
            if (error) throw(error);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();                
        });
    } else if (filename == './contact-me') {
        fs.readFile('./contact-me.html', (error, content) => {
            if (error) throw(error);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();
        });
    }
    else {            
        fs.readFile('./404.html', (error, content) => {
            if (error) throw(error);
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();
        });          
    }
}).listen(8080);

console.log("Running at 127.0.0.1:8080...")