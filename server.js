const express = require('express');

const widgets = require('./widgetdata');

const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static('static/css'));
app.use('/img', express.static('static/img'));
app.use('/js', express.static('static/js'));

/*
 * Define helper wrapper for express's `res.render()`
 */
app.use((req, res, next) => {
    const resRender = res.render;
    res.render = (pageTemplate, pageTitle, data, error) => {
        data = data || {};

        data.__js = data.__js || [];

        data.__error = error || '';

        data.__site = {
            author: 'Michael Buhler',
            title: 'Workiva Widget Viewer',
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

app.get('/widgets/:id', (req, res) => {
    const widget = widgets.find(widget => {
        return widget.id === req.params.id;
    });
    if (widget) {
        res.render('widget', widget.name+' - Widgets', {widget});
    } else {
        res.status(404).render('widget', 'Not Found', null, 'No widget found with id `'+req.params.id+'`!');
    }
});

app.get('/revenue', (req, res) => {
    res.render('revenue', 'Revenue', {__js:['https://www.gstatic.com/charts/loader.js']});
});

const revenueByYear = widgets.reduce((acc, widget) => {
    const year = widget.timestamp.substring(0,4);
    acc[year] = acc[year] || 0;
    acc[year] += widget.revenue;
    return acc;
}, {});
app.get('/api/revenueByYear', (req, res) => {
    res.json(revenueByYear);
});

const revenueByCategory = widgets.reduce((acc, widget) => {
    const category = widget.category;
    acc[category] = acc[category] || 0;
    acc[category] += widget.revenue;
    return acc;
}, {});
app.get('/api/revenueByCategory', (req, res) => {
    res.json(revenueByCategory);
});

const server = app.listen(3000, function () {
    console.log('Open browser to http://localhost:'+server.address().port+'/');
});