import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const contactSchema = mongoose.Schema({
    
	fullname:String,
		email:String,
		subject:String,
		message:String
})

autoIncrement.initialize(mongoose.connection);
contactSchema.plugin(autoIncrement.plugin, 'contact');


const contact = mongoose.model('contact', contactSchema);

export default contact;