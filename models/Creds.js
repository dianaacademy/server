const mongoose = require ('mongoose')


const CredsSchema = new mongoose.Schema({
    Email : String,
    Password : String,  
});

const CredsModel = mongoose.model('Creds', CredsSchema);
module.exports = CredsModel
