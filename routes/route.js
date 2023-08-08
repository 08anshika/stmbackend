import express from 'express';
import { addOrganizer, getOrganizers, getOrganizer, editOrganizer, deleteOrganizer } from '../controller/organizer-controller.js';
import { addSpeaker, getSpeakers, getSpeaker, editSpeaker, deleteSpeaker } from '../controller/organizer-controller.js';
import { addEvent, getEvents, getEvent, editEvent, deleteEvent } from '../controller/organizer-controller.js';
import { addSlider, getSliders, getSlider, editSlider, deleteSlider } from '../controller/organizer-controller.js';
import { addContact, getContacts, getContact } from '../controller/organizer-controller.js'; 
import { addNews, getNewss, getNews, editNews, deleteNews } from '../controller/organizer-controller.js';

const router = express.Router();


// Organizer route 
router.post('/add-organizer',addOrganizer);
router.get('/all-organizers',getOrganizers);
router.get('/organizer:id',getOrganizer);
router.put('/organizer:id',editOrganizer);
router.delete('/organizer:id',deleteOrganizer);


// Speaker route

router.post('/add-speaker',addSpeaker);
router.get('/all-speakers',getSpeakers);
router.get('/speaker:id',getSpeaker);
router.put('/speaker:id',editSpeaker);
router.delete('/speaker:id',deleteSpeaker);

// Event Section
router.post('/add-event',addEvent);
router.get('/all-events',getEvents);
router.get('/event:id',getEvent);
router.put('/event:id',editEvent);
router.delete('/event:id',deleteEvent);

// slider section
router.post('/add-slider',addSlider);
router.get('/all-sliders',getSliders);
router.get('/slider:id',getSlider);
router.put('/slider:id',editSlider);
router.delete('/slider:id',deleteSlider);

// contact
router.post('/contact', addContact);
router.get('/all-contact',getContacts);
router.get('/contact:id', getContact);

// news section

router.post('/add-news',addNews);
router.get('/all-news',getNewss);
router.get('/news:id',getNews);
router.put('/news:id',editNews);
router.delete('/news:id',deleteNews);

export default router;