const mongoose = require ('mongoose')
//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that
const TutorSchema = new mongoose.Schema({
    InstructorName : String,
    InstructorEmail : String, 
    InstructorPhone : String, 
    Specialisations : String, 
    ProjectName : String, 
    Status : String, 
    ShiftTimings : String,
    Location : String,
    DateAdded : String,
    InstructorID : String,
    StatusBg : String,
    InstructorImage : String,
});

const TutorModel = mongoose.model('Tutor', TutorSchema);
module.exports = TutorModel