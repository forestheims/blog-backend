const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:7891',
      'https://forestheims.dev',
      'https://www.forestheims.dev',
      'https://forestheims.com',
      'https://www.forestheims.com',
      'https://forestheims.net',
      'https://www.forestheims.net',
      'https://forestheims.org',
      'https://www.forestheims.org',
      'https://forestheims.netlify.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use('/api/v1/links', require('./controllers/links.js'));
app.use('/api/v1/blogs', require('./controllers/blogs.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
