const express = require('express');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
// import sequelize connection
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store); //also needed to store sessions???
// const { original } = require('parseurl');

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//router
app.use(controllers);

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