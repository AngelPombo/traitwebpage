const express = require('express');

const addEvent = require('../controllers/events/addEvent');
const getEvent = require('../controllers/events/getEvent');
const editEvent = require('../controllers/events/editEvent');
const addEventPhoto = require('../controllers/events/addEventPhoto');
const deleteEvent = require('../controllers/events/deleteEvent');
const deleteEventPhoto = require('../controllers/events/deleteEventPhoto');
const getAllEvents = require('../controllers/events/getAllEvents');

const authAdmin = require('../middlewares/authAdmin');
const eventExists = require('../middlewares/eventExists');


const eventsRouter = express.Router();

eventsRouter.get('/:idEvent', eventExists, getEvent);

eventsRouter.get('/view/all', getAllEvents); 
eventsRouter.post('/admin/add', authAdmin, addEvent);
eventsRouter.post('/admin/add-photo/:idEvent', authAdmin, eventExists, addEventPhoto);
eventsRouter.put('/admin/edit/:idEvent', authAdmin, eventExists, editEvent);
eventsRouter.delete('/admin/delete/:idEvent', authAdmin, eventExists, deleteEvent);
eventsRouter.delete('/admin/:idEvent/delete/photo/:idPhoto', authAdmin, eventExists, deleteEventPhoto); 

module.exports = eventsRouter;