const express = require('express');
const { authenticatUser } = require('../Handlers/user');

const router = express.Router();


router.post('/',authenticatUser) 
module.exports = router