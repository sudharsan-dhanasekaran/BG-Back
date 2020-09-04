// const jwt=require("jsonwebtoken")
// const User=require('../model/user-model')

// module.exports = (req,res,next)=>{
//     try{
//         const token=req.header.('Authorization').replace('Bearer ', "")
//      const decoded=   jwt.verify(token,"secret_key_for_balaji_exports");
//      const user= await User.findOne({_id:decoded._id,'tokens.token':token})
   
//     if(!user){
//         throw new Error()
//     }
// req.user=user
// next()
//     }
//     catch(e){
//         res.status(401).json({message:"Auth Failed!"})
//     }

// };