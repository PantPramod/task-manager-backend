const express =  require('express')
const user = require('../Modal/user')
const router =  express.Router()
const userHandler = require('../Handlers/user')
router.get('/', async(req, res)=>{
    const users = await user.find({}) 
    res.json({data:users})
})

router.post('/', userHandler.createUser)


module.exports = router;