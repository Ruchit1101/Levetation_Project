const mongoose = require('mongoose');
// For registration
const EmployeeSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const FormSchema = new mongoose.Schema({
    firstname:String,
    lastname:String, 
    email:String,
    phone:String,
    street:String,
    city:String,
    district:String,
    postal:String,
    state:String,
    nation:String
 });
 module.exports = {
    EmployeeModel: mongoose.model("registrations", EmployeeSchema),
    FormModel: mongoose.model("forms", FormSchema)
};