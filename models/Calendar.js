const mongoose = require ('mongoose')

//Always use Plural Collection name instad of Singular 
//like CLients not Clients
//Supports not Support like that



const calendarSchema = new mongoose.Schema({
    Id : String,
    Subject : String, 
    Location : String, 
    StartTime : Date, 
    EndTime : Date, 
    Description : String, 
    CategoryColor : String,
    MeetingHead : String,
    Added : String,
});

const CalendarModel = mongoose.model('calenders', calendarSchema);
module.exports = CalendarModel
