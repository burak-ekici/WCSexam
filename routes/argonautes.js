const express = require("express");
const router = express.Router();
const { ArgonautesModel } = require('../models/ArgonautesModel.js');

router.get("/get", async (req, res) => {
  const argonautes = await ArgonautesModel.find({})
  if(argonautes && argonautes.length > 0){
    res.json(argonautes)
  }
});

router.get("/get/:name", async (req, res) => {
  res.send("hello world");
});

router.post("/add", async(req, res) => {
  const newArgonaute = new ArgonautesModel({
    Name: req.body.argonauteName
  })

  newArgonaute.save((err, docs)=>{
    if(!err) res.send(docs)
    else console.log('error creating new Data :' , err)
  })
});

router.delete("/delete/:id", async(req, res) => {
  const id = req.params.id
  if(id){
    await ArgonautesModel.findByIdAndDelete( {'_id' : id} , function (err, docs) {
      if (err){
          console.log('erreur generer dans la route delete : delete/:id , message :' ,err)
      }
      else{
          console.log("Deleted : ", docs);
          res.send(docs);
      }
    })
  }
  
});

router.put("/edit/:id", async(req, res) => {
  const id = req.params.id
  const newValue  = req.body.newValue
  let doc = await ArgonautesModel.findOneAndUpdate({ '_id' : id} , { 'Name' : newValue})
  res.send(doc)
});

module.exports = router
