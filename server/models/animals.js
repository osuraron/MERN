const mongoose = require("mongoose");

//create the animals schema / model
const AnimalSchema = new mongoose.Schema({
  animal: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

//export the model
const AnimalModel = mongoose.model("animals", AnimalSchema);
module.exports = AnimalModel;
