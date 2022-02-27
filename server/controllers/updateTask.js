import Task from '../models/tasks.js';

const updateTask = async(req,res) => {
    const body = req.body;

    try {
        await Task.where({_id: body.id}).updateOne({task: body.task, completed: body.completed})
        res.status(201).send(body)
    }
    catch(err){
        res.status(409).send("Couldn't update task!")
    }
}

export default updateTask;