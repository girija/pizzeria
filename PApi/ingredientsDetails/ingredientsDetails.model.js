const Mongoose = require("mongoose");
const IngredientsDetailsSchema = new Mongoose.Schema({
  id: { type: "number" },
  tname: { type: "string" },
  price: { type: "number" },
  image: { type: "string" },
});

const IngredientsDetailsModel = Mongoose.model(
  "ingredients",
  IngredientsDetailsSchema
);

module.exports = IngredientsDetailsModel;
