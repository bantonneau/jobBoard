const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/search", async (req, res) => {
    try {
        const { location, experience, minSalary } = req.body;

        let locationCriteria = {};
        if (location === 'Remote') {
            locationCriteria = { remote: true };
        } else if (location === 'Hybrid') {
            locationCriteria = { hybrid: true };
        } else if (location === 'On-Site') {
            locationCriteria = { onSite: true };
        }

        const jobsArray = await Job.findAll({
            where: {
                experience: experience,
                salary: {
                    [sequelize.Op.gte]: minSalary
                },
                ...locationCriteria
            }
        });

        if (req.session.logged_in) {
            res.json({
                logged_in: true,
                jobs: jobsArray
            });
        } else {
            res.json({
                jobs: jobsArray
            });
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

const { UserJob } = require('../../models');

router.post('/save', async (req, res) => {
    try {
        // Make sure the user is logged in
        if (!req.session.user_id) {
            res.status(401).json({ message: 'Please log in' });
            return;
        }

        // Create a new UserJob instance with the user ID and job ID
        const userJob = await UserJob.create({
            userId: req.session.user_id,
            jobId: req.body.jobId,
        });

        res.json(userJob);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;


