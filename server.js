const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.setHeader('content-Type','text/html');
let path = './views/';
switch(req.url){
    case '/kongu':
        path +='index.html';
        console.log("request by  kec")
        break;
    case '/skm':
        path +='marketing.html';
        console.log("request by skm")
        break;
    default:
        path +='404.html';
        break;
}



    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.end(data, 'utf-8');
        }
    })

});

server.listen(port, () => {
    console.log('listening for  request on port 3000');
});