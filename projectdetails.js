const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const projectschema = require('./model/projectschema');

router.use(express.json());
router.post('/creation',(req, res) => {
    let idea={
        projectid:req.body.projectid,
        projecttitle:req.body.projecttitle,
        projectidea:req.body.projectidea,
        description:req.body.description,
        subject:req.body.subject,
        requirements:req.body.requirements,
        future:req.body.future
        
    }
    let r =new projectschema(idea);
    r.save().then(()=>{
      res.send("Project sucessfully stored.");
    }).catch(err=>{
        console.log(err);
      res.send("fill all details of project");
    })
  });
  /* /display project  */
  router.get("/display",(req,res)=> {
    projectschema.find({}).then(data=>{
       res.send(data);
    }).catch(err=>{
       res.send("erorr not showing")
    })
   });
   /* /delete */
   router.delete("/delete",(req,res)=>{
    let projectid=req.body.projectid;
    projectschema.deleteOne({"projectid":projectid}).then(()=>{
        res.send("delete sucessful..."+projectid);
     }).catch(err=>{
         console.log(err)
        res.send("error data failed ")
     });
    });


  module.exports=router;