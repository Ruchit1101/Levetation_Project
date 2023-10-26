const mongoose = require('mongoose');
// For registration
const EmployeeSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const EmployeeModel = mongoose.model("registration", EmployeeSchema);
module.exports = EmployeeModel;