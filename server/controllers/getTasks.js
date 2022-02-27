import Task from '../models/tasks.js';

const getTasks = async (req,res) => {
    try{
        const taskMessage = await Task.find();
        console.log("Got tasks!")
        res.status(200).send(taskMessage);
    }
    catch(err){
        console.error(err)
        res.status(404).send("No task found!")
    }
}

export default getTasks;