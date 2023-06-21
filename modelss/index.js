// index.js
const User = require('./User');
const Job = require('./Job');
const UserJob = require('./UserJob');

User.belongsToMany(Job, {
  through: UserJob,
  foreignKey: 'userId',
  otherKey: 'jobId'
});

Job.belongsToMany(User, {
  through: UserJob,
  foreignKey: 'jobId',
  otherKey: 'userId'
});

module.exports = { User, Job, UserJob };
