const path = require('path');
const express = require('express');
<<<<<<< HEAD
const session = require('express-session');
const app = express();

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
=======
// express session
const session = require('express-session');
// import sequelize connection

const routes = require('./controllers');
const sequelize = require('./config/connection');

>>>>>>> 051769653b7f690bff94c5ceb2cb8de0e5f44a1d

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

<<<<<<< HEAD
const controllers = require('./controllers');
=======
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: true
};
app.use(session(sess));
>>>>>>> 051769653b7f690bff94c5ceb2cb8de0e5f44a1d


const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: true
};
app.use(session(sess));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

<<<<<<< HEAD
//router
app.use(controllers);
=======
app.use(routes);
>>>>>>> 051769653b7f690bff94c5ceb2cb8de0e5f44a1d

// Express setup
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: true
};
app.use(session(sess));

const PORT = process.env.PORT || 3001;
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});