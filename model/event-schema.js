import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const eventSchema = mongoose.Schema({
    
    nameofspeaker:String,
    speakerimage:String,
    speakeremail:String,
    contactnumber:String,
    about:String,
    addressline:String,
    eventdate:String,
    eventstarttime:String,
    eventendtime:String
})

autoIncrement.initialize(mongoose.connection);
eventSchema.plugin(autoIncrement.plugin, 'event');


const event = mongoose.model('event', eventSchema);

export default event;