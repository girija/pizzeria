const express = require("express");
const router = express.Router();
const IngredientsDetailsModel = require("./ingredientsDetails.model");

router.get("", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  IngredientsDetailsModel.find({}).then(
    (ingredients) => {
      res.send({
        ingredients: ingredients,
      });
    },
    (error) => {
      res.status(500).send({
        error: "Internal Server Error",
      });
    }
  );
});

router.post("", (req, res) => {
  let id = req.body.id;
  let tname = req.body.tname;
  let price = req.body.price;
  let image = req.body.image;
  let newdata = new IngredientsDetailsModel({
    id,
    tname,
    price,
    image,
  });
  newdata.save().then((d) => {
    res.send(d);
  });
});

module.exports = router;
