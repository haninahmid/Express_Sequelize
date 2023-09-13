const express = require('express')
const app = express();

const postsRoutes = require('./routes/posts');

app.use('/posts',postsRoutes);

module.exports =app;