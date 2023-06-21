const sequelize = require('../config/connection');
const { User, Job, UserJob } = require('../models');

const userData = require('./user-seeds.json');
const jobData = require('./job-seeds.json');
const userJobData = require('./userJob-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const jobs = await Job.bulkCreate(jobData, {
    individualHooks: true,
    returning: true,
  });

  const userJobs = await UserJob.bulkCreate(userJobData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
