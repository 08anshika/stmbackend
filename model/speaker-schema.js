import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;


const speakerSchema =  mongoose.Schema({
    nameofspeaker:String,
    urlofspeaker:String,
    speakeremail:String,
    contactnumber:String,
    about:String,
    addressline1:String,
    country:String,
    state:String,
    pincode:String,
    contactpersonname:String,
    contactpersondesignation:String,
    contactpersonemail:String,
    contactpersonphone:String,
    contactpersonimage:String,
})

autoIncrement.initialize(mongoose.connection);
speakerSchema.plugin(autoIncrement.plugin,'Speaker');

const speaker = mongoose.model('Speaker',speakerSchema);

export default speaker;