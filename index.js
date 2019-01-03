const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./api');
const cors = require('cors');
const app = express();

app.use(cors());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.static('./assets'));

app.listen(process.env.port || 3000 , () => {
    console.log('now listening for requests......');
});