const mongoose = require("mongoose");
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  company_name: {
    type: String,
    //   trim:true
  },
  contact_number: {
    type: Number,
  //  required: true,
    //unique: true,
    trim: true,
  },

  password: {
    type: String,
    //required: true      
             }
});

//methods
userSchema.methods.getPublicProfile= function(){
   const user=this
   const userObject =user.toObject()
  return userObject
}
//fn
userSchema.statics.findByCred=async(contact_number,password)=>{
const user=await Users.findOne({contact_number:contact_number})
//console.log(user)

if(!user)
{
  return "unauthorized"
}
return bcryptjs.compare(password,user.password)


}

//should be exported. Inorderto use model in router or anyotherplace
const Users = mongoose.model("Users", userSchema);
module.exports = Users;
