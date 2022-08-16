const user = require('../Modal/user');

const createUser = async (req, res) => {
    const { name, password } = req.body;
    const userExist = await user.findOne({ name, password });

    if (!userExist) {
        const newUser = new user({
            name,
            password
        })
        try {
            const isSavedUser = await newUser.save();
            console.log("isSaved USer", isSavedUser)
            res.json(isSavedUser)
        } catch (err) {
            res.status(404).json({ "err": err.message })
        }


    } else {
        res.status(404).json({ err: "User Exist already" })
    }

}

const authenticatUser = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.status(404).json({ message: "wrong format data" })
    } else {
        try {
            const userExist = await user.findOne({ name, password });
            if (!userExist) {
                res.status(404).json({ message: "User Not Exist" })
            } else {
                res.json(userExist)
            }

        } catch (err) {
            res.json({ err: err.message })
        }
    }
}

module.exports = {
    createUser,
    authenticatUser
}