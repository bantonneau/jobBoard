const router = require("express").Router()
const { Job, User } = require("../models");
const withAuth = require('../utils/auth');


router.get("/", async function (req, res) {
    const jobsArray = await Job.findAll();
    console.log('Jobs retrieved:', jobsArray);
    return res.render("dashboard", {
         jobs: jobsArray
    });
});

router.get("/jobs/:id", async function (req, res) {
    const jobId = req.params.id; 
    const job = await Job.findByPk(jobId);
    if (!job) {
        return res.status(404).send("Job not found");
    }
    console.log(job)
    return res.render("job", { job });
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router;   

