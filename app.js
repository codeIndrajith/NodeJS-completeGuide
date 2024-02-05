const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './', 'view', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
