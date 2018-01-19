// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }


//ORM => Object for selectAll, insertOne, updateOne SQL statement functions.
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT*FROM ??";
    connection.query(queryString, [table], function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function (table, col, values, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, col, values], function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (table, colChange, valueChange, col, value, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, colChange, valueChange, col, value], function (err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
