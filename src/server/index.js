const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();

const uri =
  "mongodb+srv://bolson:Mykeny194@freebcluster-tf7m0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if (err) return console.log(err);

  const collection = client.db("blogdb").collection("posts");
  // perform actions on the collection object
  collection.find().toArray((err, result) => {
    console.log(result);
  });

  client.close();
});

// we can now communicate to our express server through the browser
app.listen(3000, function() {
  console.log("listening on port 3000");
});

// GET - sent get request to the server to perform READ operation
// path - anything that comes after ".com" = "/"
// callback - tells the server what to do when the path is matched = function(req, resp){}
// dirname - directory that contains the JS source code
app.get("/", function(req, res) {
  res.send("Hello World...");
});
