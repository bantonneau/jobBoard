const router = require("express").Router()
const Job = require("../models/Job");

router.get("/", async function (req, res) {
    const jobsArray = await Job.findAll();
    return res.render("dashboard", {
         jobsArray
    })
})

router.get("/jobs/:id", async function (req, res) {
    const jobId = req.params.id; 
    const job = await Job.findByPk(jobId);
    if (!job) {
        return res.status(404).send("Job not found");
    }
    console.log(job)
    return res.render("job", { job });
});

module.exports = router;   


// const router = require("express").Router()
// const jobListings = require("../models/jobs.json");

// router.get("/", function (req, res) {
//     return res.render("dashboard", {
//          jobsArray: jobListings
//     })
// })


// router.get("/jobs/:id", function (req, res) {
//     const jobId = req.params.id; 
//     const job = jobListings.find(job => job.id == jobId);
//     if (!job) {
//         return res.status(404).send("Job not found");
//     }
//     console.log(job)
//     return res.render("job", { job });
// });

// module.exports = router;    