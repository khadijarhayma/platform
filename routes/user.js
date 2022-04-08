const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//const { findOne } = require("../models/doctor");
//const { restart } = require("nodemon");
//const { Router } = require("express");

//router.get("/",(req,res)=>{
// res.send("hello word");
//});

//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const {
    name,
    lastname,
    photo,
    email,
    phone,
    prix,
    password,
    adress,
    category,
    timework,
    isdomicile,
    rate,
  } = req.body;
  try {
    const newuser = new user({
      name,
      lastname,
      email,
      phone,
      password,
      timework,
      isdomicile,
      category,

      rate,
      photo,
      adress,
      prix,
    });
    //check if the email exist
    const searcheduser = await user.findOne({ email });
    if (searcheduser) {
      res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newuser.password = hashedPassword;
    //generate a token
    //const token = await jwt.sign(payload,process.env.Secretorkey,{expiresIn:3600});
    // console.log(token);
    //save the doctor
    const newuserToken = await newuser.save();
    const payload = {
      _id: newuserToken._id,
      name: newuserToken.name,
    };
    const token = await jwt.sign(payload, process.env.Secretorkey, {
      expiresIn: 3600,
    });

    res.status(200).send({
      user: newuserToken,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send("can not save the user");
    console.log(error);
  }
});

//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the doctor exist
    const searcheduser = await user.findOne({ email });
    //if the email not exist
    if (!searcheduser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //passwords are equals
    const match = await bcrypt.compare(password, searcheduser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //cree un token
    const payload = {
      _id: searcheduser._id,
      name: searcheduser.name,
    };
    const token = await jwt.sign(payload, process.env.Secretorkey, {
      expiresIn: 3600,
    });
    console.log(token);
    //send the doctor
    res
      .status(200)
      .send({ user: searcheduser, msg: "success", token: `bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
    console.log(error);
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});
router.put("/:id", async (req, res) => {
  try {
    let result = await user.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "user updated" });
  } catch (error) {
    console.log(error);
  }
});
//get all users
router.get("/users", async (req, res) => {
  try {
    let result = await user.find();
    res.send({ users: result, msg: "get all users" });
  } catch (error) {
    console.log(error);
  }
});
//get one user
router.get("/:id", async (req, res) => {
  try {
    const result = await user.findOne({ _id: req.params.id });

    res.send({ user: result, msg: "get user" });
  } catch (error) {
    console.log(error);
  }
});
//update users
router.put("/:id", async (req, res) => {
  try {
    let result = await user.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newuser: result, msg: "user updated.." });
  } catch (error) {
    res.status(500).send("cannot update the user..");
    console.log(error);
  }
});
//delete user
router.delete("/:id", async (req, res) => {
  try {
    let result = await user.findOneAndRemove({
      _id: req.params.id,
    });

    res.send({ msg: "user deleted" });
  } catch (error) {
    res.status(500).send("cannot delete user..");
    console.log(error);
  }
});
module.exports = router;
