const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

const sequelize = require('./config/connection');

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));

const session = require('express-session');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
})

//below code is not in Chris boilerplate

app.use(
    session({
      secret: 'SECRET',
      resave: false,
      saveUninitialized: false,
      cookie: {
        resave: false, 
        httpOnly: true,
        maxAge: 3600000, 
      },
    })
  );
  

app.use(express.static("public"));


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})