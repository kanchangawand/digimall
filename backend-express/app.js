const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 

  


const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());



const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



  
require("./app/routes/product.routes")(app);
// Create a Server
const server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})