var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodemongo");
  var myobj = [
    { 'Song Name': 'Thaniye Thananthaniye', Film: 'Rhythm', 'Music Director': 'A.R.Rahman', Singer: 'Shankar mahadevan'},
    { 'Song Name': 'Evano Oruvan', Film: 'Alai Payuthey', 'Music Director': 'A.R.Rahman', Singer: 'Swarnalatha'},
    { 'Song Name': 'Roja Poonthottam', Film: 'Kannukkul Nilavu', 'Music Director': 'Ilaiyaraaja', Singer: ['Unnikrishnan', 'Anuradha Sriram']},
    { 'Song Name': 'Vennilavae Vennilavae Vinnaithaandi', Film: 'Minsara Kanavu', 'Music Director': 'A.R.Rahman', Singer: ['Hariharan', 'Sadhana Sargam']},
    { 'Song Name': 'Sollamal Thottu Chellum Thendral', Film: 'Dheena', 'Music Director': 'Yuvan Shankar Raja', Singer: 'Hariharan'}
  ];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(`Number of documents inserted:  ${res.insertedCount}`);
    db.close();
  });
});