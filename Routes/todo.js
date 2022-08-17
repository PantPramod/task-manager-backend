const express = require('express');
const todo = require('../Modal/todo');
const router = express.Router()
const {getDataOfUser, saveDataOfUser, deleteDataOfUser, updateDataOfUser} = require('../Handlers/todo')

router.post('/',saveDataOfUser)

router.post('/get', getDataOfUser)

router.patch('/:id',updateDataOfUser )

router.delete('/', deleteDataOfUser)

module.exports = router;