const express = require('express');
const router = express.Router();

const app_Controller = require('../controller/appController');

<<<<<<< HEAD
router.get('/', app_Controller.app);
router.get('/bok', app_Controller.bok),

=======
router.get('/', app_Controller.login);
router.get('/booking', app_Controller.app);
>>>>>>> 90d5f1032b2286bc9fabaeb056b907f73ef93e1b




module.exports = router;