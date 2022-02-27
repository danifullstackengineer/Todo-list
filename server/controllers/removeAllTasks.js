import Task from '../models/tasks.js';

const removeAllTasks = async (req,res) => {
    try {
        await Task.deleteMany({})
        res.status(201).send("Removed all!")
        console.log("removed all tasks!")
    }
    catch(err) {
        res.status(409).send("Couldn't remov e all tasks!")
    }

}

export default removeAllTasks;