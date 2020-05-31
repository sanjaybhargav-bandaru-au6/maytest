const mongoose = require('mongoose');
const mongoosePginate = require('mongoose-paginate')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema(    
            {
              e_name:{type:String},
            e_email:{type:String},
            e_comp_id:{type:String},
            e_number:{type:String},
            e_dob:{type:String},
            e_comp_details:[
                {
                  join_date:{type:String},
                resign_date:{type:String},
                comp_name:{type:String},
                prev_comp:{type:String},
                current_date:{type:String}
              }
            ]
          },
            

      
    
    { timestamps: true }
  );

  userSchema.plugin(mongoosePginate)
const User2 = mongoose.model("companies_emp2",userSchema,"companies_emp2");
module.exports = User2;