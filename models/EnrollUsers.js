const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const enrollusersSchema = new mongoose.Schema({
    IconURL : String,
    CourseName : String, 
    DOR : String, 
    TotalAmount : String, 
    CustomerName : String, 
    Status : String, 
    StatusBg : String,
    CourseID : String,
    Location : String,
    UpdatedDate : String,
});

const EnrollusersModel = mongoose.model('Enrollusers', enrollusersSchema);
module.exports = EnrollusersModel
