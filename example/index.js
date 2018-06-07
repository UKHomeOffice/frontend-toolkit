const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const sass = require('node-sass-middleware');

const app = express();

const PORT = process.env.PORT || 3000;

const views = ['../templates', './views'].map(p => path.resolve(__dirname, p));

app.set('view engine', 'html');

nunjucks.configure(views, { express: app });

app.use(sass({
    src: path.resolve(__dirname, '../styles'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/styles',
    response: true,
    includePaths: [
      path.resolve(__dirname, '../node_modules')
    ]
}))
app.use('/styles', express.static(path.resolve(__dirname, '../styles')));

app.get('/', (req, res) => res.render('index'));

app.listen(PORT);
