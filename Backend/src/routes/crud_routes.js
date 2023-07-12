const express = require("express");

const userRoute = express.Router();

const { Usermodel } = require("../../models/user_model");

userRoute.post("/postuser", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const data = new Usermodel({ name, email, phone });
    await data.save();
    res.status(200).send({ msg: "Uploaded successfully" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRoute.get("/getuser", async (req, res) => {
  try {
    const data = await Usermodel.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRoute.get("/getuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Usermodel.find({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRoute.patch("/updateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Usermodel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRoute.delete("/deleteuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Usermodel.findByIdAndDelete({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = { userRoute };
