const http = require('http');
const fs = require('fs')
var url = require('url')

var count = 0
var arr = []
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const routeMap = {
        '': 'one.html'
    }

    render(req, res, (res) => {
        fs.stat('one.html', (err, stats) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');

            if (stats) {
                fs.createReadStream('one.html').pipe(res);
            } else {
                res.statusCode = 404;
                res.end('Sorry, page not found');
            }
        });
    });

    function render(req, res, callback) {
        count += 1
        var queryData = url.parse(req.url, true).query;
        if (queryData.fname, queryData.lname, queryData.email, queryData.phno, queryData.regno) {
            arr.push(queryData)
            console.log(arr)
            callback(res)
        } else {
            callback(res)
        }

    }

})


server.listen(8000, () => {
    console.log('Server is up and running');
});