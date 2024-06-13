const express = require('express')
const bodyParser = require('body-parser')

const employessRoutes = require('./routes/employees-routes')
const companiesRoutes = require('./routes/companies-routes')
const generalRoutes = require('./routes/general-routes.js')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

    next();
});

app.use('/employees',employessRoutes)

app.use('/companies', companiesRoutes)

app.use('/', generalRoutes)

app.listen(5000); 