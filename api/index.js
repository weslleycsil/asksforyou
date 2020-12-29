const express = require('express');
const app = express();
const mongo = require("./utils/db");
const port = 3000

var bodyParser = require("body-parser");
var cors = require('cors');
var corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    optionsSuccessStatus: 204
};
var main_routes = require('./routers/routes')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', main_routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})










