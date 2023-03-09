const express = require('express')

const app = express();

app.use(require('./router/auth'))




  app.get('/*',(req,res)=>{
    res.send("error page not found")
   
  })



app.listen(8000,()=>{
    console.log('server is running on port 8000')
})