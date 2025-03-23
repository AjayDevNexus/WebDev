const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const regschema = require('./model/regschema');
router.use(express.json());
router.post('/',(req, res) => {
    let d={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:req.body.password
    }
    let r =new regschema(d);
    r.save().then(()=>{
      res.send("sucessfully registerd ");
    }).catch(err=>{
        console.log(err);
      res.send("fill all details");
    })
  });
  module.exports=router;