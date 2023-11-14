const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const documentSchema = new mongoose.Schema({
    IconURL : String,
    CourseName : String, 
    CustomerName : String, 
    Status : String, 
    CourseID : String, 
    CourseDt : String, 
    UpdatedDate : String,
    StatusBg : String,
});

const DocumentsModel = mongoose.model('Documents', documentSchema);
module.exports = DocumentsModel
