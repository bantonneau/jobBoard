const router = require("express").Router()
const { Job, User } = require("../models");
const withAuth = require('../utils/auth');


router.get("/", async (req, res) => {
    try {
        const jobsArray = await Job.findAll();
        console.log(req.session.logged_in);
        if (req.session.logged_in) {
            res.render("dashboard", {
                logged_in: true,
                jobs: jobsArray
            });
        } else {
            res.render("dashboard", {
                jobs: jobsArray
            });
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/jobs/:id", async function (req, res) {
    const jobId = req.params.id;
    const job = await Job.findByPk(jobId);
    if (!job) {
        return res.status(404).send("Job not found");
    }

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

module.exports = router;

