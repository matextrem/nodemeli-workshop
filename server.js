const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const utils = require('./utils');
const posts = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(utils.setHeaders);

app.get('/', (req, res, next) => {
    res.send({ recentPosts: posts });
})

app.post('/posts', (req, res, next) => { 
    console.log('nuevo post, original url:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('llego al siguiente con este body:', req.body);
    const newPost = Object.assign(req.body,  {id: posts.length + 1, date: new Date() });
    posts.push(newPost);
    res.send(Object.assign(newPost, { message: 'Post creado exitosamente' }));
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});