
const express  = require ('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const formcontroller = require('./controllers/submit')
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyparser.json());

app.use('/submit',formcontroller.submitting)

app.listen(port);
