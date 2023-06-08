const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Define a route to render the Handlebars file
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const port = 3000; // Change the port number if desired
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
