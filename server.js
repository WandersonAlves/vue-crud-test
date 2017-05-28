let express = require("express"),
    app = express(),
    path = require("path");

const PORT = process.env.PORT || 8080;
/**
 * Starting the reserve proxy *
 */
const ENV = process.env.NODE_ENV;
let FOLDER;
app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + `/index.html`));
});

app.listen(PORT);

console.log(`Runing at port ${PORT} and in ${ENV} enviroment`);
