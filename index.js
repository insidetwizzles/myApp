const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }

    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content) => {
    //         res.writeHead(200,{'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name:'Addie', age: '23' },
    //         { name:'Jess', age: '24' },
    //     ];

    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.end(JSON.stringify(users));
    // }

    // build filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    // get file extension
    let extName = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';
     
    // change content type depending on file extension
    switch (extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'text/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/png';
            break;
    }

    // read file
    fs.readFile(filePath, (err,content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                // some server error
                res.writeHead(500,{'Content-Type': 'text/html'});
                res.end(`server error: ${err.code}`);
            }
        } else {
            res.writeHead(200,{'Content-Type': contentType});
            res.end((content), 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));