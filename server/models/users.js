const mongoose = require("mongoose")

//create the user schema / model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

//export the model
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel
