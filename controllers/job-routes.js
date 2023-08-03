const router = require("express").Router()
const { Job, User } = require("../models");
const withAuth = require('../utils/auth');


router.get("/", async (req, res) => {
    try {
        console.log("Session: ", req.session);  // log session

        const jobsArray = await Job.findAll();
        console.log(req.session.logged_in);
        if (req.session.logged_in) {
            res.render("dashboard", {
                logged_in: true,
                jobs: jobsArray
            });
        } else {
            res.render("dashboard", {
                logged_in: false,
                jobs: jobsArray
            });
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/jobs/:id", async function (req, res) {
    const jobId = req.params.id;
    const jobInstance = await Job.findByPk(jobId);
    if (!jobInstance) {
        return res.status(404).send("Job not found");
    }

    const job = jobInstance.get({ plain: true });

    job.responsibilities = JSON.parse(job.responsibilities);
    job.requirements = JSON.parse(job.requirements);

    return res.render("job", {
        job,
        logged_in: req.session.logged_in
    });
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        console.log("Session User ID:", req.session.user_id);

        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            include: [{ model: Job }],
        });

        console.log("User Data:", userData);

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        const user = userData.get({ plain: true });
        console.log("User Object:", user);

        const savedJobs = user.jobs || [];  // Use lowercase 'j' in 'jobs'
        console.log("Saved Jobs:", savedJobs);

        res.render('profile', {
            savedJobs,
            logged_in: true
        });

    } catch (err) {
        console.error(err);  // Log the error to the console
        res.status(500).json(err);
    }
});

router.get('/apply', function(req, res) {
    res.render('apply');
});


module.exports = router;

