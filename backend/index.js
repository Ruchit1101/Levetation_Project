const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./model/Employee.ts');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Levetation");
app.post('/login', (req, res)=>{
  const {email, password} = req.body;
  EmployeeModel.findOne({email:email}).then(user =>{
    if(user){
      if(user.password === password)
       {
        res.json("Successfully Login");
        //take to the table page
        // res.json('/form')
       }
      else{
        res.json("Invalid Credentials");
      }
    }
   else{
      res.json("The email is not in our database. Please register first!");
   }
  })
})

app.post('/register', (req, res)=>{
  EmployeeModel.create(req.body).then(employee =>res.json(employee)).catch(error=>res.json(error))
})
app.listen(3000,()=>{
    console.log("server is running");
})