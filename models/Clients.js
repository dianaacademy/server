const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const clientsSchema = new mongoose.Schema({
    Name : String,
    Designation : String, 
    Country : String, 
    CompanyName : String, 
    ClientsID : String, 
    UpdatedDate : String, 
    TypeofDelegate : String,
    program:String,
    followupstatus:String, 
});

const ClientsModel = mongoose.model('Clients', clientsSchema);
module.exports = ClientsModel
