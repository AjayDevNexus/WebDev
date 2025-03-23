const express = require('express');
const mongoose = require('mongoose');
const regform=require("./registration");
const login=require("./login");
const project=require("./projectdetails");
const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/project', {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use("/resgistration",regform);
app.use("/login",login);
app.use('/project',project)




app.listen(4001, () => {
    console.log('Server is running.....');
  });