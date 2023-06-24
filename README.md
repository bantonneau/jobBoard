# Job Board App
![License Badge](https://img.shields.io/badge/license-MIT-green)

## Description
This is a Job Board App that uses Node and Express to handle backend operations and Handlebars.js as the template engine. The application has a folder structure that meets the MVC paradigm, is backed by a MySQL database with a Sequelize ORM, and protects API keys and sensitive information with environment variables.

The application includes user authentication (express-session and cookies) and features job listings with full descriptions, responsibilities, and requirements. The site has fully encrypted user authentication and is deployed with Heroku using JawsDB for the database. Once logged in, users can save jobs for later, which can be found on their profile page. There is also a feature under development that will allow jobs to be filtered by experience, remote vs. in-person, and salary.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Features](#features)
* [Questions](#questions)
* [Credits](#credits)
* [License](#license)

## Installation
1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command: `npm install`
4. Seed the database by running the following command: `npm run seed`

## Usage
<img width="906" alt="image" src="https://github.com/bantonneau/jobBoard/assets/109747300/571c1ef3-b26c-4da3-80f7-40c7fa74706c">

The deployed app can be found at the following link:

https://ancient-dusk-05754-ae43192e47d1.herokuapp.com/

To use the Job Board App locally, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the application using the command: `node server.js`
3. Visit the application in your web browser at `http://localhost:3000` or the deployed Heroku app link.

## Project Structure
The Job Board App consists of the following main files and folders:

* `server.js`: This file sets up the Express server, sets the Handlebars engine, defines middleware, and starts the server.
* `controllers`: This directory contains route handler files.
* `models`: This directory contains Sequelize models for the MySQL database.
* `config`: This directory contains the connection.js file for connecting to the MySQL database.
* `public`: This directory contains the frontend files like HTML, CSS, and browser-side JavaScript.
* `views`: This directory contains Handlebars templates.

## Features
The Job Board App allows you to browse job listings, sign up, and log in to save jobs for later. All user authentication is fully encrypted. The app uses Bulma for the front-end framework.

There is a feature currently in development to filter jobs by experience, remote vs. in-person, and salary.

## Questions
If you have any questions or issues, feel free to reach out via:

* Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)
* GitHub: [@bantonneau](https://github.com/bantonneau)

## Credits
This project was developed by Ben Antonneau and Blaine Duran. Special thanks to the contributors of the open-source libraries and frameworks used in this project:

* [Express.js](https://expressjs.com/): A minimalist web framework for Node.js.
* [Handlebars.js](https://handlebarsjs.com/): A popular templating engine.
* [Sequelize](https://sequelize.org/): A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [Bulma](https://bulma.io/): A free, open-source CSS framework based on Flexbox.
* [JawsDB](https://www.jawsdb.com/): An add-on for providing a fully functional MySQL Database server for use with your

 Heroku application.
* [Heroku](https://www.heroku.com/): A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for personal or commercial purposes. Please refer to the license document for more information.
