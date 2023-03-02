const express = require('express');
const router = express.Router();
const contactus = require('../controllers/contactus.controller.js');

//view all contacts
router.get('/listall', contactus().allcontactus)
//create contact
router.post('/create', contactus().createcontactus)

module.exports = router;