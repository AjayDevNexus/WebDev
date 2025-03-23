const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   projectid: {
    type:String,
    require:true
   },
projecttitle:{
type:String,
require:true
},
  projectidea: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:true
  },
  subject: {
    type: String,
    required:true
  },
  requirements: {
    type: String,
    required:true
  },
  future:{

  }
});

module.exports = mongoose.model('projectschema', userSchema);
