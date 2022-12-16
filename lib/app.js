const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:PORT', 'https://frontend.url'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use('/api/v1/blogs', require('./controllers/blogs.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
