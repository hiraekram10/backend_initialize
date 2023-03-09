const express = require('express');


const router = express.Router();

router.get('/register',(req,res)=>{
    res.send({
        message:'hello from register'
    })
})
router.get('/contact',(req,res)=>{
    res.send("hello from contact")
   
  })
router.get('/about',(req,res)=>{
    res.send("hello from about")
   
  })




module.exports = router