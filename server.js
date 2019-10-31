const express = require('express');

const widgets = require('./widgetdata');

const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static('static/css'));
app.use('/img', express.static('static/img'));
app.use('/js', express.static('static/js'));

app.use((req, res, next) => {
    const resRender = res.render;
    res.render = (pageTemplate, pageTitle, data, error) => {
        data = data || {};

        data.__error = error || '';

        data.__site = {
            author: 'Michael Buhler',
            title: 'Widget Viewer',
            company: 'Workiva'
        };
        data.__page = {
            template: pageTemplate,
            title: pageTitle + ' - Workiva UX Takehome - Michael Buhler'
        };

        return resRender.call(res, 'site', data);
    };
    next();
});

app.get('/', (req, res) => {
    res.redirect('/widgets');
});

app.get('/widgets', (req, res) => {
    res.render('widgets', 'Widgets', {widgets});
});

const server = app.listen(3000, function () {
    console.log('Open browser to http://localhost:'+server.address().port+'/');
});