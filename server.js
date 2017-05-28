var express = require("express"),
    app = express(),
    path = require("path"),
    httpProxy = require('http-proxy'),
    apiProxy = httpProxy.createProxyServer(),
    apiServer = 'http://localhost:8081';

const PORT = process.env.PORT || 8080;
/**
 * Starting the reserve proxy *
 */
const ENV = process.env.NODE_ENV;
let FOLDER;

app.use('/src/assets', express.static(__dirname + `/src/assets`));
app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + `/index.html`));
});

app.all("/api/*", function(req, res) {
    // NOTE: Route the request to another server in another place
    apiProxy.web(req, res, {target: apiServer});
});

app.listen(PORT);

console.log(`Runing at port ${PORT} and in ${ENV} enviroment`);
