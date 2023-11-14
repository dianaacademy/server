const mongoose = require('mongoose')
//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that
const supportSchema = new mongoose.Schema({

    TicketId: String,
    Name: String,
    Summary: String,
    Status: String,
    Assignee: String,
    Reporter: String,
    Department: String,
    Created: String,
    Priority: String,
});
const SupportModel = mongoose.model('Support', supportSchema);

module.exports = SupportModel;