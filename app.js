const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
// const hbs = require('hbs');
const path = require('path');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const errorHandleController = require('./controllers/ErrorHandle');
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

// app.engine('hbs', expressHbs());
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'view');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRouter);

app.use(errorHandleController.notFoundProduct);

Product.belongsTo(User, { constraint: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: 'Jhone', email: 'test@gmail.com' });
    }
    return user;
  })
  .then((user) => {
    // console.log(user);
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
