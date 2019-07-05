var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodemongo");
  //Sort the result by name:
  var sort = { 'Song Name': 1 };
  dbo.collection("songdetails").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});