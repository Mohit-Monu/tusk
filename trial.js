const http = require('http');
const routes=require('./routes.js')
http.createServer(routes.handler).listen(4000);