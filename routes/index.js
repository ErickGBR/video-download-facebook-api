const { Router } = require('express');

const model = require('../models');
const router = Router();
router.post('/facebook', model.facebookResponse);

module.exports = router;