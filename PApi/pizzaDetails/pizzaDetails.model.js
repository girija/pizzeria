const Mongoose = require("mongoose");
const PizzaDetailsSchema = new Mongoose.Schema({
  id: { type: "number" },
  type: { type: "string" },
  price: { type: "number" },
  name: { type: "string" },
  image: { type: "string" },
  description: { type: "string" },
  ingredients: { type: ["string"] },
  topping: { type: ["string"] },
});

const PizzaDetailsModel = Mongoose.model("pizza", PizzaDetailsSchema);

module.exports = PizzaDetailsModel;
