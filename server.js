const path = require('path');
const express = require('express');
<<<<<<< HEAD
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
=======
// express session
>>>>>>> 0517696 (corrected server.js by taking out handlebars references)
const session = require('express-session');
// import sequelize connection

const routes = require('./controllers');
const sequelize = require('./config/connection');
<<<<<<< HEAD
const sequelizeStore = require('connect-session-sequelize')(session.Store); //also needed to store sessions???
// const { original } = require('parseurl');
=======

>>>>>>> 0517696 (corrected server.js by taking out handlebars references)

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
=======
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnitialized: true
};
app.use(session(sess));
>>>>>>> 0517696 (corrected server.js by taking out handlebars references)

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

<<<<<<< HEAD
//router
app.use(controllers);
=======
app.use(routes);
>>>>>>> 0517696 (corrected server.js by taking out handlebars references)

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};
app.use(session(sess));

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
});