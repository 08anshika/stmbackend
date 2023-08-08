import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const newsSchema = mongoose.Schema({
    
    newstitle:String,
    newsdate:String,
    newspicture:String,
    aboutnews:String
})

autoIncrement.initialize(mongoose.connection);
newsSchema.plugin(autoIncrement.plugin, 'news');


const news = mongoose.model('news', newsSchema);

export default news;