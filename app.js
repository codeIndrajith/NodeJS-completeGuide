const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
// const hbs = require('hbs');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine('hbs', expressHbs());
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'view');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(adminData.routes);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, './', 'view', '404.html'));
  res.status(404).render('404', { PageTitle: '404 Page Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
