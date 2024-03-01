const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const hiringSchema = new mongoose.Schema({
    Id : String,
    candidateName : String, 
    candidateEmail : String, 
    candidatePhone : String, 
    specialized : String, 
    Status : String, 
    Location : String,
    updated : String,
    interviewround : String,
    candidateID : String,
});

const HiringModel = mongoose.model('hirings', hiringSchema);
module.exports = HiringModel
