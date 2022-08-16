const express = require('express');
const todo = require('../Modal/todo');
const router = express.Router()
const {getDataOfUser, saveDataOfUser, deleteDataOfUser} = require('../Handlers/todo')

router.post('/',saveDataOfUser)

router.post('/get', getDataOfUser)


router.delete('/', deleteDataOfUser)

module.exports = router;