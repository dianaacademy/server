const mongoose = require ('mongoose')
//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that


const loginsSchema = new mongoose.Schema({
    IconURL : String,
    CourseName : String, 
    RegisterDate : String, 
    StudentName : String, 
    TotalAmount : String, 
    Status : String, 
    OrderID : String,
    Location : String,
    DateAdded : String,
    EnrollmentID : String,
    StatusBg : String,
});

const LoginsModel = mongoose.model('Logins', loginsSchema);
module.exports = LoginsModel
