const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remote: {
        type: DataTypes.BOOLEAN,
      },
      hybrid: {
        type: DataTypes.BOOLEAN,
      },
      onSite: {
        type: DataTypes.BOOLEAN,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responsibilities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requirements: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'job',
    }
  );
  
  module.exports = Job;
  