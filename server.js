const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

//data
const jobListings = require("./models/jobs.json")

app.use(express.static("public"));

//body parser for POsts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})