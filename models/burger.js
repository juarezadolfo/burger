// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(col, values, cb) {
    orm.insertOne("burgers", cols, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(colChange, valueChange, col, value, cb) {
    orm.updateOne("burgers", colChange, valueChange, col, value, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
