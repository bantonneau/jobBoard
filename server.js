const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const route = require("./controllers/job-routes")
const session = require('express-session');

const PORT = process.env.PORT || 8080;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(route);


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})