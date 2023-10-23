const mongoose =  require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const EmployeeModel = mongoose.model("employees",EmployeeSchema)

const FormDataSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    address1:String,
    city:String,
    district:String,
    postal:String,
    state:String,
    nation:String
});
const FormDataModel = mongoose.model("formdata",FormDataSchema);

const Form2DataSchema = new mongoose.Schema({
   uploadedFiles:[{type:String}],
   multiSelectOption:[String]
});
const Form2DataModel = mongoose.model('form2data',Form2DataSchema);


module.exports = {
    employees:EmployeeModel,
    formdata:FormDataModel,
    form2data:Form2DataModel
};