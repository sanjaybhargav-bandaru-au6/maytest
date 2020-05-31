const mongoose = require('mongoose');
const mongoosePginate = require('mongoose-paginate')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:String
    },
    {
        employee:[
            {e_name:String},
            {e_email:String},
            {e_passowrd:String},
            {e_number:Number},
            {e_dob:String},
            {join_Date:String},
            {resign_date:String},
            {current_date:String}
        ]
      
    },
    { timestamps: true }
  );

  userSchema.plugin(mongoosePginate)
const User = mongoose.model("companies",userSchema,"companies");
module.exports = User;