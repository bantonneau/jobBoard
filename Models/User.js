const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('./config/connection.js');
const { name, username, password, host, dialect } = config.database;
const sequelize = new Sequelize(name, username, password, {
  host: host,
  dialect: dialect,
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    },
  },
});

module.exports = User;

