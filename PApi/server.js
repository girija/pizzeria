const express = require("express");
const bodyparser = require("body-parser");
const Mongoose = require("mongoose");
const routes = require("./routes");
//const dbUrl = "mongodb://localhost:27017/pizzeriaApp";
const dbUrl = "mongodb+srv://girija:Mongo@123@cluster0.5zql6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 9000;
const app = express();
const cors = require("cors");

app.use(bodyparser.json());
app.use(routes);

// var corsOptions = {
//   origin: "http://localhost:4200",
//   optionsSuccessStatus: 200,
// };

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
//   next();
// });

// app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(PORT, () => {
  console.log("Server is listening on port ", PORT);
  Mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => {
      console.log("Connected to database");
    },
    (error) => {
      console.log("Error in connecting database", error);
    }
  );
});
