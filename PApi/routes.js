const express = require("express");
const router = new express.Router();
const pizzaRoutes = require("./pizzaDetails");
const ingredientsRoutes = require("./ingredientsDetails");
const app = express();

router.use("/orderPizza", pizzaRoutes);
router.use("/buildUrPizza", ingredientsRoutes);

module.exports = router;
