const express = require("express");
const rdvRouter = express.Router();
const rdv = require("../models/rdv");

//create a rdv and post it
//methode:post

rdvRouter.post("/", async (req, res) => {
  try {
    const newrdv = new rdv(req.body);
    let result = await newrdv.save();
    res.status(200).send({ result: result, msg: "rdv added perfectly" });
  } catch (error) {
    res.status(500).send("can't save the rdv");
    console.log(error);
  }
});
//get all rdvs
//methode:get
rdvRouter.get("/", async (req, res) => {
  try {
    let result = await rdv.find();
    res.status(200).send({ rdvs: result, msg: "all rdvs:" });
  } catch (error) {
    res.status(500).send("cannot get the rdvs");
    console.log(error);
  }
});

//get one rdv
//methode:get
//params
rdvRouter.get("/:id", async (req, res) => {
  try {
    let result = await rdv.findOne({ _id: req.params.id });
    res.status(200).send({ resu: result, msg: "this is the rdv.." });
  } catch (error) {
    res.status(500).send("cannot get the rdv");
  }
});

//update rdv
//methode:put
//req.body
//params

rdvRouter.put("/:id", async (req, res) => {
  try {
    let result = await rdv.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    );
    res.status(200).send({ newrdv: result, msg: "rdv updated..." });
  } catch (error) {
    res.status(500).send("cannot update the rdv..");
    console.log(error);
  }
});
//delete rdv
//methode:delete
//params

rdvRouter.delete("/:id", async (req, res) => {
  try {
    let resut = await rdv.findOneAndRemove({ _id: req.params.id });
    res.status(200).send({ msg: "rdv removed..." });
  } catch (error) {
    res.status(500).send("cannot delete the rdv..");
  }
});

module.exports = rdvRouter;
