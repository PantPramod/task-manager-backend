const todo = require("../Modal/todo");

const getDataOfUser = async (req, res) => {
    try {
        const { userId } = req.body;

        const result = await todo.find({ userId });

        res.json({ result })
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}


const saveDataOfUser = async (req, res) => {
    try {
        const { title, Description, type, priority, userId } = req.body
        const newTodo = new todo({ title, Description, type, priority, userId });
        const isSaved = await newTodo.save()
        res.json(isSaved)
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}

const deleteDataOfUser= async(req, res)=>{
try{
    const result= await todo.deleteOne({_id:req.body.userId})
    res.json(result)
}catch(err){
    res.json({err:err.message})
}
  
}
module.exports = {
    getDataOfUser,
    saveDataOfUser,
    deleteDataOfUser
}