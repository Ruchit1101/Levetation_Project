const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
const EmployeeModel = require('./model/Employee.ts');
const app = express();

app.use(express.json());
app.use(cors({
  credentials:true,
  origin: process.env.CLIENT_URL,
}));

app.get('/test',(req, res)=>{
  res.json("test ok");
});
mongoose.connect(process.env.MONGO_URL, (error)=>{
  if(error){
    throw error;
  }
});
const jwtSecret = process.env.JWT_SECRET;

app.post('/register',async(req, res)=>{
  const {username, password} =req.body;
  try{
    const createdUser = await Employee.create({username, password});
    jwt.sign({userId:createdUser, id},jwtSecret,{},(error, token)=>{
      if(error)
       throw error;
      res.cookie('token', token).status(201).json({
        id: createdUser._id,
      });
    });
  }
  catch(error)
   {
      if(error)
       throw error;
   }
});


app.post('/login', async(req, res)=>{
 try{
  const {email, password} = req.body;
  const user = await EmployeeModel.findOne({email:email});
  if(user){
    if(user.password === password)
     {
      res.json({message:"Logged in Successfully"});
     }
    else{
      res.status(401).json({error:"Invalid Credentials"});
    }
  }
  else{
    res.json("This email is not in our database. Please register first!");
  }
 }
 catch(error)
  {
    console.log(error);
    res.status(500).json("An error occured.");
  }
});


app.post('/form', (req, res)=>{
    const {firstname,lastname,email,phone,address1,city,district,postal,region,nation}=req.body;
    const data = new FormDataModel({firstname,lastname,email,phone,address1,city,district,postal,region,nation})
    data.save().then(()=>res.json("Data saved successfully")).catch(error=>res.json(error));
})

app.post('/form2',async(req,res)=>{
  const {selectFiles} = req.body;
  const data = new Form2DataModel({
    uploadedFiles: selectFiles?.map((file) => file.name) || [],
  });
  try {
    await data.save();
    res.json({ message: 'Data saved successfully' });
  } catch (error) {
    res.json({ error: error.message });
  }
})
app.listen(3000,()=>{
    console.log("Server is live");
})


// lML1yx0v3pJMawNN Password