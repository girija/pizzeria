const express = require("express");
const router = new express.Router();
const PizzaDetailsModel = require("./pizzaDetails.model");

router.get("", (req, res) => {
  // console.log("In pizza details");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  PizzaDetailsModel.find({}).then(
    (pizza) => {
      res.send({
        pizza: pizza,
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
  //let id = req.body.id;
  let type = req.body.type;
  let price = req.body.price;
  let name = req.body.name;
  //let image = req.body.image;
  let description = req.body.description;
  let ingredients = req.body.ingredients;
  let topping = req.body.topping;
  let newdata = new PizzaDetailsModel({
    //id,
    type,
    price,
    name,
    //image,
    description,
    ingredients,
    topping,
  });
  newdata.save().then((d) => {
    res.send(d);
  });
});

module.exports = router;
