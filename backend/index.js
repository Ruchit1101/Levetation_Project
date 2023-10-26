const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const EmployeeModel = require('./model/Employee.ts');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     credentials:true,
//     origin:process.env.CLIENT_URL,
// }));
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const bcryptSalt= bcrypt.genSaltSync(10);
// app.post('/register', (req, res)=>{
//   const {username, password} = req.body;
//   const hashedPassword = bcrypt.hashSync(password,bcryptSalt);
//   EmployeeModel.create({username, password:hashedPassword}).then(registration=>res.json(registration)).catch(error=>res.json(error))
// })
app.post('/register', (req, res)=>{
  EmployeeModel.create(req.body).then(registration=>res.json(registration)).catch(error=>res.json(error))
})
  
// app.post('/login', (req, res)=>{
//     const {email, password} = req.body;
//     EmployeeModel.findOne({email:email}).then(user=>{
//         if(user){
//           const passOk =   bcrypt.compareSync(password, user.password)
//             if(user){
//                 res.json("Success");
//             }
//             else{
//                 res.json("Invalid Credentials!");
//             }
//         }
//         else{
//             res.json("Please register first");
//         }
//     })
// })
app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email}).then(user=>{
        if(user){
            if(user){
                res.json("Success");
            }
            else{
                res.json("Invalid Credentials!");
            }
        }
        else{
            res.json("Please register first");
        }
    })
})
app.listen(3000, ()=>{
    console.log("Server is live");
})
// 
// test1 abc@gmail.com asdf   test2 ab@gmail.com asdf