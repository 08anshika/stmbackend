import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const sliderSchema = mongoose.Schema({
    
    titleslider:String,
    sliderimage:String,
    slidersubtitle:String
})

autoIncrement.initialize(mongoose.connection);
sliderSchema.plugin(autoIncrement.plugin, 'slider');


const slider = mongoose.model('slider', sliderSchema);

export default slider;