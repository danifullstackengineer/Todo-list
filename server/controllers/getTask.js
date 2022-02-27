import Task from "../models/tasks.js";

const getTask = async (req, res) => {
  
    const body = req.body

    try {
        const task = await Task.findById({_id:body.id})
        res.status(200).send(task)
    }
    catch(err) {
        res.status(404).send("Task not found!")
    }

};
export default getTask;
