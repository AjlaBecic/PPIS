const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const AppRouter = require('./routes/index.route');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors());

app.use('/', AppRouter);

app.listen(port);