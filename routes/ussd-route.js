const express = require('express');
const { handleUssd, testAPI } = require('../controllers/ussd-controller');

const router = express.Router();

router.get('/test', testAPI);
router.post('/ussd', handleUssd);

module.exports = router;