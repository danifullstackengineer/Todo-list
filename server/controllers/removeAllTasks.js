import Task from '../models/tasks.js';

const removeAllTasks = async (req,res) => {
    try {
        await Task.deleteMany({})
        res.status(201).send("Removed all!")
    }
    catch(err) {
        res.status(409).send("Couldn't remov e all tasks!")
    }

}

export default removeAllTasks;