//initiate express and connect
const express = require("express");
const app = express();

//allow to connect to frontend
const cors = require('cors')

//enable json with express
app.use(express.json());
app.use(cors())

//initiate mongoose
const mongoose = require("mongoose");

//calling the models from users.js
const UserModel = require('./models/Users');

//mongodb atlas connection
mongoose.connect("mongodb+srv://user123:user123@cluster0.3v4tc72.mongodb.net/mern?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Atlas connection established!"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas: ", error));

//GET Users Method
app.get("/getUsers", (req,res) =>{
    UserModel.find({},(err,result)=>{
        if(err){
            console.log("error: ", err);
            res.json(err);
        } else {
            console.log("result: ", result);
            res.json(result);
        }
    });
});

//POST createUser method
app.post("/createUser", async (req,res) =>{
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save() //mongodb method

    res.json(user)
});

app.listen(3001, ()=> {
    console.log("Express server runs")
});
