const express =require('express')
const Users =require('../model/user-model')
const router=new express.Router()
router.use(express.json())
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//new-user

router.post("/api/user/createnew", async (req, res) => {
  
  bcrypt.hash(req.body.password,10).then(hash=>{
      const user =new Users({
          contact_number:req.body.contact_number,
          company_name:req.body.company_name,
          password:hash
      })
      user.save();
      res.send("Users added")
  })
 
  });


//all saved user
router.get('/api/user/all',async(req,res)=>{
    try{ 
        res.send( await Users.find({}))
    }
    catch(e){
        res.status(400)
        res.send(e)
    }

})


//login
router.post("/api/user/login",async(req,res)=>{
  console.log(req.body)
        const user=await Users.findByCred(req.body.contact_number,req.body.password) 
        //console.log(user)
        if(user==true){
        const token=jwt.sign({contact_number:req.body.contact_number,contact_number:req.body.contact_number},'secret_key_for_balaji_exports',{expiresIn:"1h"})
       const b=token.toString();
        res.status(200)
      //  await res.json("bjauth");
        res.json(b).send()
       console.log(b)
        }
        else{
            res.status(400)
            res.send("no")        }
      
 
})


 module.exports=router