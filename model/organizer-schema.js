import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;


const organizerSchema =  mongoose.Schema({
    nameoforganization:String,
    urloforganization:String,
    organizationemail:String,
    contactnumber:String,
    about:String,
    addressline1:String,
    country:String,
    state:String,
    pincode:String,
    contactpersonname:String,
    contactpersondesignation: String,
    contactpersonemail:String,
    contactpersonphone:String,
    contactpersonimage:String,
})

autoIncrement.initialize(mongoose.connection);
organizerSchema.plugin(autoIncrement.plugin,'Organizer');

const organizer = mongoose.model('Organizer',organizerSchema);

export default organizer;