const mongoose = require ('mongoose')
//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that


const leadsSchema = new mongoose.Schema({
    Name : String,
    Designation : String, 
    Country : String, 
    CompanyName : String, 
    ClientsID : String, 
    UpdatedDate : String, 
    TypeofDelegate : String,
    program:String,
    followupstatus:String, 
    Contact:String, 
    Email:String, 
    ClientID:String, 
});

const LeadsModel = mongoose.model('Leads', leadsSchema);
module.exports = LeadsModel
