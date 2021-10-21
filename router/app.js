
const express = require('express');
const router = express.Router();

const app_Controller = require('../controller/appController');

router.get('/', app_Controller.login);
router.get('/booking', app_Controller.app);
router.post('/booking', app_Controller.appUpdate);
router.get('/myBookings', app_Controller.myBookings);





module.exports = router;