const mongoose = require('mongoose')

const connectionURL="mongodb+srv://dbUer:FOLu8s4LvsHLwIP7@cluster0.ikyx4.mongodb.net/balaji-exports?retryWrites=true&w=majority"
;

const mongodb= async()=>{
   await mongoose.connect(connectionURL,{useUnifiedTopology:true,useNewUrlParser:true}) // url,opt
   console.log(connectionURL)
}


module.exports=mongodb
