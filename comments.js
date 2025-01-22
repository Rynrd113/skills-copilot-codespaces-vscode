// create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    var name = query.name;
    var comment = query.comment;
    fs.appendFile('comment.txt', name + ' : ' + comment + '\n', 'utf8', function (err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Comment Success</h1>');
    });
}).listen(52273, function () {
    console.log('Server Running at http://