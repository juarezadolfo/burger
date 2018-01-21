var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (result) {
    var hbsObject = {
      burgers: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the new burger
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id
    burger.updateOne(
        "devoured", 1,
        "id", id,
        function (result) {
            res.redirect("/");
        });
});


// Export routes for server.js to use.
module.exports = router;
