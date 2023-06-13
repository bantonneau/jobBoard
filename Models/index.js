const Sequelize = require('sequelize');
const config = require('../config/connection'); // make sure this path leads to your database config file

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Job = require('./Job')(sequelize, Sequelize.DataTypes);
const User = require('./User')(sequelize, Sequelize.DataTypes);

// If your models have any relationships, set them up here.
// For example, if a User has many Jobs, you might write:
// User.hasMany(Job);

module.exports = {
    sequelize,
    Sequelize,
    Job,
    User
};
