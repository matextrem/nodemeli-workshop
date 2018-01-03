const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const posts = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));

// app.get('/', (req, res, next) => {
//     res.send({ recentPosts: posts});
// })

app.post('/create-post', (req, res, next) => { 
    console.log('nuevo post, original url:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('llego al siguiente con este body:', req.body);
    posts.push(req.body);
    res.send({ message: 'post creado exitosamente', desc: req.body.desc, title: req.body.title });
})

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});