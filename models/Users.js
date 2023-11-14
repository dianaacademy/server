const mongoose = require ('mongoose')
//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that
const UserSchema = new mongoose.Schema({
    CourseName : String,
    CourseID : String, 
    InstructorName : String,
    TrainingID : String, 
    StartDate : String, 
    StatusBro : String, 
    EndDate : String, 
    UpdatedDate : String,
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel