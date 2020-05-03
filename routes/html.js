const router = require("express").Router();

router.get("/*", function(req, res) {
    res.redirect("/");
});

module.exports = router;