const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();
//Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/api/catalog', require('./routes/Catalog'));
app.use('/api/user', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
