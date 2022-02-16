const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const controllers = require('./controllers');


const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: true
};
//NOTE: add SESSION_SECRET to .env file
app.use(session(sess));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//router
app.use(controllers);


const PORT = process.env.PORT || 3001;
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});