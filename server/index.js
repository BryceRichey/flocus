const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

const tasks = require('./routes/tasks.js');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(tasks);

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);