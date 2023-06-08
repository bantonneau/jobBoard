const router = require("express").Router()

router.get("/", function(req,res){
    return res.render("dashboard")
})


router.get("/jobs/:id", function(req,res){
    return res.render("job");
})

module.exports = router;