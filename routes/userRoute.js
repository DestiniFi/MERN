const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/push", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: "User Saved Successfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error Storing User", success: false, error });
  }
});

module.exports = router;
