const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const {errors} = require('celebrate');

const routes = require('./routes');

const port = process.env.PORT || 3333;
const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));