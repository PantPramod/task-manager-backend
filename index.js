const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter =  require('./Routes/user')
const loginRouter = require('./Routes/login')
const todoRouter = require('./Routes/todo')
const PORT = process.env.PORT || 8000
const DATABASE_URI= 'mongodb+srv://pramod:aJy9JQosRlCwEr8q@cluster0.vyd8hjg.mongodb.net/taskmanager-db'

app.use(cors())
app.use(express.json())

mongoose.connect(DATABASE_URI, ()=>{
    console.log("DB Connected at URI ", DATABASE_URI)
})




app.use('/api/user',userRouter);
app.use('/api/login', loginRouter);

app.use('/api/todo', todoRouter)

app.listen(PORT, ()=>{
    console.log("app start at PORT ", PORT)
})