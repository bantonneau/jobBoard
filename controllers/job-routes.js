const router = require("express").Router()
const jobListings = require("../models/jobs.json");

router.get("/", function (req, res) {
    return res.render("dashboard")
})


router.get("/jobs/:id", function (req, res) {
    const jobId = req.params.id; // Access the 'id' parameter from the URL
    // Attach the job listing with the corresponding id to the response
    const job = jobListings.find(job => job.id == jobId);
    if (!job) {
        // Handle the case where the job with the given id is not found
        return res.status(404).send("Job not found");
    }
    console.log(job)
    return res.render("job", { job });
});

module.exports = router;