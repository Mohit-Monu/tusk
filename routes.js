const fs = require('fs');
function handler(req, res) {
    const method = req.method;
    var linkk = ""
    function data() {
        return new Promise((resolve, reject) => {
            fs.readFile('message.txt', 'utf-8', (err, item) => {
                linkk = item
                resolve();
            })
        })
    }
    function fetching() {
        return new Promise((resolve, reject) => {
            res.write('<html><head><title>Document</title></head><body><h1>' + linkk + '</h1><form method="POST"><input type="text" name="message"><input type="submit"></form></body></html>');
            resolve();

        })
    }
    async function authorization() {
        await data();
        await fetching();
    }
    authorization();
    if (method === "POST") {
        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
            // console.log(chunck)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}
module.exports={
    handler:handler
}


