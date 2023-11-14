const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const campaignSchema = new mongoose.Schema({
    CampainName : String,
    Clicked : String, 
    Leads : String, 
    Updated : String, 
    UpdatedDate : String, 
    StatusBg : String, 
    Status : String,
});

const CampaignModel = mongoose.model('campaigns', campaignSchema);
module.exports = CampaignModel
