import Organizer from '../model/organizer-schema.js';
import Speaker from '../model/speaker-schema.js';
import Contact from '../model/contact-schema.js'
import Event from '../model/event-schema.js'
import Slider from '../model/slider-schema.js'
import News from '../model/news-schema.js'

export const addOrganizer = async (request, response) => {

    const organizer = request.body;

    const newOrganizer = new Organizer(organizer);
    try {
        await newOrganizer.save();
        response.status((200).json(newOrganizer));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getOrganizers = async(request,response)=>{
    try {
     const organizers = await Organizer.find({});
     response.status(201).json(organizers);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getOrganizer = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const organizer = await Organizer.findById(request.params.id);
     response.status(202).json(organizer);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editOrganizer = async(request,response)=>{
   let organizer = request.body;
   const editOrganizer =  new Organizer(organizer);
   try {
    await Organizer.updateOne({ _id : request.params.id},editOrganizer);
    response.status(203).json(editOrganizer);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteOrganizer = async (request, response) => {
    try{
        await Organizer.deleteOne({_id: request.params.id});
        response.status(204).json("Organizer deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}



// speaker section

export const addSpeaker = async (request, response) => {

    const speaker = request.body;

    const newSpeaker = new Speaker(speaker);
    try {
        await newSpeaker.save();
        response.status((200).json(newSpeaker));
    } catch (error) {
        response.status({ message: error.message });
    }

}


    export const getSpeakers = async(request, response)=>{
        try {
         const speakers =  await Speaker.find({});
         response.status(200).json(speakers);
        } catch (error) {
            response.status(404).json({message: error.message})
        }
    }

export const getSpeaker = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const speaker = await Speaker.findById(request.params.id);
     response.status(202).json(speaker);
    } catch (error) {
        response.status(405).json({message: error.message});
    }
}

export const editSpeaker = async(request,response)=>{
   let speaker = request.body;
   const editSpeaker =  new Speaker(speaker);
   try {
    await Speaker.updateOne({ _id : request.params.id},editSpeaker);
    response.status(203).json(editSpeaker);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteSpeaker = async (request, response) => {
    try{
        await Speaker.deleteOne({_id: request.params.id});
        response.status(204).json("Speaker deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}


// contact section

export  const addContact = async (request,response)=>{    

    const contact = request.body;


    const newContact = new Contact(contact);
 
    try{
     await newContact.save();
     response.status(201).json(newContact);    
    }
    
    catch(error){
    response.status(409).json({message: error.message});
    }
}

export const getContacts = async(request,response)=>{
    try {
     const contacts = await Contact.find({});
     response.status(201).json(contacts);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getContact = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const contact = await Contact.findById(request.params.id);
     response.status(202).json(contact);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}


// Event Section 
export const addEvent = async (request, response) => {

    const event = request.body;

    const newEvent = new Event(event);
    try {
        await newEvent.save();
        response.status((200).json(newEvent));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getEvents = async(request,response)=>{
    try {
     const events = await Event.find({});
     response.status(201).json(events);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getEvent = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const event = await Event.findById(request.params.id);
     response.status(202).json(event);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editEvent = async(request,response)=>{
   let event = request.body;
   const editEvent =  new Event(event);
   try {
    await Event.updateOne({ _id : request.params.id},editEvent);
    response.status(203).json(editEvent);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteEvent = async (request, response) => {
    try{
        await Event.deleteOne({_id: request.params.id});
        response.status(204).json("Event deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}

// Slider Section

export const addSlider = async (request, response) => {

    const slider = request.body;

    const newSlider = new Slider(slider);
    try {
        await newSlider.save();
        response.status((200).json(newSlider));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getSliders = async(request,response)=>{
    try {
     const sliders = await Slider.find({});
     response.status(201).json(sliders);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getSlider = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const slider = await Slider.findById(request.params.id);
     response.status(202).json(slider);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editSlider = async(request,response)=>{
   let slider = request.body;
   const editSlider =  new Slider(slider);
   try {
    await Slider.updateOne({ _id : request.params.id},editSlider);
    response.status(203).json(editSlider);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteSlider = async (request, response) => {
    try{
        await Slider.deleteOne({_id: request.params.id});
        response.status(204).json("Slider deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}

// news section

export const addNews = async (request, response) => {

    const news = request.body;

    const newNews = new News(news);
    try {
        await newNews.save();
        response.status((200).json(newNews));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getNewss = async(request,response)=>{
    try {
     const newss = await News.find({});
     response.status(201).json(newss);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getNews = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const news = await News.findById(request.params.id);
     response.status(202).json(news);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editNews = async(request,response)=>{
   let news = request.body;
   const editNews =  new News(news);
   try {
    await News.updateOne({ _id : request.params.id},editNews);
    response.status(203).json(editNews);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteNews = async (request, response) => {
    try{
        await News.deleteOne({_id: request.params.id});
        response.status(204).json("News deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}