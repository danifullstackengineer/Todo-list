import Task from '../models/tasks.js';

const removeAllTasks = async (req,res) => {
    try {

        //Mongo db has bug where it doesn't delete first element if using deleteMany({})
        await Task.deleteMany({})
        
        res.status(201).send("Removed all!")
        console.log("removed all tasks!")
    }
    catch(err) {
        console.log(err)
        res.status(409).send("Couldn't remov e all tasks!")
    }

}

export default removeAllTasks;