const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
const { connection } = require("../config/config");

app.use(express.json());
const { userRoute } = require("./routes/crud_routes");

app.use("/users", userRoute);

app.get("/", async (req, res) => {
  try {
    res.status(200).send("Welcome to Home Page");
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Server is running on prt 4500");
  } catch (error) {
    console.log({ msg: error.message });
  }
});
