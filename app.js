const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
// const hbs = require('hbs');
const path = require('path');
const app = express();
const PORT = 3000;
const errorHandleController = require('./controllers/ErrorHandle');
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine('hbs', expressHbs());
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'view');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRouter);

app.use(errorHandleController.notFoundProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
