const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserJob extends Model { }

UserJob.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        jobId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'job',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_job',
    }
);

module.exports = UserJob;
