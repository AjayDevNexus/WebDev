const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const regschema = require('./model/regschema');
router.use(express.json());

router.post("/",(req,res)=> {
   let a={
    username:req.body.username,
    password:req.body.password
   }
    regschema.find({"username":a.username,"password":a.password}).then(data=>{
     if(data.length>=1){
        res.send("login sucessful...");
     }
     else{
        res.status(401);
     }
    }).catch(err=>{
        console.log(err)
       res.send("error data")
    })
   });
module.exports=router;