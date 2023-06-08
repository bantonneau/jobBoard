const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const route = require("./controllers/job-routes")

const PORT = process.env.PORT || 8080;

//data
const jobListings = require("./models/jobs.json");

app.use(express.static("public"));

//body parser for POsts
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